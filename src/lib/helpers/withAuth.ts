import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { isValidVersion } from "../apiVersion";

const JWT_SECRET = process.env.JWT_SECRET!;
const VALID_API_KEYS = (process.env.API_KEYS || "").split(",");

export interface UserPayload {
  user_id: string;
  email: string;
  role?: string;
  [key: string]: any;
}

// Extend Express Request type to include custom fields
declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
      apiVersion?: string;
      apiKey?: string;
    }
  }
}

export function withAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const version = req.headers["x-api-version"] as string;
  const apiKey = req.headers["x-api-key"] as string;

  if (!version) {
    return res.status(400).json({ message: "API version required" });
  }
  if (!isValidVersion(version)) {
    return res.status(400).json({ message: `Invalid API version: ${version}` });
  }

  // Check API key
  if (!apiKey || !VALID_API_KEYS.includes(apiKey)) {
    return res.status(401).json({ message: "Invalid API key" });
  }

  // Check JWT
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as UserPayload;

    req.user = user;
    req.apiVersion = version;
    req.apiKey = apiKey;

    next(); // Continue to route
  } catch (err) {
    console.error("JWT verification failed:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

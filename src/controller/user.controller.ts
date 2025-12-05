import { NextFunction, Request, Response } from "express";
import { getAllUsers, getUserById, CreateUser } from "@/services/user.service";

export async function getAllUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    next();
  } catch (error) {}
}

import dotenv from "dotenv";
import express from "express";
import swaggerUI from "swagger-ui-express";
import { withAuth } from "./lib/helpers/withAuth";

//Router Imports
import UserRouter from "./routes/user.route";
import ServiceRouter from "./routes/service.route";
import RoleRouter from "./routes/role.route";
import ProfileRouter from "./routes/profile.route";
import ProductRouter from "./routes/product.route";
// import MediaRouter from "./routes/media.route";
// import LogsRouter from "./routes/logs.route";
import Duration_Price from "./routes/duration_price.route";
import BranchRoute from "./routes/branch.route";
import BookingRoute from "./routes/booking.route";
// import AuthRouter from "./routes/auth.route";
import AddressRouter from "./routes/address.route";

const YAML = require("js-yaml");

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocu = YAML.load("./src/swagger/main.yaml");

app.use("/users", UserRouter);
app.use("/services", ServiceRouter);
app.use("/roles", RoleRouter);
app.use("/profiles", ProfileRouter);
app.use("/products", ProductRouter);
// app.use("/media", MediaRouter);
// app.use("/logs", LogsRouter);
app.use("/duration_price", Duration_Price);
app.use("/branches", BranchRoute);
app.use("/bookings", BookingRoute);
// app.use("/auth", AuthRouter);
app.use("/addresses", AddressRouter);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocu));

app.listen(3000, () => {
  console.log("The port is running at http://localhost:3000");
  console.log("Swagger docs available at http://localhost:3000/api-docs");
});

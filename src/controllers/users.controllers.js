import jwt from "jsonwebtoken";
import path from "path";

process.loadEnvFile();

const __dirname = import.meta.dirname
const myKey = process.env.SECRET_KEY;

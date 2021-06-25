import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // receive param Token
  const authToken = request.headers.authorization;
  // authToken is fill
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");
  // Token is valid
  verify(token, "8fe89604b272161f597317948f630ece");

  // get user information
  return next();
}
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // receive param Token
  const authToken = request.headers.authorization;
  // authToken is fill
  if (!authToken) {
    return response.status(401).end();
  }
  const [, token] = authToken.split(" ");

  // Token is valid
  try {
    const { sub } = verify(token, "8fe89604b272161f597317948f630ece") as IPayload;
    request.user_id = sub;

    return next();
  }
  catch (err) {

    return response.status(401).end();
  }

  // get user information
  //return next();
}
import { Request, Response, NextFunction } from 'express';
import { AUTH_TOKEN } from './config';

const typesToCheck = ['POST', 'PUT', 'DELETE'];
const token = AUTH_TOKEN;

export function auth(req: Request, res: Response, next: NextFunction) {
  if (!typesToCheck.includes(req.method)) {
    // don't forget to return!
    next();
    return;
  }

  if (req.header('x-auth-token') !== token) {
    res.status(403).send('Access denied');
    return;
  }

  next();
}

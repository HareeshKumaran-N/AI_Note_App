import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export function validator<T extends object>(dtoClass: new () => T) {
  return (req: Request, res: Response, next: NextFunction) => {
    const output: T = plainToClass(dtoClass, req.body);
    validate(output).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        res.status(400).json(errors);
      } else {
        req.body = output;
        next();
      }
    });
  };
}

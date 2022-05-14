import { NextFunction, Request, Response } from "express";
import { HttpException } from "../http/HttpException";

export const errorHandlingInterceptor = (err: HttpException, req: Request, res:Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong'
    return res.status(status).json({
        status,
        message,
        data: err.data
    })}
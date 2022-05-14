import { Request, Response } from "express";
import { resolve } from "path";

class FileController  {
     getHome = (req: Request, res: Response) => {
        const filename = 'index.html'
        
        res.sendFile(resolve('public', filename))
    }
} 

export const fileController = new FileController()
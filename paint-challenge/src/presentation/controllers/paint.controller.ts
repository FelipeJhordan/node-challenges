import { Request, Response } from "express";
import { HttpException } from "../../application/http/HttpException";
import { calculateLivingArea } from "../../core/usecases/imp/calculate-living-area.imp";
import { calculatePaintsQuantity } from "../../core/usecases/imp/calculate-paints-quantity.imp";
import { wallsFormSchema } from "../../infra/joi/walls-form.schema";

class PaintController  {
      calculate = async (req: Request, res: Response) => {
        if (Object.keys(req.body).length === 0) {
            throw new HttpException(400, "Invalid Body")
         }
        const result = await wallsFormSchema.validate(req.body, {abortEarly: false})
        
        if(result.error || !req.body) {
            const response = {
                details: result.error.details,
                type: "FORM"
            }
            throw new HttpException(400, "Invalid Params", response)
        }
        const livingArea = calculateLivingArea.calculateLivingArea(req.body)

        const response = calculatePaintsQuantity.calculatePaintQuantity(livingArea)
        
        res.json(response)
    }
} 

export const paintController = new PaintController()
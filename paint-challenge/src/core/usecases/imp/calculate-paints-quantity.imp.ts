import CalculatePaintResponseDto from "../../../presentation/dtos/paint/calculate-paint-response.dto";
import { PaintLiterDto } from "../../../presentation/dtos/paint/paint-liter.dto";
import { Tin } from '../../models/enums/tin.enum';
import { ICalculatePaintsQuantity } from "../interfaces/calculate-paints-quantity.interface";

class CalculatePaintsQuantity implements ICalculatePaintsQuantity {
     calculatePaintQuantity(livingArea: number): CalculatePaintResponseDto {
            let calculateResponse:CalculatePaintResponseDto = new CalculatePaintResponseDto()
            const tinValuesFromBiggestToSmallest =   Object.values(Tin).filter(v => typeof(v) === 'number').reverse() as number[]
            tinValuesFromBiggestToSmallest.forEach(value => {
                const valueIncome = value*5
                let paintLiterDto: PaintLiterDto = new PaintLiterDto()
                paintLiterDto.type= value
                
                while(livingArea >= valueIncome) {
                    paintLiterDto.quantity++
                    livingArea = (livingArea - valueIncome)
                };
                
                    (paintLiterDto.quantity > 0) && calculateResponse.paints.push(paintLiterDto)
            });
            
            if(livingArea != 0) {
                calculateResponse.message = `Ainda irá faltar ${livingArea.toFixed(2)} metros quadrados para preencher totalmente as paredes.`
            }

            return calculateResponse
    }

}

export const calculatePaintsQuantity =  new CalculatePaintsQuantity()

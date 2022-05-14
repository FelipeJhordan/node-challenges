import CalculatePaintResponseDto from "../../src/presentation/dtos/paint/calculate-paint-response.dto";
import { PaintLiterDto } from "../../src/presentation/dtos/paint/paint-liter.dto";

const paintLiterDto: PaintLiterDto[] = [{type: 3.6, quantity: 2}, {type: 0.5, quantity: 1}]

export const calculatePaintResponseDto: CalculatePaintResponseDto = {
    message: "Ainda irá faltar 1.50 metros quadrados para preencher totalmente as paredes.",
    paints: paintLiterDto
} 
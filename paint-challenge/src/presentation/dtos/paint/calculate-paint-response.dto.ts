import { PaintLiterDto } from "./paint-liter.dto"

export default class CalculatePaintResponseDto {
    paints: PaintLiterDto[] = []
    message?: string
}
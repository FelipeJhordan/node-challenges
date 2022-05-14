import CalculatePaintResponseDto from "../../../presentation/dtos/paint/calculate-paint-response.dto";

export interface ICalculatePaintsQuantity {
     calculatePaintQuantity(livingArea: number): CalculatePaintResponseDto
}
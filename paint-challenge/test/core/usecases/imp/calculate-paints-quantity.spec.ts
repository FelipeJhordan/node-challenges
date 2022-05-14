import { calculatePaintsQuantity } from "../../../../src/core/usecases/imp/calculate-paints-quantity.imp"
import { calculatePaintResponseDto } from "../../../stubs/calculate-paint-response-dto.stub"

describe("<Calculate paints quantity", () => {
    const livingAreaDummy = 40
    const sut = calculatePaintsQuantity
    it("Should to receive the correct params",  () => {
        const calculateSpy = jest.spyOn(sut, "calculatePaintQuantity")
         sut.calculatePaintQuantity(livingAreaDummy)

        expect(calculateSpy).toBeCalledWith(livingAreaDummy)
    })

    it("Should return the correct values" ,  () => {
        const value =  sut.calculatePaintQuantity(livingAreaDummy)

        expect(value).toEqual(calculatePaintResponseDto)
    })
})
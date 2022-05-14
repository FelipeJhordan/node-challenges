import { calculateLivingArea } from "../../../../src/core/usecases/imp/calculate-living-area.imp"
import { invalidLivingRoomStub, livingRoomStub } from "../../../stubs/living-room.stub"

describe("<Calculate living area class tests> ", () => {
    const sut = calculateLivingArea
    
    describe("calculateLivingArea", () => {
        it("Should to receive a correct params", () => {
            let sutSpy = jest.spyOn(sut, 'calculateLivingArea')
    
            sut.calculateLivingArea(livingRoomStub)
    
            expect(sutSpy).toBeCalledWith(livingRoomStub)
        })
    
        it("Should be return a correct value", () => {
            const response =  sut.calculateLivingArea(livingRoomStub)
    
            expect(response).toBe(40)
        })
    
        it("Should throw", () => {
            expect(() => { sut.calculateLivingArea(invalidLivingRoomStub)}).toThrow()
        })
    })
})
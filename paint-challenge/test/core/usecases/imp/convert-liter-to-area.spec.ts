import { convertLiterToArea } from "../../../../src/core/usecases/imp/convert-liter-to-area.imp"

describe("convert-liter-to-area", () => {
    it("Should return correct value", () => {
        expect(convertLiterToArea(2)).toBe(10)
    })
} )
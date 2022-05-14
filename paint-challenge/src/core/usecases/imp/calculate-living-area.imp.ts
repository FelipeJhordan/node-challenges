import { HttpException } from "../../../application/http/HttpException";
import { DOOR_VALUES, WINDOW_VALUES } from "../../models/constants";
import { wallSide } from "../../models/enums/wall-side.enum";
import { livingRoom } from "../../models/living-room.model";
import { Wall } from "../../models/wall.model";
import { ICalculateLivingArea } from "../interfaces/calculate-living-area.interface";
import { IRuleError } from "./protocols/rule-error.protocol";

class CalculateLivingArea implements ICalculateLivingArea {
    private ruleError: IRuleError[] = []

    private calcWallArea = (wall: Wall) => wall.height*wall.width
    private calcDoorsArea = (wall: Wall) => wall.doors * (DOOR_VALUES.height*DOOR_VALUES.width)
    private calcWindowsArea = (wall: Wall) => wall.windows * (WINDOW_VALUES.height*WINDOW_VALUES.width)

    public calculateLivingArea(livingRoom: livingRoom): number {
        this.ruleError = []
        const area = Object.entries(livingRoom).reduce((previousValue, currentValue) => {
            let wall: Wall = currentValue[1]
            let side = wallSide[currentValue[0]]
            this.applyRules(side, currentValue[1])
            
            let wallArea = this.calcWallArea(wall)
            let doorsArea = this.calcDoorsArea(wall)
            let windowsArea = this.calcWindowsArea(wall)

            return previousValue += (wallArea-(doorsArea+windowsArea))
        }, 0)

        if(this.ruleError.length > 0) {
            throw new HttpException(400, "Valores incorretos", this.ruleError)
        }
        
        return area
    }

    private applyRules(side: wallSide, wall: Wall) {
        let wallArea = this.calcWallArea(wall)
        let doorsArea = this.calcDoorsArea(wall)
        let windowsArea = this.calcWindowsArea(wall)
        if(wallArea < 1 || wallArea > 15) {
            this.ruleError.push({
                message: `A parede ${side} precisa ter  ${wallArea < 1 ? 'ao menos 1 metro quadrados': "no máximo 15 metros quadrados"}`,
                wallSide: side
            })
        }

        if((windowsArea+doorsArea) > (wallArea/2)) {
            this.ruleError.push({
                message: `O total de área das portas e janelas não devem ser maiores que 50% da área total da parede.`,
                wallSide: side
            })
        }

        if( (wall.doors >= 1) && (wall.height < DOOR_VALUES.height+0.3)) {

            this.ruleError.push({
                message: `A altura da parede deve ser no mínimo 30cm mais alta que a altura da porta.`,
                wallSide: side
            }) 
        }
    }

}

export const calculateLivingArea = new CalculateLivingArea()
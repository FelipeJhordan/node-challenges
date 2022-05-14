import { livingRoom } from "../../models/living-room.model";

export interface ICalculateLivingArea {
     calculateLivingArea(livingRoom: livingRoom): number
}
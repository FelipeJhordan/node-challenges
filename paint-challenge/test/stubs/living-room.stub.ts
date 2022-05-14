import { livingRoom } from "../../src/core/models/living-room.model";
import { backWallStub, frontWallStub, invalidWallStub, leftWallStub, rightWallStub } from "./walls.stub";

export const livingRoomStub:livingRoom =  {
    backWall: backWallStub,
    frontWall: frontWallStub,
    leftWall: leftWallStub,
    rightWall: rightWallStub
}

export const invalidLivingRoomStub: livingRoom = {
    backWall: invalidWallStub,
    frontWall: invalidWallStub,
    leftWall: invalidWallStub,
    rightWall: invalidWallStub
}
import request from 'supertest'
import { app, server } from '../../src/main'
import { livingRoomStub } from '../stubs/living-room.stub'
describe("Test e2e in <PaintController>", () => {
    it("should call method POST in /paint with correct values", async () => {
        await request(app).post('/paint').send(livingRoomStub).expect(200)
    })
    it("should call method POST in /paint without body", async () => {
        await (request(app).post('/paint')).expect(400)
    })

    it("should call method POST in /paint  with incorrect values", async () => {
        await request(app).post('/paint').send({...livingRoomStub, rightWall: 2}).expect(400)
    })

    beforeAll(done => {
        done()
      })
      
      afterAll(done => {
        done()
        server.close()
      })
})
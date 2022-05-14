import express from 'express'
import 'express-async-errors'
import { Server } from 'http'
import path from 'path'
import { errorHandlingInterceptor } from './application/middlewares/error-hadling.interceptor'
import { MiddlewaresComposite } from './application/patterns/middlewares.composite'
import { env } from './infra/environment'
import routes from './routes'


const app = express()
let server: Server

async function init(): Promise<void> {
   try {
       
       new MiddlewaresComposite().apply(app)
       app.use('/static', express.static(path.resolve('public')))    
       
       app.use(routes)
       
       app.use(errorHandlingInterceptor)
    
     server = await app.listen(env.PORT, () => {
        console.info(`Server listening in port ${env.PORT}`)
    })
   } catch(e) {
       console.error(e)
       console.info("Error in INIT.")
   }
}

init()

export { app, server }


import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { createBlogpostController, deleteBlogpostController, editBlogpostController, getBlogpostsController, getSingleBlogpostController} from './controllers/blogpostController'



dotenv.config()

console.log(process.env.PORT)


const app: Express = express()
const port = process.env.PORT

app.use(bodyParser())
app.use(cors())

app.get('/blogpost', getBlogpostsController)
app.get('/blogpostSingle', getSingleBlogpostController)
app.post('/createBlogpost', createBlogpostController)
app.post('/editBlogpost', editBlogpostController)
app.delete('/deleteBlogpost', deleteBlogpostController)

app.get('/json', (req: Request, res: Response) => {
    console.log(req.body)

    res.send({
        hello: 'world'
    })
})

mongoose.connect(process.env.CONNECTION_STRING!).then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}).catch(e => {
    console.log('Connection Failed')
})



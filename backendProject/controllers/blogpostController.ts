import { getBlogposts, createBlogpost, deleteBlogpost, editBlogpost, getblogpostSingle } from '../services/blogpost'
import { Request, Response } from 'express'


export const getBlogpostsController = async (req: Request, res: Response) => {
    const allBlogposts = await getBlogposts()

    res.json(allBlogposts)
}

export const getSingleBlogpostController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id
    
    const blogpostSingle = await getblogpostSingle(id)

    res.json(blogpostSingle)
}


export const createBlogpostController = async (req: Request, res: Response) => {
    const newBlogpost = req.body

    try {
        const result = await createBlogpost(newBlogpost)
        res.json(result)
    } catch (e) {
        res.status(400).json('Validation Failed')
    }
    
} 

export const editBlogpostController = async (req: Request, res: Response) => {
    // @ts-ignore
    const id: string = req.query.id
    const result = await editBlogpost(id, req.body)
    res.json(result)
}

export const deleteBlogpostController = async (req: Request, res: Response) => {
    const id: string = req.query.id
    const result = await deleteBlogpost(id)
    res.json(result)
}
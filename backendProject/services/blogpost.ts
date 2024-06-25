import { Blogpost, BlogpostModel} from "../schemas"


export const getBlogposts = async () => {
    const allBlogposts = await BlogpostModel.find({})

    return allBlogposts
}


export const getblogpostSingle = async (id: string) => {
    const blogpost = await BlogpostModel.findById(id)
    return blogpost
}


export const createBlogpost = async (Blogpost: Blogpost) => {

    const result = await BlogpostModel.create(Blogpost)
    return result
  
    

}

export const editBlogpost = async (id: string, Blogpost: Blogpost) => {
     await BlogpostModel.findByIdAndUpdate(id, Blogpost)
    const newBlogpost = await getblogpostSingle(id)
    return newBlogpost
}


export const deleteBlogpost = async (id: string) => {
    const result = await BlogpostModel.findByIdAndDelete(id)
    return result
}
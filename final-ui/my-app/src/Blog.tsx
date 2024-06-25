import { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { BlogPostType } from './types'
import { BlogPost } from './BlogPost'

export const Blog = () => {
    const [ blogPosts, setBlogPosts ] = useState<BlogPostType[]>([])

    const loadBlogPosts = async () => {
        const response = await axios.get('http://localhost:3001/blogpost')
        const { data } = response
        setBlogPosts(data)
    }

    const deleteBlogPost = async (id: string) => {
          await axios.delete(`http://localhost:3001/blogpost/deleteBlogpost?id=${id}`)
          await loadBlogPosts()
    }

    useEffect(() => {
        loadBlogPosts()
    }, [])

    return (
        <div style = {{ padding: '40px' }}>
            <Button variant='contained' style={{ width: '520px '}}>
                New Post
            </Button>

            <br /> <br />

            {
                blogPosts.length === 0 ? 'No Posts' : ''
            }

            {
                blogPosts.map(blogPost => 
                    <BlogPost key={blogPost._id} {...blogPost} onDelete={deleteBlogPost}/>
                )
            }
            
        </div>
    )
}
import { Schema, model } from 'mongoose'

export interface Blogpost {
    title: String,
    body: String,
    author: String,
    date: Date,
}


const BlogpostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

export const BlogpostModel = model('blog',BlogpostSchema)


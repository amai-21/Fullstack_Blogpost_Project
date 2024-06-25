import { Paper, Typography, Button } from '@mui/material'
import { BlogPostType } from './types'

interface BlogPostProps extends BlogPostType {
    onDelete: (id: string) => void
}

export const BlogPost = ({
    _id,
    title,
    author,
    body,
    date,
    onDelete = () => {}
}: BlogPostProps) => {
    return (
        <Paper style={{ width: '500px', padding: '10px', alignItems: 'center', marginTop: '10px'}}>
            <div style={{ display: 'flex' }}>
                <Typography style={{ flex: 1 }} variant='h5'>
                    {title}
                </Typography>
                <Typography style={{ flex: 1, textAlign: 'right' }} variant='h6'>
                    {date}
                </Typography>

            </div>

            <div style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'left'}}>
                {body}
            </div>

            <div style={{ display: 'inline-flex', flexDirection: 'row', width: '100%' }}>
                <Button variant='outlined'>
                    Edit
                </Button>
                <div style = {{ width: '10px' }} />
                <Button variant='outlined' color='error' onClick={() => onDelete(_id)}>
                    Delete
                </Button>

                <div style={{ flex:1, textAlign: 'right' }}>
                    by {author}
                </div>
            </div>
        </Paper>
    )
}
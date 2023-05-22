import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'First Post!', content: 'Hello all!', user: '0'},
    {id: '2', title: 'Second Post', content: 'Hi people', user: '1'}
]

interface Post {
    id: string
    title: string
    content: string
    user: string
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload)
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        user: userId
                    }
                }
            }
        },
        postUpdated(state, action: PayloadAction<Post>) {
            const {id, title, content} = action.payload
            const existingPost = state.find(post => post.id === id)

            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

export const {postAdded, postUpdated} = postsSlice.actions

export default postsSlice.reducer

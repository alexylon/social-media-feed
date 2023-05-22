import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {useHistory} from 'react-router-dom'

import {postUpdated} from './postsSlice'
import {PostAuthor} from "./PostAuthor";

export const EditPostForm = ({match}: any) => {
    const {postId} = match.params

    const post = useAppSelector((state: any) =>
        state.posts.find((post: { id: any }) => post.id === postId)
    )

    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const dispatch = useAppDispatch()
    const history = useHistory()

    const onTitleChanged = (e: { target: { value: any } }) => setTitle(e.target.value)
    const onContentChanged = (e: { target: { value: any } }) => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({id: postId, title, content, user: post.user}))
            history.push(`/posts/${postId}`)
        }
    }

    return (
        <section>
            <PostAuthor userId={post.user}/>
            <h2>Edit Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
            </form>
            <button type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
        </section>
    )
}

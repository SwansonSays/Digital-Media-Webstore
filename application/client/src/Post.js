/* 
 * File: Post.js
 * Author: Robert Swanson
 * Description: Component for individual posts to be displayed from search
 */

const Post = ({ post }) => {
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </article>
    )
}
export default Post
/* 
 * File: Post.js
 * Author: Robert Swanson
 * Description: Component for individual posts to be displayed from search
 */
import icon from './img/avatarPlaceHolder.jpg';

const Post = ({ post }) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={post.path} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">{post.title }</h5>
                <p class="card-text">{post.description}</p>
                <p class="card-text">{post.author}</p>
                <p class="card-text">{post.price}</p>
                <a class="btn btn-primary">Details</a>
            </div>
        </div>
        /*
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
        </article>
        */
    )
}
export default Post
/* 
 * File: Post.js
 * Author: Robert Swanson
 * Description: Component for individual posts to be displayed from search
 */
//import icon from './img/avatarPlaceHolder.jpg';

const Post = ({ post }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={post.path} alt={post.title}/>
            <div className="card-body">
                <h5 className="card-title">{post.title }</h5>
                <p className="card-text">{post.description}</p>
                <p className="card-text">{post.author}</p>
                <p className="card-text">{post.price}</p>
                <button className="btn btn-primary">Details</button>
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
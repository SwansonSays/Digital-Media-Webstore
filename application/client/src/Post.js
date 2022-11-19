/* 
 * File: Post.js
 * Author: Robert Swanson
 * Description: Component for individual posts to be displayed
 */
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/', { state: post });
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={post.path} alt={post.title}/>
            <div className="card-body">
                <h5 className="card-title">{post.title }</h5>
                <p className="card-text text-truncate">{post.description}</p>
                <p className="card-text">Seller: {post.author}</p>
                <p className="card-text">Price: ${post.price}</p>
                <button className="btn btn-primary" onClick={ handleClick }>Details</button>
            </div>
        </div>
    )
}
export default Post
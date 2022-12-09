/* 
 * File: Post.js
 * Author: Robert Swanson
 * Description: Component for individual posts to be displayed using bootstrap cards
 */
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate();

    function handleClick() {
        if (isFree) {
            navigate('/FreePost', { state: post });
        } else {
            navigate('/ContactPost', { state: post });
        }
    }

    function isFree() {
        if (post.price === "0.00") {
            console.log(post.price);
            return true;
        } else if (post.price === "0") {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={post.path} alt={post.title}/>
            <div className="card-body">
                <h5 className="card-title">{post.title }</h5>
                <p className="card-text text-truncate">{post.description}</p>
                <p className="card-text">Seller: {post.author}</p>
                <p className="card-text">Price: { isFree() ? 'Free' :  "$" + post.price}</p>
                <div className="card-button-wrapper">
                    <button className="btn btn-secondary" onClick={handleClick}>Details</button>
                    <button className="btn btn-primary" onClick={handleClick}>Contact Seller</button>
                </div>
            </div>
        </div>
    )
}
export default Post
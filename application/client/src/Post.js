/* 
 * File: Post.js
 * Author: Robert Swanson
 * Description: Component for individual posts to be displayed using bootstrap cards
 */
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate();

    //Navigates to free post or contact post with post details
    //depending if the post.price is free or not 
    function handleClick() {
        if (isFree()) {
            navigate('/FreePost', { state: post });
        } else {
            navigate('/ContactPost', { state: post });
        }
    }

    //Returns true if post is free and false if not
    function isFree() {
        if (post.price === "0.00") {
            console.log(post.price);
            return true;
        } else if (post.price === "0") {
            console.log(post.price);
            return true;
        } else {
            console.log(post.price);
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
                {/* Calls is free and renders as Free instead of 0.00 if returned true */}
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
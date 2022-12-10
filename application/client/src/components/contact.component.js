/*Olimpia Aguillon
This is a post page specifically to contact the seller.
The page will show all the details of the item 
and if the user wants it will redirect them to message the seller. 
*/

import NavBar from '../NavBar';
import Footer from "../Footer";
import { useNavigate, useLocation } from "react-router-dom";

const ContactPost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state;

    function handleClick() {
        navigate("/Message", { state: post });
    }
        return(
            <div>
                <NavBar />
                {/* This displays the name of the item*/}
                <div className="contact-post">
                     <h1>{post.title}</h1>
                    <h5> Seller: {post.author} </h5>
                </div>
                 {/* This tells the user what category it's in and how much it costs */}
                <div className="category-price"> 
                    <p> Category: {post.category}<br></br>Price: $ {post.price}</p>
                </div>   
                <div>
            {/* This will redirect users to the messaging page in order to contact the seller */}
                    <span>  
                        <button type="button" className="link-button" onClick={handleClick}>Contact Seller</button>                 
                    </span> 
                </div> 
                <div>
                    <img className = "bridge-img" src={post.path} alt={post.title}/>
                </div> 
                <Footer />
            </div>            
        );
    }
export default ContactPost;

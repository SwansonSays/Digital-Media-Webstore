/*Olimpia Aguilon
This is a post page specifically a free post page 
where users can download the media for free.
It will display the details of the item. 
*/


import NavBar from '../NavBar';
import Footer from "../Footer";
import { useNavigate, useLocation } from "react-router-dom";

const FreePost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state;

    //Check if user is loggedin before requesting file from DB and downloading
    function downloadPost() {
        checkLogin();
        /****************************************
        
        Call to Db for actual file instead
        of thumbnail goes here. Replace 
        post.path in fetch with actual file path

        ****************************************/

        //Fetches the file from public
        fetch(post.path).then(response => {
            response.blob().then(blob => {
                //Creates object out of file
                const fileURL = window.URL.createObjectURL(blob);
                //Creates anchor values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = post.title;
                alink.click();
            })
        })
    }

    //Checks if user is logged in. If not routes user to login and passes post details
    function checkLogin() {
        if (sessionStorage.getItem("loggedIn") !== "true") {
            sessionStorage.setItem("route", "/FreePost");
            navigate("/Login", {state: post });
        }
    }

        return(
            <div>
                <NavBar />
                <article className='flex-container'>
                <div className='child-2'>
                        <img className='free-post-image' src={post.path} alt={post.title}/>
                    </div>
                    {/* This displays the name of the item, seller, price, and category */}
                    <div className='child-1'>
                    <h1>{post.title}</h1>
                    <h5> Seller: {post.author} </h5>
                    <p> Price: $ {post.price} </p>
                    <p> Category: {post.category}</p>
                    {/* This displays the download button*/}
                    <button type="button" className="btn btn-primary btn-lg" onClick={ downloadPost }>Download</button> 
                    </div>
                </article>
                <Footer />
            </div>  

        );
     }
 export default FreePost;

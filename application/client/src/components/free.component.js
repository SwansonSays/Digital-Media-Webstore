/*Olimpia Aguilon
This is a post page specifically a free post page 
where users can download the media for free.
It will display the details of the item. 
*/


import NavBar from '../NavBar';
import Footer from "../Footer";

const FreePost = ({post}) => {
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
                        <a href= {post.path} download={post.title}>
                        <button type="button" className="btn btn-primary btn-lg">Download</button> 
                        </a>
                    </div>
                </article>
                <Footer />
            </div>  

        );
     }
 export default FreePost;

/* 
 * File: PostPage.js
 * Author: Robert Swanson
 * Description: Component that iterates through all post components given to it
 *              and displayes them in a grid on page
 */
import React from "react"
import Post from "./Post"

const PostPage = ({ results }) => {

    const mappedResults = results.map((post, index) => <Post key={index} post={post} />);

    const content = mappedResults;

    return (
        <main className="postPage">{content}</main>
    )
}
export default PostPage
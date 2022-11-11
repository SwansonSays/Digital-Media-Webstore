/* 
 * File: PostPage.js
 * Author: Robert Swanson
 * Description: Component that iterates through all post components returned 
 *              from search and displayes them under search bar
 */

import Post from "./Post"

const PostPage = ({ searchResults }) => {

    const results = searchResults.map(post => <Post key={post.id} post={post} />)

    const content = results;

    return (
        <main className="postPage">{content}</main>
    )
}
export default PostPage
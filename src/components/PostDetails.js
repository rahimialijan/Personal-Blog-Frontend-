import React from "react";
import { useParams } from "react-router-dom";


const PostDetails = ({posts}) => {
    const {postId} = useParams()

    const post = posts.find((post) =>post.id ===parseInt(postId, 10))

    if (!post){
        return <div>Post Not Found</div>
    }

    return ( 
        <div>
            <h2>Post {postId} Details</h2>
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            <p>{post.content}</p>
        </div>
     );
}
 
export default PostDetails;
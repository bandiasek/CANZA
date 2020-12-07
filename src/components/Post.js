import React from 'react'

const Post = ({ author, createdAt, postName, postText }) => {
      return (
            <div>
                  <h1>{postName}</h1>
                  <ul>
                        <li>{author}</li>
                        <li>{createdAt}</li>
                        <li>{postText}</li>
                  </ul>
            </div>
      )
}
            
export default Post;
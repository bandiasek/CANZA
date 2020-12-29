import React from 'react'

const Post = ({ author, category, createdAt, name, text, imgPath }) => {
      return (
            <div>
                  <h1>{name}</h1>
                  <ul>
                        <li>{author}</li>
                        <li>{category}</li>
                        <li>{createdAt}</li>
                        <li>{text}</li>
                        <img src={imgPath} alt="postIMg"/>
                  </ul>
            </div>
      )
}
            
export default Post;
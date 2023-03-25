import React from 'react'

export default function CommentsList({comments}) {
  return (
    <>
    <h3>Comments</h3>
    {comments.map(comment => 
        <div className='comments' key={comment.postedBy + ":" + comment.text} >
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
        </div>
        )}
    </>
  )
}

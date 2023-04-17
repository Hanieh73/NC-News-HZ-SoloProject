import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "../utils";




const Comments = ({article_id }) => { 
const [loadedComments, setLoadedComments] =useState({})
  const [isLoading, setIsLoading] = useState(true)
  // const [noComments, setNoComments]=useState(false)

  


  useEffect(() => {

    setIsLoading(true)
    fetchCommentsByArticleId(article_id).then((comments) => {
      console.log(comments, 'comments')
      setLoadedComments(comments)
      setIsLoading(false)

    })

  }, [article_id])

  
  return (
    <div>
      <h3 className='seeCommentsHeadline'>Comments</h3>
      {isLoading ? <p>comments loading...</p> :
        <ul> {!loadedComments.length ? (<p>No comments have been posted yet!</p>) : (
            loadedComments.map((comment) => {
                return (
                  <li className='commentListLi' key={comment.comment_id}>
                  <div className="commentsContainer">
                    <p>{comment.body}</p>
                      <p className='commentAuthor'>{comment.author}</p>
                      <p className='commentDate'>{new Date(comment.created_at).toDateString()}</p>

                    </div>
                    </li>
                )

              })
        )
      
      
      }

        </ul>}
    </div>
  );
};

export default Comments;
import { useState } from "react";
import { patchVote } from "../utils";



const Votes = ({article_id, votes}) => {
    const [voteNum, setVoteNum] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [isError, setIsError] = useState(0)
    const handleVote = (value) => {
        
 
   
        setVoteNum((currVote) =>  currVote + value )
        setIsError(false)
        
        patchVote(article_id).then(() => {
            
setDisabled(true)
        })
        
            .catch(() => {
                 setIsError(true)
                setVoteNum((currVote) => currVote - value )
               

        })
     
    }

  return (
      <div className='votes'>
          <p>Votes: {votes + voteNum}</p>
      <button type ="submit" onClick={()=>{handleVote(1)}  } disabled ={disabled} placeholder="vote here">Upvote</button> {isError && 
                        <p className="error-msg">
                            Something went wrong, vote could not be submitted
                        </p>
                    }
    </div>
  );
};

export default Votes;
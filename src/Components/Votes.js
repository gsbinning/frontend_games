import { useState } from "react";
import { patchVotes } from "../utils/api";

function Votes({ review_id, votes }) {
  const [newVotes, setNewVotes] = useState(0);
  const [isVoting, setIsVoting] = useState(false);

  function handleVote() {
    if (newVotes === 0) {
      setNewVotes((currentNewVotes) => currentNewVotes + 1);
      setIsVoting(true);

      patchVotes(review_id, 1).catch((err) => {
        setNewVotes((currentNewVotes) => currentNewVotes - 1);
      });
    }  
    
  }
  return (
    <div>
      <h4>Votes: {votes}</h4>
      <button onClick={handleVote}>Vote</button>
    </div>
  );
}

export default Votes;

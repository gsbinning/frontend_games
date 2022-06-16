import { useState } from "react";
import { patchVotes } from "../utils/api";

function Votes({ review_id, votes }) {
  const [votes, setVotes] = useState(0);
  const [isVoting, setIsVoting] = useState(false);

  function handleVote() {
    if (votes === 0) {
      setVotes((currentVotes) => currentVotes + 1);
      setIsWorking(true);

      patchVotes(review_id, 1).catch((err) => {
        setVotes((currentVotes) => currentVotes - 1);
      });
    } else {
      setVotes((currentVotes) => currentVotes - 1);
      setIsWorking(false);

      patchVotes(review_id, -1).catch((err) => {
        setVotes((currentVotes) => currentVotes + 1);
      });
    }
  }

  return (
    <div>
      <h4>Votes: {votes}</h4>
      <button onClick={handleVote}>Vote
      </button>
    </div>
  );
}

export default Votes;

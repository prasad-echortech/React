import React, { useContext} from 'react';
import UserContext from "./Ex";

function MissedGoal() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>iam Missed Goal hi!!!</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
  );
}

export default MissedGoal;

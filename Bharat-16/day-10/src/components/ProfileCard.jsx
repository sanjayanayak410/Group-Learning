import { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [followers, setFollowers] = useState(0);

  return (
    <div className="page">
      <div className="card">
        <h1>Bharat Prusty</h1>
        <p className="role">React Developer</p>

        <p data-testid="follower-count" className="count">
          {followers}
        </p>

        <div className="buttons">
          <button
            className="follow"
            onClick={() => setFollowers(followers + 1)}
          >
            Follow
          </button>

          <button
            className="unfollow"
            onClick={() => setFollowers(followers - 1)}
          >
            Unfollow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

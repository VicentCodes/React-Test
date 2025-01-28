import "./XFollowCard.css";
import PropTypes from "prop-types";
import { useState } from "react";

export function XFollowCard({ userName, userHandle, avatar }) {
    const [isFollowing, setIsFollowing] = useState(false);

  const followText = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "follow-btn is-following"
    : "follow-btn";

  return (
    <article className="tm-x-follow-card">
      <header className="card-header">
        <img
          className="avatar"
          src={`https://unavatar.io/${avatar}`}
          alt={`Avatar of ${userName}`}
        />
        <div>
          <strong className="user-info">{userName}</strong>
          <span className="user-handle">@{userHandle}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)}>
            {followText}
        </button>
      </aside>
    </article>
  );
}

XFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool,
};

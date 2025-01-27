import "./XFollowCard.css";
import PropTypes from "prop-types";

export function XFollowCard({ userName, userHandle, avatar, isFollowing }) {
  console.log(isFollowing);

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
        <button className="follow-btn">Follow</button>
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

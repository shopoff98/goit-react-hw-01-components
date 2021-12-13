import style from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={style.div}>
      <div className={style.image}>
        <img src={avatar} alt={username} className={style.avatar} />
        <p className={style.name}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;

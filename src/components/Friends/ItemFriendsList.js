import s from "./Friends.module.css";
import PropTypes from "prop-types";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div
      className={s.listItem}
      style={{ backgroundColor: isOnline ? "#2294f5" : "#027f45" }}
    >
      <span>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </div>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;

import ListStatistics from "./ListStatistics";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ items }) => {
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <li key={item.id} className={s.listItem}>
          <ListStatistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;

import PropTypes from "prop-types";

const ListStatistics = ({ label, percentage }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
};

ListStatistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default ListStatistics;

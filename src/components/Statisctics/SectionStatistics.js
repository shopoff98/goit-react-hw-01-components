import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <div className={s.div}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

import style from "./style/Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ Name, Resource }) => {
  return (
    <button className={style.Button} onClick={Resource}>
      <span>{Name}</span>
    </button>
  );
};

Button.propTypes = {
  Name: PropTypes.string.isRequired,
  Resource: PropTypes.any.isRequired,
};

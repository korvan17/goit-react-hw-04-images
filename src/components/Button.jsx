import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

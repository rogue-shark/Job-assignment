import PropTypes from 'prop-types';

function Header({ text, condition }) {
  return (
    <>
      <h2 className='title-text'>{text}</h2>
      <p className='task-text'>Task: {condition}</p>
    </>
  )
}

Header.propTypes = {
  text: PropTypes.string,
  condition: PropTypes.string,
};

export default Header;

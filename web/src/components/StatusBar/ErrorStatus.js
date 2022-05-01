import PropTypes from 'prop-types';

export default function ErrorStatus({ message }) {
  return <h3 style={{ color: 'red' }}>{message}</h3>;
}

ErrorStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

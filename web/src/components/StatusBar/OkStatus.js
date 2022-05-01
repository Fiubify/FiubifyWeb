import PropTypes from 'prop-types';

export default function OkStatus({ message }) {
  return <h3 style={{ color: 'green' }}>{message}</h3>;
}

OkStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

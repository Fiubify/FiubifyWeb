import { Alert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';

export default function ErrorStatus({ message }) {
  return (
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  );
}

ErrorStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

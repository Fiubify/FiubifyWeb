import { Alert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';

export default function OkStatus({ message }) {
  return (
    <Alert severity='success'>
      <AlertTitle>Successful operation</AlertTitle>
      {message}
    </Alert>
  );
}

OkStatus.propTypes = {
  message: PropTypes.string.isRequired,
};

import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import ErrorStatus from './ErrorStatus';
import OkStatus from './OkStatus';

export default function StatusBar({ actions }) {
  let counter = 0;

  return (
    <Stack>
      {actions.map((action) => {
        if (action.type === 'error') {
          counter++;
          return <ErrorStatus key={counter} message={action.msg} />;
        } else {
          counter++;
          return <OkStatus key={counter} message={action.msg} />;
        }
      })}
    </Stack>
  );
}

StatusBar.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      msg: PropTypes.string.isRequired,
    })
  ),
};

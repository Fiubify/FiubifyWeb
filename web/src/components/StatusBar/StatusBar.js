import PropTypes from 'prop-types';
import ErrorStatus from './ErrorStatus';
import OkStatus from './OkStatus';

export default function StatusBar({ actions }) {
  console.log(actions);
  return (
    <div>
      {actions.map((action) => {
        if (action.type === 'error') {
          return <ErrorStatus message={action.msg} />;
        } else {
          return <OkStatus message={action.msg} />;
        }
      })}
    </div>
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

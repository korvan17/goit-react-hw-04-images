import { ImSpinner } from 'react-icons/im';

function Loader() {
  return (
    <div className="loader">
      <ImSpinner size="50" className="icon_spin" />
      Loading...
    </div>
  );
}
export default Loader;

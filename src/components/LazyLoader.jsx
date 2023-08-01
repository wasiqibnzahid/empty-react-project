import { Suspense } from "react";
import PropTypes from "prop-types";
const LazyLoader = ({ Component }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

LazyLoader.propTypes = {
  Component: PropTypes.object,
};
export default LazyLoader;

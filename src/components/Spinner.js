import { Backdrop, CircularProgress } from "@material-ui/core";

function Spinner({ page = false, loading }) {
  return (
    <>
      {page && (
        <Backdrop open={loading}>
          <CircularProgress style={{ color: "#fff" }} />
        </Backdrop>
      )}

      {!page && loading && <CircularProgress style={{ color: "#fff" }} />}
    </>
  );
}

export default Spinner;

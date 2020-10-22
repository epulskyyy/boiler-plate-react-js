import PropsTypes from "prop-types";

export default function Loading() {
  return (
    <div>
      <div
        style={{
          zIndex: 88,
          position: "sticky",
          backgroundColor: "white",
          top: 0,
          left: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        LOADING
      </div>
    </div>
  );
}
Loading.propTypes = {
  setIsHuman: PropsTypes.func,
};

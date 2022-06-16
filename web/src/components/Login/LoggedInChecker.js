function LoggedInChecker({ component, token }) {
  if (token !== "") {
    return <div>{component}</div>;
  } else {
    return (
      <div
        style={{
          color: "#006e95",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Page does not exist</h2>
      </div>
    );
  }
}

export default LoggedInChecker;

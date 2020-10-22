import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const Sidemenu = React.lazy(() => import("./SideMenu"));
const Page = (props) => {
  const auth = useSelector((state) => state.auth);

  if (auth.isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Sidemenu {...props} />
      <div>{props.children}</div>
    </>
  );
};

export default withRouter(Page);

import React from "react";

const Error = ({ error }) => {
  return (
    <div className="text-center alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default Error;

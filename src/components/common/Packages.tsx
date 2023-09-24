import React from "react";

interface packagesall {
  name: string;
}

function Packages(props: packagesall) {
  return (
    <div role="button" className="text-lg font-bold px-5 text-center">
      {props.name}
    </div>
  );
}

export default Packages;

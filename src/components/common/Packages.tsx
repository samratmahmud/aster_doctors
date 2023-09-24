import React from "react";

interface packagesall {
  name: string;
}

function Packages(props: packagesall) {
  return (
    <div
      role="button"
      className="lg:text-lg text-base font-bold px-5 py-2.5 lg:py-0 text-center"
    >
      {props.name}
    </div>
  );
}

export default Packages;

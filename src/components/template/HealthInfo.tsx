import React from "react";

interface packs {
  name: string;
}

function HealthInfo(props: packs) {
  return (
    <div>
      <div className="lg:text-2xl text-base font-medium text-black-0">
        {props.name}
      </div>
    </div>
  );
}

export default HealthInfo;

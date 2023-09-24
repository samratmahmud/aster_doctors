import React from "react";

interface qualify {
  name: string;
  title: string;
}

function Quality(props: qualify) {
  let {name, title} = props;
  return (
    <div className="p-7 bg-gray-200 rounded-xl">
      <div className="lg:text-2xl text-base font-semibold text-sky-800 mb-2.5">
        {name}
      </div>
      <div className="lg:text-xl text-sm font-medium text-[rgba(30,_30,_30,_0.50)] max-w-[395px]">
        {title}
      </div>
    </div>
  );
}

export default Quality;

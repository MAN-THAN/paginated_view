import React, { useState } from "react";

const Compo = ({ data }) => {
  const [state, setState] = useState(false);
  return (
    <div>
      {data?.children.map((item, ind) => {
        if (item.type === "directory") {
          return (
            <div key={ind}>
              <h2 onClick={() => setState(!state)}>{item.name}</h2>
              {state && <Compo data={item} />}
            </div>
          );
        } else return <h4 key={ind}>{item.name}</h4>;
      })}
    </div>
  );
};

export default Compo;

import React from "react";
import { data } from "./data";
import Compo from "./compo";

const FileTree = () => {
  return (
    <React.Fragment>
      {data.children?.map((item, ind) => {
        if (item.type === "directory") {
          return <Compo key={ind} data={item} />;
        } 
      })}
    </React.Fragment>
  );
};

export default FileTree;

import React from "react";
import Accordion from "./Accordion";
import PostWrap from "./PostWrap";

export default function Content({ type, title, children, path }) {
  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one, index) => (
        <Content {...one} key={index} />
      ))}
    </Accordion>
  ) : (
    <PostWrap title={title} path={path}></PostWrap>
  );
}

/** @format */

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default layout;

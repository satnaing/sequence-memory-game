import React from "react";

type Props = {
  children: React.ReactElement | React.ReactElement[];
  cname?: string;
};

const ContainerRow = ({ children, cname }: Props) => (
  <div className={`flex flex-row justify-center ${cname}`}>{children}</div>
);

export default ContainerRow;

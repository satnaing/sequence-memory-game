const ContainerRow = ({ children, cname }) => (
  <div className={`flex flex-row justify-center ${cname}`}>{children}</div>
);

export default ContainerRow;

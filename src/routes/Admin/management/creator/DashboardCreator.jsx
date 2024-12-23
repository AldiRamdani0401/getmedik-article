import { useContentHeader } from "../../../../utils/context/ContentHeaderContext";

const DashboardCreator = () => {
  // use context
  const [_, setContentHeader] = useContentHeader();
  setContentHeader("Creator Management");
  return <h1>Dashboard Creator</h1>;
};

export default DashboardCreator;

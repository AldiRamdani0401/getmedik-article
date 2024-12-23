import { useContentHeader } from "../../../../utils/context/ContentHeaderContext";

const DashboardDatabase = () => {
  // use context
  const [_, setContentHeader] = useContentHeader();
  setContentHeader("Database Management");

  return <h1>Dashboard Database</h1>;
};

export default DashboardDatabase;

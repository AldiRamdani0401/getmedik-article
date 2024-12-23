import { useContentHeader } from "../../../../utils/context/ContentHeaderContext";

const DashboardAdmin = () => {
  // use context
  const [_, setContentHeader] = useContentHeader();
  setContentHeader("Admin Management");
  return <h1>Dashboard Admin</h1>;
};

export default DashboardAdmin;

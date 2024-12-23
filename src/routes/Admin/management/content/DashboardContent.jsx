import { useContentHeader } from "../../../../utils/context/ContentHeaderContext";

const DashboardContent = () => {
    // use context
    const [_, setContentHeader] = useContentHeader();
    setContentHeader("Content Management");
  return (
    <h1>Dashboard Content</h1>
  );
};

export default DashboardContent;
import { useContentHeader } from "../../../../utils/context/ContentHeaderContext";

const DashboardArticle = () => {
  // use context
  const [_, setContentHeader] = useContentHeader();
  setContentHeader("Article Management");

  return(
    <h1>Dashboard Article</h1>
  );
};

export default DashboardArticle;

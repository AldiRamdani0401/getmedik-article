import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

// Layout
import MainLayout from "./layouts/MainLayout";

// General User
import Home from "./routes/Home";
import Article from "./routes/Article";
import NotFound from "./routes/error/NotFound";
import Detail from "./routes/Detail";

// Admin
import Dashboard from "./routes/Admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import DashboardArticle from "./routes/Admin/management/article/DashboardArticle";
import DashboardCreator from "./routes/Admin/management/creator/DashboardCreator";
import DashboardContent from "./routes/Admin/management/content/DashboardContent";
import DashboardDatabase from "./routes/Admin/management/database/DashboardDatabase";
import DashboardAdmin from "./routes/Admin/management/admin/DashboardAdmin";
import DashboardSetiing from "./routes/Admin/settings/DashboardSetting";

const App = () => {
  return (
    <Router>
      {/* General User */}
      <Route path="/" component={MainLayout}>
        <Route path="/" component={Article} />
        {/* <Route path="/article" component={Article} /> */}
        <Route path="/article/:articleId" component={Detail} />
        <Route path="/*" component={NotFound} />
      </Route>
      {/* Admin */}
      <Route path="/admin" component={AdminLayout}>
        <Route path="/" component={(props) => <Dashboard {...props} />} />
        <Route path="/management">
          <Route path="/article" component={DashboardArticle} />
          <Route path="/creator" component={DashboardCreator} />
          <Route path="/content" component={DashboardContent} />
          <Route path="/database" component={DashboardDatabase} />
          <Route path="/admin" component={DashboardAdmin} />
        </Route>
        <Route path="/setting">
          <Route path="/" component={DashboardSetiing} />
          <Route path="/profile" component={DashboardAdmin} />
          <Route path="/change-password" component={DashboardAdmin} />
        </Route>
      </Route>
    </Router>
  );
};

export default App;

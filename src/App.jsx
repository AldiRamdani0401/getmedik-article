import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

import MainLayout from "./layouts/MainLayout";

import Home from "./routes/Home";
import Article from "./routes/Article";
import NotFound from "./routes/error/NotFound";
import Detail from "./routes/Detail";

// Admin
import Dashboard from "./routes/Admin/Dashboard";
import AdminLayout from "./layouts/AdminLayout";
import DashboardArticle from "./routes/Admin/management/article/DashboardArticle";

const App = () => {
  return (
    <Router>
      {/* General User */}
      <Route path="/" component={MainLayout}>
        <Route path="/" component={Home} />
        <Route path="/article" component={Article} />
        <Route path="/article/detail" component={Detail} />
        <Route path="/*" component={NotFound} />
      </Route>
      {/* Admin */}
      <Route path="/admin" component={AdminLayout}>
        <Route path="/" component={Dashboard} />
        <Route path="/management">
          <Route path="/article" component={DashboardArticle} />
          <Route path="/creator" component={DashboardArticle} />
          <Route path="/content" component={DashboardArticle} />
          <Route path="/database" component={DashboardArticle} />
          <Route path="/admin" component={DashboardArticle} />
        </Route>
        <Route path="/setting">
        </Route>
      </Route>
    </Router>
  );
};

export default App;

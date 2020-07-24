import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout";
import IntroPage from "./pages/IntroPage";
import FormPage from "./pages/FormPage";
import HomePage from "./pages/HomePage";
import ListProjects from "./pages/ListProjects";
import ProjectHome from "./pages/ProjectHome";
import Upload from "./pages/Upload";
import ContentTop from "./components/ContentTop";

export const useRoutes = (isAuthenticated) => {
  return (
    <Switch>
      <Route path="/intro" exact>
        <IntroPage />
      </Route>

      <Route path="/auth" exact>
        <FormPage />
      </Route>

      <Route>
        <Layout>
          <ContentTop />
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/projects" exact>
              <ListProjects />
            </Route>

            <Route path="/upload" exact>
              <Upload />
            </Route>

            <Route path="/project" component={ProjectHome} />

            <Route path="/admin" exact></Route>
            <Route path="/billing" exact></Route>
            <Route path="/support" exact></Route>

            <Redirect to="/intro" />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
};

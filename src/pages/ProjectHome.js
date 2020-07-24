import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Navbar from "../components/Navbar";

import NewProject from "./NewProject";
import Quality from "./Quality";
import Enrichment from "./Enrichment";
import Model from "./Model";
import Simulation from "./Simulation";

const ProjectHome = () => {
  const match = useRouteMatch();

  return (
    <div className="content project">
      <div className="content__inner">
        <Navbar />
        <div className="content__scrollable">
          <Switch>
            <Route path={`${match.path}/home`} component={NewProject} />
            <Route path={`${match.path}/quality`} component={Quality} />
            <Route path={`${match.path}/enrichment`} component={Enrichment} />
            <Route path={`${match.path}/model`} component={Model} />
            <Route path={`${match.path}/business`} />
            <Route path={`${match.path}/simulation`} component={Simulation} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default ProjectHome;

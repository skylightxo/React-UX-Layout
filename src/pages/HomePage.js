import React from "react";

import Card from "../components/Card";
import ShortTable from "../components/ShortTable";
import DatasetGraph from "../components/DatasetGraph";

const HomePage = () => {
  const path = "/images/functions/";
  const functions = [
    {
      text: "New project",
      bg: `${path}typewriter.jpeg`,
      icon: `${path}plus-icon.svg`,
      href: "",
    },
    {
      text: "See projects",
      bg: `${path}dog.jpeg`,
      icon: `${path}eye-icon.svg`,
      href: "/projects",
    },
    {
      text: "Users",
      bg: `${path}woman.jpeg`,
      icon: `${path}user.svg`,
      href: "",
    },
    {
      text: "Admin",
      bg: `${path}notebook.jpeg`,
      icon: `${path}settings.svg`,
      href: "",
    },
    {
      text: "Billing",
      bg: `${path}man.jpeg`,
      icon: `${path}credit-card.svg`,
      href: "",
    },
    {
      text: "Support",
      bg: `${path}phone.jpeg`,
      icon: `${path}contact.svg`,
      href: "",
    },
  ];
  const projects = [
    {
      name: "Project Number 1",
      owner: "reducción de mora",
      company: "Carrefour",
    },
    {
      name: "Project Number 2",
      owner: "reducción de mora",
      company: "Carrefour",
    },
    {
      name: "Project Number 3",
      owner: "reducción de mora",
      company: "Carrefour",
    },
  ];

  return (
    <div className="content">
      <h2 className="home__subheading">Functions</h2>

      <div className="home__middle">
        {functions.map((func) => (
          <Card key={func.text} {...func} />
        ))}
      </div>
      <h2 className="home__subheading">Shortcuts</h2>

      <div className="home__bottom">
        <ShortTable projects={projects} />
        <DatasetGraph />
      </div>
    </div>
  );
};

export default HomePage;

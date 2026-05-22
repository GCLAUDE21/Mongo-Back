import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const contentStyle = {
  display: "flex",
  flexWrap: "wrap",
  padding: "3rem 3rem",
  justifyContent: "center",
};

const menuItems = [
  { key: "1", label: <Link to="/">Accueil</Link> },
  { key: "2", label: <Link to="/rooms">Chambres</Link> },
  { key: "3", label: <Link to="/about">A propos</Link> },
  { key: "4", label: <Link to="/contact">Contact</Link> },
];

const GCLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Header>

      <Content style={contentStyle}>{children}</Content>

      <Footer>Hardcoders ©2026 Crée par Guillaume CLAUDE</Footer>
    </Layout>
  );
};

export default GCLayout;

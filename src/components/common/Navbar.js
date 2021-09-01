import { Menu } from "antd";
import Layout, { Footer, Header, Content } from "antd/lib/layout/layout";
import "./nav.scss";

function Navbar() {
  return (
    <Header style={{ backgroundColor: "#1F1E1D", position: "fixed" }}>
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Menu.Item key="1">Skills .</Menu.Item>
        <Menu.Item key="2">Contact .</Menu.Item>
        <Menu.Item key="3">Projects .</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;

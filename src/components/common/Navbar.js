import { Menu } from "antd";
import Layout, { Footer, Header, Content } from "antd/lib/layout/layout";
import "./nav.scss";

function Navbar() {
  return (
    <Header
      style={{ backgroundColor: "#1F1E1D", position: "fixed", width: "100%" }}
    >
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "flex-end",
        }}
        selectedKeys={["skill"]}
      >
        <Menu.Item key="skill">Skills .</Menu.Item>
        <Menu.Item key="contact">Contact .</Menu.Item>
        <Menu.Item key="project">Projects .</Menu.Item>
      </Menu>
    </Header>
  );
}

export default Navbar;

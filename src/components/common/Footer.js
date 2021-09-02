import { Layout, Typography, Row, Col } from "antd";
import user from "../../api/user.json";
import "../sass/footer.scss";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import moment from "moment";

function Footer() {
  const { Title } = Typography;
  const { Content } = Layout;
  return (
    <div
      style={{
        height: "90vh",
        backgroundColor: "#171615",
        color: "whitesmoke",
      }}
    >
      <Content style={{ padding: "15% 15%" }}>
        <Row>
          <Col md={12} xs={24} style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <AiFillInstagram className="social-icon" />
              <FaLinkedinIn className="social-icon" />
              <VscGithub className="social-icon" />
            </div>
          </Col>
          <Col md={12} xs={24} style={{ marginBottom: "3rem" }}>
            <Title level={3} style={{ color: "whitesmoke" }}>
              GET IN TOUCH
            </Title>
            <div className="contact-container">
              <div className="contact-details">{user.email}</div>
              <div className="contact-details">{user.phone}</div>
              <div className="contact-details">{user.address}</div>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
          &copy; {moment().format("YYYY")} All right reserved.
        </div>
      </Content>
    </div>
  );
}

export default Footer;

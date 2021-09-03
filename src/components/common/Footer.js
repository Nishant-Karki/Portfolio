import {
  Layout,
  Typography,
  notification,
  Row,
  Col,
  Input,
  Form,
  Button,
} from "antd";
import user from "../../api/user.json";
import "../sass/footer.scss";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { AiFillInstagram } from "react-icons/ai";
import moment from "moment";
import useComponents from "./useComponents";

function Footer() {
  const { Title } = Typography;
  const { Content } = Layout;
  const [form] = Form.useForm();

  const onFinish = () => {
    notification.success({
      style: {
        borderRadius: "0.5rem",
      },
      maxCount: 1,
      message: `Thankyou`,
      description: "I'll contact you ASAP.",
    });
    // form.resetFields();
  };

  return (
    <div
      id="_"
      style={{
        height: "100%",
        backgroundColor: "#171615",
        color: "whitesmoke",
      }}
    >
      <Content style={{ padding: "10% 15%" }}>
        <Row>
          <Col sm={24} md={8} xs={24} style={{ marginBottom: "4rem" }}>
            <Title level={3} style={{ color: "whitesmoke" }}>
              GET IN TOUCH
            </Title>
            <div className="contact-container">
              <div className="contact-details">{user.email}</div>
              <div className="contact-details">{user.phone}</div>
              <div className="contact-details">{user.address}</div>
            </div>
          </Col>
          <Col sm={24} md={16} xs={24} style={{ marginBottom: "3rem" }}>
            <div style={{ height: "auto" }}>
              <Form
                autoComplete="off"
                onFinish={onFinish}
                labelCol={{ span: 10 }}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email" },
                  ]}
                >
                  <Input type="email" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: "Anything  " }]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item style={{ float: "right" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{
                      backgroundColor: "#f84525",
                      border: "none",
                      borderRadius: "0.8rem",
                      height: "2rem",
                      width: "6rem",
                    }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <AiFillInstagram className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <VscGithub className="social-icon" />
          </div>
          &copy; {moment().format("YYYY")} All right reserved.
        </div>
      </Content>
    </div>
  );
}

export default Footer;

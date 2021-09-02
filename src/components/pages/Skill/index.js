import { Layout, Typography, Rate, Row, Col, Space } from "antd";
import Fade from "react-reveal/Fade";
import user from "../../../api/user.json";

function Skill() {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <div
      style={{
        minHeight: "80vh",
        backgroundColor: "#e9e9e9",
      }}
    >
      <Content style={{ padding: "10% 15%" }}>
        <Title level={1}>Skills</Title>
        <div>
          <Row>
            {
              user.skills.map((item, index) => (
                <Col key={index} lg={6} md={4} sm={12} xs={24}>
                  <Fade bottom cascade>
                    <div
                      style={{
                        cursor: "pointer",
                        minHeight: "6rem",
                        backgroundColor: "#272624",
                        maxWidth: "14rem",
                        borderRadius: "1rem",
                        padding: "1rem",
                        margin: "1rem",
                        textAlign: "center",
                        boxShadow: "6px 8px 5px #A6A6A6",
                      }}
                    >
                      <Rate
                        style={{ color: " #f84525", border: "red" }}
                        allowHalf
                        disabled
                        defaultValue={(item.percentage / 20).toFixed(1)}
                      />
                      <h4 style={{ color: "whitesmoke" }}>{item.name}</h4>
                    </div>
                  </Fade>
                </Col>
              ))
              // .slice(0, 1)
            }
          </Row>
        </div>
      </Content>
    </div>
  );
}

export default Skill;

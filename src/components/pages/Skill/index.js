import { Layout, Typography, Rate, Row, Col, Space } from "antd";
import Fade from "react-reveal/Fade";
import user from "../../../api/user.json";

function Skill() {
  const { Content } = Layout;
  const { Title } = Typography;

  return (
    <div
      style={{
        height: "70vh",
        backgroundColor: "#1F1E1D",
      }}
    >
      <Fade left cascade>
        <Content style={{ padding: "10% 15%" }}>
          <Title level={1} style={{ color: "whitesmoke" }}>
            Skills
          </Title>
          <div>
            <Row>
              {
                user.skills.map((item, index) => (
                  <Col xs={6}>
                    <div key={index}>
                      <div
                        style={{
                          maxHeight: "6rem",
                          backgroundColor: "#272624",
                          maxWidth: "14rem",
                          borderRadius: "1rem",
                          padding: "1rem",
                          margin: "1rem",
                          textAlign: "center",
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
                    </div>
                  </Col>
                ))
                // .slice(0, 1)
              }
            </Row>
          </div>
        </Content>
      </Fade>
    </div>
  );
}

export default Skill;

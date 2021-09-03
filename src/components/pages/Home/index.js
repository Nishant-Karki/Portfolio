import { Layout, Typography, Row, Col, Space } from "antd";
import Typewriter from "typewriter-effect";
import user from "../../../api/user.json";
import { MdFileDownload } from "react-icons/md";
import useComponents from "../../common/useComponents";
import Fade from "react-reveal/Fade";

function Home() {
  const { firstName, middleName, lastName, basicSkills, cvLink } = user;
  const { Title } = Typography;

  const { CButton, ImageContainer } = useComponents();

  //regex to remove html tag
  const regex = /(<([^>]+)>)/gi;
  const aboutMe = user.aboutMe1.replace(regex, "");

  return (
    <div
      style={{
        backgroundColor: "#1F1E1D",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ margin: "16%" }}>
        <Row>
          <Col md={12} sm={12} xs={24}>
            <Fade left duration={600}>
              <Title level={4} style={{ color: "#EA4123", lineHeight: 0.1 }}>
                <Typewriter
                  options={{
                    strings: basicSkills,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Title>
              <Title level={1} style={{ color: "whitesmoke", marginTop: "0" }}>
                Hi,
                <br />
                I'm {firstName} {middleName} {lastName}
              </Title>

              <p
                style={{
                  color: "whitesmoke",
                  textAlign: "justify",
                  fontSize: "16px",
                }}
              >
                {aboutMe}
              </p>

              <a
                href={cvLink}
                style={{
                  width: "11rem",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <CButton color="whitesmoke">
                  Download Resume
                  <MdFileDownload
                    color="whitesmoke"
                    size={15}
                    style={{ margin: "0 0 -0.2rem 0.5rem" }}
                  />
                </CButton>
              </a>
            </Fade>
          </Col>
          <Col offset={2} md={10} sm={12} xs={24}>
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Fade right duration={600}>
                <ImageContainer
                  alt="portrait"
                  height={"auto"}
                  width={300}
                  src="https://images.unsplash.com/photo-1422728280635-45167d8b7197?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
              </Fade>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;

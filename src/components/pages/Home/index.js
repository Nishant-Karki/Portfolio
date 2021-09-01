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
        height: "100vh",
      }}
    >
      <div style={{ margin: "16%" }}>
        <Row>
          <Col md={12} sm={24}>
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
          <Col offset={4}>
            <Fade right duration={600}>
              <ImageContainer
                alt="portrait"
                height={300}
                width={300}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;

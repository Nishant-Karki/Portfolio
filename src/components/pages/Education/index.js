import React from "react";
import { Typography, Layout, Timeline } from "antd";
import user from "../../../api/user.json";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";

function Education() {
  const { Title } = Typography;
  const { Content } = Layout;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const regexTag = /(<([^>]+)>)/gi;
  const regexNbsp = /&nbsp;/g;

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      <Fade bottom cascade>
        <Content style={{ padding: "7% 15%" }}>
          <Title level={1} style={{ marginBottom: "2rem" }}>
            Education
          </Title>

          <Timeline mode={isMobile ? "alternate" : "left"}>
            {user.education.map((item, index) => (
              <Timeline.Item color="#f84525" key={index}>
                <h2 style={{ color: "#f84525" }}>
                  {item.title} ({item.startYear} - {item.endYear})
                </h2>
                <h3 style={{ marginTop: "-0.4rem" }}>{item.institution}</h3>
                <p style={{ textAlign: "justify" }}>
                  {item.details.replace(regexTag, "").replace(regexNbsp, "")}
                </p>
              </Timeline.Item>
            ))}
          </Timeline>
        </Content>
      </Fade>
    </div>
  );
}

export default Education;

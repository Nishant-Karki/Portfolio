import { Layout, Typography, Timeline } from "antd";
import user from "../../../api/user.json";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

function Experience() {
  const { Content } = Layout;
  const { Title } = Typography;

  const regexTag = /(<([^>]+)>)/gi;
  const regexNbsp = /&nbsp;/g;

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

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      <Fade left cascade>
        <Content style={{ padding: "10% 15%" }}>
          <Title level={1} style={{ marginBottom: "2rem" }}>
            Experience
          </Title>
          <Timeline mode={isMobile ? "alternate" : "left"}>
            {user.workExperience.map((item, index) => (
              <Timeline.Item color="#f84525" key={index}>
                <h2 style={{ color: "#f84525" }}>
                  {item.title} ({item.startMonth.slice(0, 3)} {item.startYear} -{" "}
                  {item.endMonth.slice(0, 3)} {item.endYear})
                </h2>
                <h3
                  style={{ marginTop: "-0.4rem" }}
                  onClick={() => window.open(item.instituteWebsite)}
                >
                  {item.institution}
                  <FiExternalLink
                    color="#f84525"
                    style={{ marginLeft: "0.5rem", marginBottom: "-0.1rem" }}
                  />
                </h3>
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

export default Experience;

import { Layout, Typography, Timeline } from "antd";
import user from "../../../api/user.json";
import Fade from "react-reveal/Fade";

function Experience() {
  const { Content } = Layout;
  const { Title } = Typography;

  const regexTag = /(<([^>]+)>)/gi;
  const regexNbsp = /&nbsp;/g;

  return (
    <div
      style={{
        minHeight: "120vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <Fade left cascade>
        <Content style={{ padding: "10% 15%" }}>
          <Title level={1}>Experience</Title>
          <Timeline mode="alternate">
            {user.workExperience.map((item, index) => (
              <Timeline.Item color="#f84525" key={index}>
                <h2 style={{ color: "#f84525" }}>
                  {item.title} ({item.startMonth.slice(0, 3)} {item.startYear} -{" "}
                  {item.endMonth.slice(0, 3)} {item.endYear})
                </h2>
                <a href={item.instituteWebsite}>
                  <h3 style={{ marginTop: "-0.4rem" }}>{item.institution}</h3>
                </a>
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

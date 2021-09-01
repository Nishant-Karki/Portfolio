import React from "react";
import { Typography, Layout, Timeline } from "antd";
import user from "../../../api/user.json";

function Education() {
  const { Title } = Typography;
  const { Content } = Layout;

  const regexTag = /(<([^>]+)>)/gi;
  const regexNbsp = /&nbsp;/g;

  return (
    <div style={{ height: "100vh", backgroundColor: "#DBDBDB" }}>
      <Content style={{ padding: "7% 15%" }}>
        <Title level={1}>Education</Title>
        <Timeline mode="alternate">
          {user.education.map((item) => (
            <Timeline.Item color="#f84525">
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
    </div>
  );
}

export default Education;

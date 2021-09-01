import { Layout, Typography } from "antd";
import Typewriter from "typewriter-effect";
import CButton from "../../common/CButton";
import user from "../../../api/user.json";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router";

function Home() {
  const { firstName, middleName, lastName, basicSkills, cvLink } = user;
  const { Title } = Typography;
  return (
    <Layout
      style={{
        backgroundColor: "#1F1E1D",

        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ marginLeft: "10%" }}>
        <Title level={5} style={{ color: "#EA4123", lineHeight: 0.1 }}>
          <Typewriter
            options={{
              strings: basicSkills,
              autoStart: true,
              loop: true,
            }}
          />
        </Title>
        <Title level={2} style={{ color: "whitesmoke", marginTop: "-1px" }}>
          Hi,
          <br />
          I'm {firstName} {middleName} {lastName}
        </Title>
        <a
          href={cvLink}
          style={{
            width: "10rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CButton color="whitesmoke">
            Download Resume
            <MdFileDownload color="whitesmoke" />
          </CButton>
        </a>
      </div>
    </Layout>
  );
}

export default Home;

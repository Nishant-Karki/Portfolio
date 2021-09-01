import { Typography } from "antd";

import "./button.scss";
import "./imageContainer.scss";

function useComponents() {
  const { Title } = Typography;

  const CButton = ({ children, color }) => {
    return (
      <div className="btnbg">
        <div style={{ color: color }}>{children}</div>
      </div>
    );
  };

  const ImageContainer = ({ src, alt, ...rest }) => {
    return (
      <img className="portraitContainer" alt={alt} src={src} {...rest} s />
    );
  };

  return { CButton, ImageContainer };
}

export default useComponents;

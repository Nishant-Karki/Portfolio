import { Typography, Timeline } from "antd";

import "../sass/button.scss";
import "../sass/imageContainer.scss";

function useComponents() {
  const { Title } = Typography;

  const CButton = ({ children, color }) => {
    return (
      <div className="btnbg" type="button">
        <div style={{ color: color }}>{children}</div>
      </div>
    );
  };

  const ImageContainer = ({ src, alt, ...rest }) => {
    return <img className="portraitContainer" alt={alt} src={src} {...rest} />;
  };

  return { CButton, ImageContainer };
}

export default useComponents;

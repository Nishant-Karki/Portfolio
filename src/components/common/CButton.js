import "./button.scss";

function CButton({ children, color }) {
  return (
    <div className="btnbg" style={{ color: color }}>
      {children}
    </div>
  );
}

export default CButton;

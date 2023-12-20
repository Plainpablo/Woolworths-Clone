function HeaderComponent2(props) {
  // STYLE
  const mainContainer = {
    display: "flex",
    whiteSpace: "nowrap",
    marginRight: "2.06rem",
    gap: "0.69rem",
    alignItems: "center",
  };

  return (
    <div
      onMouseOver={props.onMouseOver}
      style={mainContainer}
      className="main-container"
    >
      <p style={props.pStyle}>{props.text}</p>
      <img id={props.imgId} src={props.src} alt={props.alt} />
    </div>
  );
}

export default HeaderComponent2;

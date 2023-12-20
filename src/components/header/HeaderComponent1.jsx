function HeaderComponent1(props) {
  // STYLE

  return (
    <>
      <div style={props.imgRelative} className="mainContainer">
        <a
          style={props.HeaderComponent1Style}
          className="headerComponent1"
          href="#"
        >
          <img style={props.imgStyle} src={props.src} alt={props.alt} />
          <p style={props.textStyle}>{props.text}</p>
        </a>
      </div>
    </>
  );
}

export default HeaderComponent1;

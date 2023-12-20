function BorderLine() {
  const borderLine = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // maxWidth: "83.75rem",
    marginInline: "auto",
    paddingInline: "1.25rem",
    marginInline: "1.25rem",
    paddingBottom: "1.5rem",
    borderTop: "1px solid #dcdcdc",
  };
  return <div style={borderLine} className="borderLine"></div>;
}

export default BorderLine;

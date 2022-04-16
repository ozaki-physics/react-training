export const ColoredMessage = (props) => {
  const { color, children } = props

  const contentStyle = {
    // color: color,
    color, // プロパティ名と変数名が同じなら省略記法が使える
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
}

const SVG = ({ width, height, color, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
    >
      {children}
    </svg>
  );
};

export default SVG;

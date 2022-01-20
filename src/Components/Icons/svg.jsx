const svg = ({ width, height, color, path }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
    >
      {path}
    </svg>
  );
};

export default svg;

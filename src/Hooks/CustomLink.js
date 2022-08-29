import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          margin: "0px 15px",
          color: match ? "#277186" : "#2a5449",
          borderBottom: match && "2px solid #277186",
          borderRadius: "3px",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;

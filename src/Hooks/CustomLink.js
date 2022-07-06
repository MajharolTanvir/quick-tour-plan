import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ margin: "0px 15px", color: match ? "#50e1e6" : "white" }}
                to={to}>
                {children}
            </Link>
        </div>
    );
}
export default CustomLink;
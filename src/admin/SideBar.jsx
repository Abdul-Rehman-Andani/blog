  import { NavLink } from "react-router-dom";
  import { useSelector } from "react-redux";

  const SideBar = () => {

    const { active } = useSelector((store) => store.sidebar);

    return (
      <>
        <div className={`col-lg-2 col-5 side-bar ${active}`}>
          <aside>
            <ul>
              <NavLink to="/dashboard">
                <li>Dashboard</li>
              </NavLink>
              <NavLink to="/dashbaord/catogaries">
                <li>Catogaries</li>
              </NavLink>
              <NavLink to="/dashbaord/posts">
                <li>Posts</li>
              </NavLink>
              <NavLink to="/dashbaord/users">
                <li>Users</li>
              </NavLink>
              <NavLink to="/">
                <li>Web</li>
              </NavLink>
            </ul>
          </aside>
        </div>
      </>
    );
  };

  export default SideBar;

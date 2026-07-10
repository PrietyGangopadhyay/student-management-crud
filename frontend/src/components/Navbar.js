import { FaUserGraduate } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">

        <FaUserGraduate size={34} />

        <div>

          <h1>Student Management Dashboard</h1>

          <p>FastAPI • React • SQLite</p>

        </div>

      </div>

      <div className="admin">

        Welcome Admin

      </div>

    </nav>
  );
}

export default Navbar;
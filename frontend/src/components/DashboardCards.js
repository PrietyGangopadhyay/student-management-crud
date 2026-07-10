import {
  FaUsers,
  FaBuilding,
  FaBirthdayCake,
  FaCalendarAlt,
} from "react-icons/fa";

function DashboardCards({ students }) {
  const totalStudents = students.length;

  const departments = new Set(
    students.map((student) => student.department)
  ).size;

  const averageAge =
    students.length > 0
      ? (
          students.reduce((sum, student) => sum + student.age, 0) /
          students.length
        ).toFixed(1)
      : 0;

  const today = new Date().toLocaleDateString();

  return (
    <div className="dashboard-cards">

      <div className="card">
        <FaUsers className="card-icon" />
        <h3>Total Students</h3>
        <h2>{totalStudents}</h2>
      </div>

      <div className="card">
        <FaBuilding className="card-icon" />
        <h3>Departments</h3>
        <h2>{departments}</h2>
      </div>

      <div className="card">
        <FaBirthdayCake className="card-icon" />
        <h3>Average Age</h3>
        <h2>{averageAge}</h2>
      </div>

      <div className="card">
        <FaCalendarAlt className="card-icon" />
        <h3>Today's Date</h3>
        <h2>{today}</h2>
      </div>

    </div>
  );
}

export default DashboardCards;
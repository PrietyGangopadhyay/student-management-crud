import { FaEdit, FaTrash } from "react-icons/fa";

function StudentTable({
  students,
  editStudent,
  deleteStudent,
  search,
}) {
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-table">
                No Students Found
              </td>
            </tr>
          ) : (
            filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.age}</td>

                <td>{student.department}</td>

                <td className="action-buttons">
                  <button
                    className="update-btn"
                    onClick={() => editStudent(student)}
                  >
                    <FaEdit /> Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
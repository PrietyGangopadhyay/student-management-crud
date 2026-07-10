function StudentForm({
  name,
  setName,
  age,
  setAge,
  department,
  setDepartment,
  editingId,
  handleSubmit,
  clearForm,
}) {
  return (
    <div className="form-container">
      <h2>{editingId ? "✏ Update Student" : "➕ Add New Student"}</h2>

      <form onSubmit={handleSubmit} className="student-form">

        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min="1"
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

        <div className="button-group">

          <button
            type="submit"
            className={editingId ? "update-btn" : "add-btn"}
          >
            {editingId ? "Update Student" : "Add Student"}
          </button>

          {editingId && (
            <button
              type="button"
              className="cancel-btn"
              onClick={clearForm}
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
}

export default StudentForm;
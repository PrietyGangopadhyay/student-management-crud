import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import DashboardCards from "./components/DashboardCards";
import SearchBar from "./components/SearchBar";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/api";

function App() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend.");
    }
  };

  const clearForm = () => {
    setName("");
    setAge("");
    setDepartment("");
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      department.trim() === "" ||
      Number(age) <= 0
    ) {
      alert("Please enter valid details.");
      return;
    }

    const student = {
      name,
      age: Number(age),
      department,
    };

    try {
      if (editingId === null) {
        await addStudent(student);
      } else {
        await updateStudent(editingId, student);
      }

      clearForm();
      fetchStudents();
    } catch (error) {
      console.error(error);
      alert("Operation Failed.");
    }
  };

  const editStudent = (student) => {
    setEditingId(student.id);
    setName(student.name);
    setAge(student.age);
    setDepartment(student.department);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);
      fetchStudents();
    } catch (error) {
      console.error(error);
      alert("Delete Failed.");
    }
  };

  return (
    <div className="container">

      <Navbar />

      <DashboardCards students={students} />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <StudentForm
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        department={department}
        setDepartment={setDepartment}
        editingId={editingId}
        handleSubmit={handleSubmit}
        clearForm={clearForm}
      />

      <StudentTable
        students={students}
        search={search}
        editStudent={editStudent}
        deleteStudent={handleDelete}
      />

    </div>
  );
}

export default App;
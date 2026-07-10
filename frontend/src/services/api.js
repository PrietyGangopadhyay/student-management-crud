const API = "http://127.0.0.1:8000/students";

export async function getStudents() {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return await response.json();
}

export async function addStudent(student) {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to add student");
  }

  return await response.json();
}

export async function updateStudent(id, student) {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  if (!response.ok) {
    throw new Error("Failed to update student");
  }

  return await response.json();
}

export async function deleteStudent(id) {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete student");
  }

  return await response.json();
}
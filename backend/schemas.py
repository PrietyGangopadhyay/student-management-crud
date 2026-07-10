from pydantic import BaseModel


class StudentBase(BaseModel):
    name: str
    age: int
    department: str


class StudentCreate(StudentBase):
    pass


class Student(StudentBase):
    id: int

    class Config:
        from_attributes = True
import { useState } from "react";
type studentType = {
  class: string;
  subject: string;
};
export const Form = () => {
  const [student, setStudent] = useState<studentType>({class:"",subject:""});
  const handleSetStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Student Details", student)
  }
  return (
    <div>
      <form>
        <div>
          <label htmlFor="class">Class:</label>
          <input
            type="text"
            onChange={handleSetStudent}
            name="class"
            value={student.class}
          ></input>
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            onChange={handleSetStudent}
            name="subject"
            value={student.subject}
          ></input>
        </div>
        <p>{student.class} {student.subject}</p>
        <button onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

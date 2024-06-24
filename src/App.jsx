import { useState } from "react";
import axios from "axios";
import DisplayEmployee from "./components/DisplayEmployee";
import "./App.css";

const sampleEmployee = {
  gender: "male",
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  location: {
    street: {
      number: 761,
      name: "Tay Street",
    },
    city: "Timaru",
    postcode: 76111,
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  function getEmployee() {
    // fetch("https://randomuser.me/api?nat=en")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
    axios
      .get("https://randomuser.me/api?nat=en")
      .then((response) => setEmployee(response.data.results[0]))
      .then((data) => console.log(employee));
  }
  return (
    <>
      <DisplayEmployee employee={employee} />
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </>
  );
}

export default App;

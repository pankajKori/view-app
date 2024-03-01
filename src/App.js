import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import View from "./View";
const App = () => {
  const [randomUser, setRandomUser] = useState([]);

  useEffect(() => {
    async function getRandomUserData() {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      //console.log(data);
      setRandomUser(data.results);
    }
    getRandomUserData();
  }, []);
  console.log(randomUser, "randomUser");

  //https://randomuser.me/api/?results=5
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {randomUser.map((randomUser) => (
            <div>
              <tr key={randomUser.id.value}>
                <Link to={"/view/" + randomUser.id.value}>
                  <td>
                    {randomUser.name.title} {randomUser.name.first}
                    {randomUser.name.last}
                  </td>

                  <td>{randomUser.gender}</td>
                  <td>{randomUser.email}</td>
                  <td>{randomUser.login.username}</td>
                </Link>
              </tr>
            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

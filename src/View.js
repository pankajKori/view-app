import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const View = () => {
  const params = useParams();
  console.log(params.id);

  const [view, setView] = useState([]);
  useEffect(() => {
    async function viewData() {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      console.log(view);
      setView(data.results);
    }
    viewData();
  }, []);
  return (
    <div>
      <h1>view Data</h1>
      <h1>{view.gender}</h1>
      <h1>{view.email}</h1>
    </div>
  );
};

export default View;

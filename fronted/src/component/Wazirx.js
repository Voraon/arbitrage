import React, { useState, useEffect } from "react";
function Wazirx() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      const [item] = data.results;
      setPeople(item);
      // setData(item);
      setLoading(false);
      console.log(data);
    }
    fetchData();

    console.log("inside useEffect");
  }, []);
  return (
    <div>
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>
          {people.name.first}&& {people.gender}
          <img src={people.picture.large} alt="image"></img>
        </div>
      )}
    </div>
  );
}

export default Wazirx;

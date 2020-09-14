import React, { useState, useEffect } from "react";

function Sample() {
  //   const [persons, setPersons] = useState();
  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];
  async function postData(
    url = "https://api.wazirx.com/api/v2/depth?market=btcusdt",
    data = {}
  ) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "asdf",
      },
    });
    console.log(response.json()); // parses JSON response into native JavaScript objects
  }
  postData();
  return (
    <>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
      {/* {persons.map((person) => (
        <div>{person.name}</div>
      ))} */}
    </>
  );
}

export default Sample;

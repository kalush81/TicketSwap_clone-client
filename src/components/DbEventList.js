import React, { Component } from "react";
import { useSelector } from "react-redux";

function DbEventList() {
  const dbEvents = useSelector(state => state.dbEvents);
  console.log(dbEvents);
  return (
    <div>
      <h2>there are tickets for</h2>
      {dbEvents.length > 0
        ? dbEvents.map(e => (
            <div style={{ width: "90%", border: "1px solid black", margin: '20px auto', padding:'20px' }}>
              {e.eventName}: uploaded by userId:{e.userId} | offered for {e.price}{" "}
              eu
            </div>
          ))
        : "...loading"}
    </div>
  );
}

export default DbEventList;

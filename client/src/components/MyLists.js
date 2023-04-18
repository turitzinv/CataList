import React from "react";
import ListCard from "./ListCard";

const MyLists = ({ allLists }) => {
  const userList = allLists.map((list) => (
    <ListCard key={list.id} header={list.header} />
  ));

  return (
    <div>
      <h1 id="your-list-h1">Your List</h1>
      {userList}
    </div>
  );
};

export default MyLists;

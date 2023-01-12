import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Placeholder } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div>
      <input type="search" placeholder="search"></input>
    </div>
  );
};

export default SearchBox;

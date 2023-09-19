import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Form.css";
export default function Form({ setQuery }) {
  const [search, setSearch] = useState("");
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <form className="search-form" onSubmit={getSearch}>
      <Input className={"search-bar"} value={search} onChange={updateSearch} />
      <Button className={"search-button"} type={"submit"} value={"Search"} />
    </form>
  );
}

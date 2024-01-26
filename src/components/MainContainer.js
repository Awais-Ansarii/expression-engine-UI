import React from "react";
import { AppContext } from "../utils/AppContext";
import { useContext } from "react";
import Form from "./Form";

const MainContainer = () => {
  const { theme, setTheme, combinator, setCombinator, rules, setRules } =
    useContext(AppContext);
  return (
    <div className="container d-flex flex-column align-items-center mb-3">
      <h1 className=" mt-3 mb-2">Expression Engine UI</h1>

      <Form />
      <hr />
      <div className="w-50 p-3 bg-primary-subtle rounded">
        <pre className="w-50 mx-auto fw-semibold">
          {JSON.stringify({ rules, combinator }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default MainContainer;

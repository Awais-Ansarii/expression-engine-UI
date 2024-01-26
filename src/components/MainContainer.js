import React from "react";
import { AppContext } from "../utils/AppContext";
import { useContext } from "react";
import Form from "./Form";
import Button from "react-bootstrap/Button";

const MainContainer = () => {
  const { theme, setTheme, combinator, rules } = useContext(AppContext);
  return (
    <div className={` d-flex flex-column align-items-center mb-3  `}>
      <div className="  mt-3 mb-2 d-flex justify-content-center gap-5 align-items-center">
        <h1 className=" ">Expression Engine UI</h1>
        {theme ? (
          <Button onClick={() => setTheme(!theme)} variant="light">
            Light-Theme🌙
          </Button>
        ) : (
          <Button onClick={() => setTheme(!theme)} variant="dark">
            Dark-Theme🌙
          </Button>
        )}
      </div>

      <Form />
      <hr />
      <div
        className={`w-50 p-3 mb-4 rounded ${
          theme ? "bg-secondary text-white" : "bg-success-subtle"
          }`}
        
      >
        <pre className="w-50 mx-auto fw-semibold">
          {JSON.stringify({ rules, combinator }, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default MainContainer;

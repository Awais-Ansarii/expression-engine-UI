import React, { useContext } from "react";
import { AppContext } from "../utils/AppContext";

const Form = () => {
  const {
    theme,
    setTheme,
    combinator,
    setCombinator,
    rules,
    setRules,
    handleAddRule,
    handleDeleteRule,
    handleInputChange,
  } = useContext(AppContext);
  return (
    <form className="d-flex flex-column align-items-center ">
      {rules.map((rule, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body bg-light">
            <h5 className="card-title">Expression {index + 1}</h5>

            {/* yaha se */}
            <div className="d-flex flex-wrap justify-content-center gap-4 ">
              <div className="form-group ">
                <label>Rule Type:</label>
                <select
                  className="form-select"
                  value={rule.key}
                  onChange={(e) =>
                    handleInputChange(index, "key", e.target.value)
                  }
                >
                  <option value="age">Age</option>
                  <option value="credit_score">Credit Score</option>
                  <option value="account_balance">Account Balance</option>
                </select>
              </div>

              <div className="form-group ">
                <label>Operator:</label>
                <select
                  className="form-select"
                  value={rule.output.operator}
                  onChange={(e) =>
                    handleInputChange(index, "output.operator", e.target.value)
                  }
                >
                  <option value=">">{">"}</option>
                  <option value="<">{"<"}</option>
                  <option value=">=">{">="}</option>
                  <option value="<=">{"<="}</option>
                  <option value="=">{"="}</option>
                </select>
              </div>

              <div className="form-group ">
                <label>Value:</label>
                <input
                  type="number"
                  className="form-control"
                  value={rule.output.value}
                  onChange={(e) =>
                    handleInputChange(index, "output.value", e.target.value)
                  }
                />
              </div>

              <div className="form-group ">
                <label>Score:</label>
                <input
                  type="number"
                  className="form-control"
                  value={rule.output.score}
                  onChange={(e) =>
                    handleInputChange(index, "output.score", e.target.value)
                  }
                />
              </div>

              {/* connector */}
              <div className="form-group mb-3">
                <label>Connector Type: </label>
                <select
                  className="form-select"
                  value={combinator}
                  onChange={(e) => setCombinator(e.target.value)}
                >
                  <option value="and">AND</option>
                  <option value="or">OR</option>
                </select>
              </div>

              {/* delete btn  */}

              <div className=" d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-danger "
                  onClick={() => handleDeleteRule(index)}
                >
                  Delete
                </button>
              </div>
            </div>
            {/* yha tak  */}
          </div>
        </div>
      ))}

      {/* Add Expression btn  */}
      <button type="button" className="btn btn-primary" onClick={handleAddRule}>
        Add Expression
      </button>
    </form>
  );
};

export default Form;

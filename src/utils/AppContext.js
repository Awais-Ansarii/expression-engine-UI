import { createContext, useState } from "react";

export const AppContext = createContext();

function ContextProvider({ children }) {
    const [theme, setTheme] = useState(false);
    const [combinator, setCombinator] = useState("and");
    const [rules, setRules] = useState([
      { key: "age", output: { value: 0, operator: ">=", score: 0 } },
    ]);

    const handleAddRule = () => {
      setRules([
        ...rules,
        { key: "", output: { value: 0, operator: ">=", score: 0 } },
      ]);
    };


      const handleDeleteRule = (index) => {
        const updatedRules = [...rules];
        updatedRules.splice(index, 1);
        setRules(updatedRules);
    };
    
    const handleInputChange = (index, field, value) => {
      const updatedRules = [...rules];
      if (field.startsWith("output.")) {
        const outputField = field.split(".")[1];
        updatedRules[index].output[outputField] = value;
      } else {
        updatedRules[index][field] = value;
      }
      setRules(updatedRules);
    };
    
    const value = {
      theme,
      setTheme,
      combinator,
      setCombinator,
      rules,
      setRules,
      handleAddRule,
      handleDeleteRule,
      handleInputChange,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default ContextProvider;

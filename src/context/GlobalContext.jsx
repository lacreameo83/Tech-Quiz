import { createContext, useState } from "react";
import run from "../config/gemini";

 const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
 const [loginModel, setLoginModel] = useState(false);
 const [RegisterModel, setResitertModel] = useState(false);

  const [stack, setStack] = useState("");
  const [difficulty, setDifficulty] = useState("");
  
  const [options, setOptions] = useState();
  const [questionOutput, setQuestion] = useState([]);

  console.log(questionOutput);
  




const promptOutPut = `Generate ${options} ${difficulty} level questions for a developer learning ${stack}. Provide multiple-choice answer options for each question and clearly mark the correct answer. Return the response as an array of JSON objects with the following format for each question:

[
  {
    "question": "Your question here",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "answer": "Correct answer here"
  },
  {
    "question": "Your question here",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "answer": "Correct answer here"
  },
  ...
]

Only return valid JSON, without any additional text or formatting.`;


  const handleGenerateQuestion = async () => {
    

    const response = await run(promptOutPut);

    // let newResponse = response.replaceAll(/`/g, "");
    // const newResponse2 = newResponse.replaceAll("json", "");

    const FormatedResponse = JSON.parse(response);



    setQuestion(FormatedResponse);
    console.log(typeof FormatedResponse);
    
  };
 

  
  

  return (
    <GlobalContext.Provider
      value={{
        stack,
        setStack,
        difficulty,
        setDifficulty,
        handleGenerateQuestion,
        questionOutput,
        loginModel,
        setLoginModel,
        RegisterModel,
        setResitertModel,
        setOptions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
export default GlobalContextProvider;

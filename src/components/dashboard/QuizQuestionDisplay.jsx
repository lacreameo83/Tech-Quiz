import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function QuizQuestionDisplay() {
  const { questionOutput ,setQuestion} = useContext(GlobalContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [dispalyResponse,setDisplayResponse]=useState("")


 
  const handleNextQuestion = () => {
    if (
      selectedOption === currentQuestion.answer &&
      currentQuestionIndex < questionOutput.length - 1
    ) {
      setDisplayResponse("correct");
      setIsAnswerCorrect(true);
      setSelectedOption(true);
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setDisplayResponse("");
      }, 1000);
      
      setSelectedOption(null); 
       setIsAnswerCorrect(null);
        
       
    } else {
      setDisplayResponse("incorrect Anwser");
      setIsAnswerCorrect(false);
      setSelectedOption(true);
      //  setDisplayResponse("");
      
    }
    
  };



  const currentQuestion = questionOutput[currentQuestionIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="h-[70vh] w-[70vw] flex items-center justify-center">
      <div className="h-[45vh] w-[49vw] bg-stone-50 p-4 shadow-lg  ">
        {questionOutput.length !== 0 ? (
          <div className="flex flex-col justify-between h-[38vh] w-[45vw] ">
            <div>
              <p className="font-bold text-black mb-5">
                <span className="text-black">
                  Question {currentQuestionIndex + 1}:{" "}
                </span>{" "}
                {currentQuestion.question}
              </p>
              <ul>
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      id={`option-${index}`}
                      name="answer"
                      type="radio"
                      checked={selectedOption === option}
                      value={option}
                      onChange={() => handleOptionChange(option)}
                    />
                    <label htmlFor={`option-${index}`}>{option}</label>
                  </div>
                ))}
              </ul>
            </div>
            <div className=" flex items-center justify-between">
              <p> {dispalyResponse}</p>

              <button
                onClick={handleNextQuestion}
                disabled={!selectedOption}
                className="mt-4 bg-blue-500 text-white p-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <p className="text-red-600 text-[10px] flex items-center h-[30vh] justify-center flex-col">
            Sorry Network error from server!!! No data genarated at the moment
          </p>
        )}
      </div>
    </div>
  );}


export default QuizQuestionDisplay;

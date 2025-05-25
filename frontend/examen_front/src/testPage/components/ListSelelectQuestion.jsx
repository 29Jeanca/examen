import { useEffect, useState } from "react";
import SelectQuestion from "./SelectQuestion";

const ListSelectQuestion = ({ questions }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const saveSelectedOption = (id, optionId, stateQuestion) => {
    const newOptions = {
      ...selectedOptions,
      [id]: { optionId, stateQuestion,id,is_correct: stateQuestion },
    };
    setSelectedOptions(newOptions);
    localStorage.setItem("questions", JSON.stringify(newOptions));
  };

  useEffect(() => {
    const storedOptions = localStorage.getItem("questions");
    if (storedOptions) {
      setSelectedOptions(JSON.parse(storedOptions));
    }
  }, []);

  useEffect(() => {
    console.log("Respuestas actualizadas:", selectedOptions);
  }, [selectedOptions]);

  return (
    <>
      {questions.map((question, index) => (
        <SelectQuestion
          key={question.id || index}
          questionText={question.text}
          options={question.options}
          questionIndex={index}
          selectedOption={selectedOptions[question.id]?.optionId?.toString() || ""}
          onSelectOption={(value) => {
            const selectedOptionObj = question.options.find(
              (opt) => opt.id === Number(value)
            );
            if (selectedOptionObj) {
              saveSelectedOption(
                question.id,
                selectedOptionObj.id,
                selectedOptionObj.is_correct
              );
            }
          }}
        />
      ))}
    </>
  );
};

export default ListSelectQuestion;

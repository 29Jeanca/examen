import SelectQuestion from "./SelectQuestion";

const ListSelectQuestion = ({ questions }) => {
    if (!questions || !Array.isArray(questions)) {
        return <p>Cargando preguntas...</p>; // O null si no quieres mostrar nada
    }

    return (
        <>
            {questions.map((question, index) => (
                <SelectQuestion
                    key={question.id || index}
                    questionText={question.text}
                    options={question.options}
                    questionIndex={index}
                    selectedOption={question.selectedOption}
                    onSelectOption={(value) => question.onSelectOption(value)}
                />
            ))}
        </>
    );
};

export default ListSelectQuestion;
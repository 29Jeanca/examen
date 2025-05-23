import { useEffect,useState } from "react";
import Header from "../components/Header";
import SelectQuestion from "../components/SelectQuestion";
import { getData } from "../../services/fetch";
import ListSelectQuestion from "../components/ListSelelectQuestion";
import "../styles/TestPage.css";
const TestPage = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
    document.title = localStorage.getItem('title') || 'Examen';
    const getQuestions = async () => {
        const response = await getData('tests/unique_test', localStorage.getItem('id_test'));
        if (response.ok) {
            setQuestions(response.data.questions);
        }
    }
    getQuestions();
    
}, []);
   
  return(
        <>
        <header>
            <Header test={localStorage.getItem('title') || 'Examen'} questionQuantity={10}/>
        </header>
       
        <main className="cont-main-questions">
           {questions.length === 0
  ? <p>Cargando preguntas...</p>
  : <ListSelectQuestion questions={questions} />
}

        </main>
        </>
    )
}
export default TestPage;
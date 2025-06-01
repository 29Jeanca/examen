// src/pages/ResultPage.js
import { Grid, Typography, Box, Paper } from "@mui/material";
import AnswerCard from "../components/AnswerCard";
import Header from "../../loginPage/Components/Header";
import Footer from "../../loginPage/Components/Footer";
import { useEffect, useState } from "react";
import { getUserAnswersByTest,getAnswersByTest } from "../../services/fetch";
const ResultPage = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const examName = localStorage.getItem("title_test") || "Examen";

  useEffect(() => {
    getUserAnswers()
    getTestAnswers()
  }, []);


   const getUserAnswers = async() => {
        const peticion = await getUserAnswersByTest(1,1)
        setUserAnswers(peticion)
        console.log("Respuestas del usuario:", peticion);
   } 

  const getTestAnswers = async() => {
    const peticion = await getAnswersByTest(1);
    const onlyCorrect = peticion.filter(answer => answer.is_correct=== true); 
    console.log("Respuestas del examen:", onlyCorrect);
    setCorrectAnswers(onlyCorrect);
   }
  return (
    <>
    <Header/>
    <Box sx={{ height: "90vh",  p: 3, bgcolor: "background.default",display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Resultados del examen: {examName}
      </Typography>
      <Grid container spacing={3} sx={{ height: "80%", mt: 2 }}>
        {/* Tus Respuestas */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: "100%", overflowY: "auto" }}>
            <Typography variant="h6" gutterBottom textAlign={"center"}> 
              Tus Respuestas
            </Typography>
            {userAnswers.map((answer, i) => (
              <AnswerCard
                key={i}
                text={`Pregunta ${i + 1}: ${answer.text_question}`}
                correct={answer.correct_answer[0]}
                option={answer.text_options[0].toUpperCase()}
              />
            ))}
          </Paper>
        </Grid>

        {/* Respuestas Correctas */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: "100%", overflowY: "auto" }}>
            <Typography variant="h6" gutterBottom textAlign={"center"}>
              Respuestas Correctas
            </Typography>
            {correctAnswers.map((answer, i) => (
              <AnswerCard key={i} text={`Pregunta ${i + 1}: ${answer.text_question}`} correct={answer.is_correct} option={answer.text.toUpperCase()} explanation=
              {answer.why_is_correct}/>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </>
  );
}

export default ResultPage

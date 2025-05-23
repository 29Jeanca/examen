import { Grid, Container } from '@mui/material';
import InfoCard from '../components/InfoCard';
import PracticeCard from '../components/PracticeCard';
import OpracticeCard from '../components/OpracticeCard';
import Header from '../../loginPage/Components/Header';
import Footer from '../../loginPage/Components/Footer';
import { useEffect,useState } from 'react';
import { getData } from '../../services/fetch';
const tips = [
  'Usa conectores como ∧ (y), ∨ (o), ¬ (no) para construir proposiciones.',
  'La tabla de verdad muestra todas las combinaciones posibles.',
  'Practica simplificando proposiciones compuestas.',
];

const PracticePage = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
     const getQuestions = async () =>{
        const response = await getData('practices/practice-cont')
        setQuestions(response.data);
      }
      getQuestions();
  },[])
  return (
    <>
    <Header/>
    <Container maxWidth="md" sx={{ py: 5 }}>
        
      {questions.map((question) =>{
          return(
            <PracticeCard
              key={question.i}
              title={question.text}
            />
          )
      })}  
      <PracticeCard
        title="Tema: Lógica Proposicional"
        description="Entiende el uso de conectores lógicos y tablas de verdad."
      />

      <OpracticeCard
        question="¿Cuál es la tabla de verdad de una conjunción?"
        explanation="Una conjunción (A ∧ B) solo es verdadera si ambas proposiciones A y B lo son."
      />

      <Grid container spacing={2} mt={3}>
        {tips.map((tip, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <InfoCard title={`Tip #${i + 1}`} content={tip} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <Footer />
    </>
  );
};

export default PracticePage;

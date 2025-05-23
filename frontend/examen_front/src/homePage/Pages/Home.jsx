import { useEffect,useState } from "react";
import Footer from "../../loginPage/Components/Footer";
import Header from "../../loginPage/Components/Header";
import CardTest from "../Components/CardTest";
import "../styles/Home.css";
import { getData } from "../../services/fetch";
import ListCardTest from "../Components/ListCardTest";
import ListPracticeCard from "../../pracPage/components/ListPracticeCard";
import ListCardPractice from "../../pracPage/components/ListCardPractice";

const Home = () => {
    const [data,setData] = useState([]);
    const [practice,setPractice] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const getTest = async () =>{
            const response = await getData('tests/tests')
            if(response.ok){
                setData(response.data);
                setLoading(false);
        }
        }
        const getPractice = async () =>{
            const response = await getData('practices/practice')
            if(response.ok){
                setPractice(response.data);
                setLoading(false);
        }
        }
        getPractice();
        getTest();
    },[])

    return (
        <>
        <header className="cont-header">
            <Header/>
        </header>
        <main>
            <h1 className="h1-text">Exámenes disponibles</h1>
        <section className="cont-main">
        
            {data.length === 0 && !loading && <p className="no-test">No hay exámenes disponibles</p>}

            {loading && <div className="loading">Cargando...</div>}
            
            <ListCardTest data={data}/>

        </section>
        <h2 className="h1-text">Prácticas disponibles</h2>
        <section className="cont-main">
                {practice.length === 0 && !loading && <p className="no-test">No hay prácticas disponibles</p>}
                <ListCardPractice data={practice}/>
        </section>

        
            </main>    


        <footer className="cont-footer">
            <Footer/>
        </footer>
        </>
    );
    }
export default Home;
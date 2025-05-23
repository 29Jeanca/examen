import { useEffect,useState } from "react";
import Footer from "../../loginPage/Components/Footer";
import Header from "../../loginPage/Components/Header";
import CardTest from "../Components/CardTest";
import "../styles/Home.css";
import { getData } from "../../services/fetch";
import ListCardTest from "../Components/ListCardTest";
const Home = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const getTest = async () =>{
            const response = await getData('tests/tests')
            if(response.ok){
                setData(response.data);
                setLoading(false);
        }
        }
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
            {loading && <div className="loading">Cargando...</div>}
            <ListCardTest data={data}/>
        </section>
            </main>    


        <footer className="cont-footer">
            <Footer/>
        </footer>
        </>
    );
    }
export default Home;
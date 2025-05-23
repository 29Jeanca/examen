import CardPractice from "./CardPractice";
import { useNavigate } from "react-router-dom";
const ListCardPractice = ({data}) => {
    const navigate = useNavigate();
    return(
        <>
            {data.map((item,index)=>{
                return(
                    <CardPractice
                        key={index}
                        title={item.title}
                        date_created={item.created_at}
                        img={item.image}
                        description={item.description}
                        click={()=>{
                            localStorage.setItem('id_practica',item.id)
                            navigate("/practica")
                        }}

                    />
                )
            })}
        </>
    )
}
export default ListCardPractice;
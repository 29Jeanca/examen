import CardTest from "./CardTest";
import { useNavigate } from "react-router-dom";
const ListCardTest = ({data}) => {
    const navigate = useNavigate();
    return(
        <>
            {data.map((item,index)=>{
                return(
                    <CardTest
                        key={index}
                        title={item.title}
                        date_created={item.created_at}
                        img={item.image}
                        description={item.description}
                        click={()=>{
                            localStorage.setItem('id_test',item.id)
                            navigate("/examen")
                        }}

                    />
                )
            })}
        </>
    )
}
export default ListCardTest;
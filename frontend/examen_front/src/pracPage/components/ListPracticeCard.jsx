import PracticeCard from "./PracticeCard";

const ListPracticeCard = ({ data }) => {
    return(
        <>
            {data.map((item)=>{
                return(
                    <PracticeCard
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        date_created={item.created_at}
                    />
                )
            })}
        </>
    )
}
export default ListPracticeCard;
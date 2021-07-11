const Card = ({title,img,val,description})=>{
    return(
        <div className = "Card">
            <div className = "image-container">
                <h1>{title}</h1>
                <img src = {img}></img>
            </div>
            <p className = {val > 100 ? "red" : "green"}>
                {description} {val}
            </p>
        </div>
    )
}
export default Card
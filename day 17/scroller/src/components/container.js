import Card from "./card"
const Container = ()=>{
    return(
        <div className = "card-container" >
            <Card title = "Pizza"  content = "You have consumed 169 cals today."/>
            <Card title = "Burger" content = "You have consumed 148 cals today."/>
            <Card title = "Lazania" content = "You have consumed 240 cals today."/>
            <Card title = "Schezwaan Noodles" content = "You have consumed 210 cals today."/>
            <Card title = "Hot Dog" content = "You have consumed 80 cals today."/>
            <Card title = "Cheese Nachos" content = "You have consumed 180 cals today."/>
        </div>
    )
}

export default Container
function Box(props){
    return(
        <div style={
            {"backgroundColor":props.background}
            }>
        <h1 style={{
            "color":props.color
        }}>{props.text}</h1>  
        </div>
    )
}
export default Box
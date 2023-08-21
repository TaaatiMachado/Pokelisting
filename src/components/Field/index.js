import './Field.css'

const Field = (props)=> {

    const onTyping = (event)=>{
        props.changeValue(event.target.value)
        //console.log(inputValue)
    }

    return (
        <div className={`field ${props.type}-field`}>
            <label>{props.label}</label>
            <input type={props.type} value={props.inputValue} placeholder={props.placeholder} required={props.req} onChange={onTyping}/>
        </div>
    )
}

export default Field;
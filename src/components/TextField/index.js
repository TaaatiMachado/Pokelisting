import './TextField.css'

const TextField = (props)=> {

    const onTyping = (event)=>{
        props.changeValue(event.target.value)
        //console.log(inputValue)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.inputValue} placeholder={props.placeholder} required={props.req} onChange={onTyping}/>
        </div>
    )
}

export default TextField;
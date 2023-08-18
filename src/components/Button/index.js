import './Button.css'

const Button = (props)=>{
    return(
        <button className='default-btn'>{props.children}</button>

    )
}

export default Button
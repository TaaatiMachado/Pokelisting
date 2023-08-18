import './Card.css'

const Card = (props) => {
    console.log('card aqui', props)
    return(
        <div className='card-wrapper'>
            <div className='card-header' style={{backgroundColor: props.color}}>
                <img src={props.img} alt={props.name}/>
            </div>
            <div className='card-body'>
                <img src={props.type1} alt={props.typeAlt}/>
                <img src={props.type2} alt={props.typeAlt}/>
                <h4>{props.name}</h4>
                <h5>{props.number}</h5>

            </div>
        </div>

    )
}

export default Card
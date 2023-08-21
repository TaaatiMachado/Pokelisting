import './Card.css'

const Card = (props) => {
    console.log(props)
    return(
        <div className='card-wrapper'>
            <div className='card-header ' style={{backgroundColor: props.color}}>
                <button className='card-delete' onClick={() => props.onDelete(props.id)}></button>
                <img src={props.img} alt={props.name}/>

            </div>
            <div className='card-body'>
                <img src={props.type1} alt='Type 1'/>
                <img src={props.type2} alt='Type 2'/>
                <h4>{props.name}</h4>
                <h5>#{props.number}</h5>

            </div>
        </div>

    )
}

export default Card
import Card from '../Card'
import './Team.css'
import hexToRgba from 'hex-to-rgba'

const Team = (props)=>{

    
    return (
        props.cards.length > 0 &&
        <>
        <section className='team-wrapper' style={{backgroundColor: hexToRgba(props.teamPrimColor, 0.4)}}>
            <h3 style={{borderColor: props.teamPrimColor}}>{props.teamName}</h3>
             <input type='color' className='color-input' value={props.teamPrimColor} onChange={event => props.colorChange(event.target.value, props.id)}/>            
            <div className='team-cards'>
            {props.cards.map(card => {
                let type1 = props.types.filter(type => type.name === card.type1)[0];
                let type2 = props.types.filter(type => type.name === card.type2)[0];
                console.log('types', type1, type2)
                return(
                    <Card id={card.id} name={card.name} number={card.number} img={card.img} key={card.name} color={props.teamPrimColor} type1={type1.imgUrl} type2={type2.imgUrl} onDelete={props.onDelete}/>
                )
            } )}
            </div>
        </section>
        </>
    )
}
export default Team
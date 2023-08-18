import Card from '../Card'
import './Team.css'

const Team = (props)=>{
    return (
        props.cards.length > 0 &&
        <section className='team-wrapper' style={{backgroundColor: props.teamSecColor}}>
            <h3 style={{borderColor: props.teamPrimColor}}>{props.teamName}</h3>
                        
            <div className='team-cards'>
            {props.cards.map(card => <Card name={card.name} number={card.number} img={card.img} key={card.name} color={props.teamPrimColor} type1={props.teamImg} type2={props.teamImg2}/> )}
            </div>
        </section>
    )
}
export default Team
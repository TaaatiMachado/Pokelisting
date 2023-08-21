import { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [teams, setTeams] = useState([
    {   
      id: uuidv4(),
      name:'My Dreamteam #1',
      primColor:'#57C278'
    } 
  ])

  const types =[
    { 
      id: uuidv4(),
      name:'Normal',
      imgUrl: 'https://archives.bulbagarden.net/media/upload/4/46/NormalIC_SM.png',
          },
    
    { 
      id: uuidv4(),
      name:'Fight',
      imgUrl: 'https://archives.bulbagarden.net/media/upload/a/a5/FightingIC_SM.png',
          },

    { 
      id: uuidv4(),
      name:'Flying',
      imgUrl:'https://archives.bulbagarden.net/media/upload/b/b1/FlyingIC_SM.png',
      
    },

    { 
      id: uuidv4(),
      name:'Poison',
      imgUrl:'https://archives.bulbagarden.net/media/upload/8/86/PoisonIC_SM.png',
          },

    { 
      id: uuidv4(),
      name:'Ground',
      imgUrl:'https://archives.bulbagarden.net/media/upload/c/c5/GroundIC_SM.png',
          },

    { 
      id: uuidv4(),
      name:'Rock',
      imgUrl:'https://archives.bulbagarden.net/media/upload/6/65/RockIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Bug',
      imgUrl:'https://archives.bulbagarden.net/media/upload/3/35/BugIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Ghost',
      imgUrl:'https://archives.bulbagarden.net/media/upload/2/2a/GhostIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Steel',
      imgUrl:'https://archives.bulbagarden.net/media/upload/b/be/SteelIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Fire',
      imgUrl:'https://archives.bulbagarden.net/media/upload/a/a9/FireIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Water',
      imgUrl:'https://archives.bulbagarden.net/media/upload/c/c3/WaterIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Grass',
      imgUrl:'https://archives.bulbagarden.net/media/upload/3/33/GrassIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Electric',
      imgUrl:'https://archives.bulbagarden.net/media/upload/5/58/ElectricIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Psychic',
      imgUrl:'https://archives.bulbagarden.net/media/upload/0/05/PsychicIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Ice',
      imgUrl:'https://archives.bulbagarden.net/media/upload/0/00/IceIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Dragon',
      imgUrl:'https://archives.bulbagarden.net/media/upload/d/db/DragonIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Dark',
      imgUrl:'https://archives.bulbagarden.net/media/upload/c/c8/DarkIC_SM.png',
      
    },

    {
      id: uuidv4(),
      name:'Fairy',
      imgUrl:'https://archives.bulbagarden.net/media/upload/2/25/FairyIC_SM.png',
      
    }
  ]

  const [cards, setCards] = useState([])
  const newCard = (card)=>{ 
    setCards([...cards, card])
  }
  
  const onCardDelete = (id)=> {
    console.log('Deletado')
    setCards(cards.filter(card => card.id !== id))
  }

  const changeTeamColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id){
        team.primColor = color;
      }
      return team
    }))
  }


  return (
    <div className="App">
      <Navbar/>
      <Form onCardCreation={card => newCard(card)} teams={teams.map(team => team.name)} types={types.map(type => type.name)}/>
      <h2 className='main-title'>My Teams</h2>
      {teams.map(team => <Team teamName={team.name} id={team.id} key={team.name} teamPrimColor={team.primColor} types={types} cards={cards.filter(card => card.team === team.name)} onDelete={onCardDelete} colorChange={changeTeamColor}/>)}
      </div>
  );
}

export default App;

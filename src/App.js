import { useState } from 'react';
import Form from './components/Form';
import Team from './components/Team';
import Navbar from './components/Navbar'

function App() {
  const teams = [
    { 
      name:'Normal',
      imgUrl: 'https://archives.bulbagarden.net/media/upload/4/46/NormalIC_SM.png',
      primColor:'#57C278',
      secColor:'#D9F7E9'
    },
    
    { 
      name:'Fight',
      imgUrl: 'https://archives.bulbagarden.net/media/upload/a/a5/FightingIC_SM.png',
      primColor:'#82CFFA',
      secColor:'#E8F8FF'
    },

    { 
      name:'Flying',
      imgUrl:'https://archives.bulbagarden.net/media/upload/b/b1/FlyingIC_SM.png',
      primColor:'#A6D157',
      secColor: '#F0F8E2'
    },

    { 
      name:'Poison',
      imgUrl:'https://archives.bulbagarden.net/media/upload/8/86/PoisonIC_SM.png',
      primColor:'#E06B69',
      secColor:'#FDE7E8'
    },

    { 
      name:'Ground',
      imgUrl:'https://archives.bulbagarden.net/media/upload/c/c5/GroundIC_SM.png',
      primColor:'#DB6EBF',
      secColor:'#FAE9F5'
    },

    { 
      name:'Rock',
      imgUrl:'https://archives.bulbagarden.net/media/upload/6/65/RockIC_SM.png',
      primColor:'#FFBA05',
      secColor: '#FFF5D9'
    },

    {
      name:'Bug',
      imgUrl:'https://archives.bulbagarden.net/media/upload/3/35/BugIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Ghost',
      imgUrl:'https://archives.bulbagarden.net/media/upload/2/2a/GhostIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Steel',
      imgUrl:'https://archives.bulbagarden.net/media/upload/b/be/SteelIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Fire',
      imgUrl:'https://archives.bulbagarden.net/media/upload/a/a9/FireIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Water',
      imgUrl:'https://archives.bulbagarden.net/media/upload/c/c3/WaterIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Grass',
      imgUrl:'https://archives.bulbagarden.net/media/upload/3/33/GrassIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Electric',
      imgUrl:'https://archives.bulbagarden.net/media/upload/5/58/ElectricIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Psychic',
      imgUrl:'https://archives.bulbagarden.net/media/upload/0/05/PsychicIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Ice',
      imgUrl:'https://archives.bulbagarden.net/media/upload/0/00/IceIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Dragon',
      imgUrl:'https://archives.bulbagarden.net/media/upload/d/db/DragonIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Dark',
      imgUrl:'https://archives.bulbagarden.net/media/upload/c/c8/DarkIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    },

    {
      name:'Fairy',
      imgUrl:'https://archives.bulbagarden.net/media/upload/2/25/FairyIC_SM.png',
      primColor:'#FF8A29',
      secColor: '#FFEEDF'
    }
  ]
  const [cards, setCards] = useState([])
  const newCard = (card)=>{ 
    setCards([...cards, card])
  }
  
  console.log(cards)

  return (
    <div className="App">
      <Navbar/>
      <Form onCardCreation={card => newCard(card)} teams={teams.map(team => team.name)}/>
      {teams.map(team => <Team teamName={team.name} key={team.name} teamPrimColor={team.primColor} teamSecColor={team.secColor} teamImg={team.imgUrl} cards={cards.filter(card => card.team === team.name)}/>)}
      </div>
  );
}

export default App;

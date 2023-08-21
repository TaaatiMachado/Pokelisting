import './Form.css'
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = (props)=> {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img, setImg] = useState('')
    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')
    const [team, setTeam] = useState('')
    const [id, setId] = useState(uuidv4());


    const savingForm = (event)=> {
        event.preventDefault();
        props.onCardCreation({
            name,
            number,
            img,
            type1, 
            type2,
            team,
            id
        })
        console.log('Foi!', name, number, img, type1, type2, team, id);

        setName('');
        setNumber('');
        setImg('');
        setType1('');
        setType2('');
        setTeam('');
        setId(uuidv4())
    }

    return(
        <section className='form'>
            <form onSubmit={savingForm}>
            <h2>Fill the data about your Pokémon.</h2>
            <TextField label='Name' placeholder='Add the name' req={true} inputValue={name} changeValue={inputValue => setName(inputValue)}/>
            <TextField label='Pokédex number' placeholder='Add the number' req={true} inputValue={number} changeValue={inputValue => setNumber(inputValue)}/>
            <TextField label='Pic' placeholder='Add the URL from your Pokémon picture' inputValue={img} changeValue={inputValue => setImg(inputValue)}/>
            <Dropdown itens={props.types} label='Type 1' req={true} value={type1} changeValue={inputValue => setType1(inputValue)} />
            <Dropdown itens={props.types} label='Type 2' req={false} value={type2} changeValue={inputValue => setType2(inputValue)} />            
            <Dropdown itens={props.teams} label='Team' req={false} value={team} changeValue={inputValue => setTeam(inputValue)} />
            <Button> I choose you! </Button>
            </form>
        </section>
    )
}

export default Form
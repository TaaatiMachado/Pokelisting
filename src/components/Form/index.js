import './Form.css'
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

const Form = (props)=> {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [img, setImg] = useState('')
    const [team, setTeam] = useState('')

    const savingForm = (event)=> {
        event.preventDefault();
        console.log('Foi!', name, number, img, team);
        props.onCardCreation({
            name,
            number,
            img,
            team, 
            
        })
        setName('');
        setNumber('');
        setImg('');
        setTeam('');

        


    }

    return(
        <section className='form'>
            <form onSubmit={savingForm}>
            <h2>Fill the data about your Pokémon.</h2>
            <TextField label='Name' placeholder='Add the name' req={true} inputValue={name} changeValue={inputValue => setName(inputValue)}/>
            <TextField label='Pokédex number' placeholder='Add the number' req={true} inputValue={number} changeValue={inputValue => setNumber(inputValue)}/>
            <TextField label='Pic' placeholder='Add the URL from your Pokémon picture' inputValue={img} changeValue={inputValue => setImg(inputValue)}/>
            <Dropdown itens={props.teams} label='Type' req={true} value={team} changeValue={inputValue => setTeam(inputValue)} />
            <Button> I choose you! </Button>
            </form>
        </section>
    )
}

export default Form
import './Dropdown.css'

const Dropdown = (props)=> {
  return (
    <div className='drop-list'>
        <label>{props.label}</label>
        <select required={props.req} onChange={event => props.changeValue(event.target.value)} value={props.value}>
            <option value=''></option>
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
  )

}

export default Dropdown
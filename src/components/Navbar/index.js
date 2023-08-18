import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar-wrapper'>
            <div className='nav-logo'>
                <img src='../Pokedex-small.webp' alt='Logo'/>
                <h1>PokéListing</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li> Item </li>
                    <li> Item </li>
                    <li> Item </li>
                    <li> Item </li>
                    <li> Item </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
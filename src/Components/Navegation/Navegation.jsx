import './nav.css';
import {Link} from 'react-router'


export default function Navegation(){
        return(
        <nav className='container-nav navbar navbar-expand-lg w-100 d-flex justify-content-between p-4'>
            <div className='container-fluid'>
                <h1><Link to="/" className='rick'>Rick & Morty</Link></h1>
                <div>
                    <div className='containerbutton col d-flex justify-content-end'>
                        <Link to="/Characters" className="btn botonchico">Characters</Link>
                        <Link to="/Contact" className="btn botonchico">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

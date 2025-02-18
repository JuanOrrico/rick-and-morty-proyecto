import { useState } from "react"
import './Card.css'

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)

    return(
        <div className='tarjeta card d-flex fit-content flex-row gap-2 border-dark p-2 rounded expandable-content justify-content-between align-items-center'>
            <div  className="d-flex row flex-column jusstify-content-center aling-items-center">
                <img src={personaje.image} className="i-card card-img-top"/>
                <h2 className=" text-center character-name">{personaje.name}</h2>
                <div className="d-flex flex-column justify-content-end align-items-end" >
            <button onClick={()=>setOcultar(false  )} className={ocultar?"boton-know-more d-block b-card btn-x-md d-flex align-self-end":"d-none"}>Know More</button>
            </div>
            </div>

            {ocultar ?'':
        <div className="contenedor-info rounded-2 d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center">
            <div className="cerrar d-flex justify-content-end">
              <button className="btn-list d-inblock rounded-2 border-0 m-2" onClick={()=>setOcultar(true)}>X</button>
            </div>
            <ul className="list">
              <li className="contenedor-item p-3 d-flex flex-column border-0">
                <p className="p-info text-white m-0 fw-bold">Character Status {personaje.status}</p>
              </li>
              <li className="contenedor-item p-3 d-flex flex-column border-0">
                <h4 className="h4-info m-0">Species</h4>
                <p className="p-info text-white fw-bold m-0">{personaje.species}</p>
              </li>
              <li className="contenedor-item p-3 d-flex flex-column border-0">
                <h4 className="h4-info m-0">Origin</h4>
                <p className="p-info text-white fw-bold m-0">{personaje.origin.name}</p>
              </li>
            <li className="contenedor-item p-3 d-flex flex-column border-0">
                <h4 className="h4-info m-0">Gender</h4>
                <p className="p-info text-white fw-bold m-0">{personaje.gender} </p>
              </li>
            </ul>
          </div>
        </div>}


        </div>
    )
}
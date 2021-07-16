import React, { Component } from 'react';
import './style_ajout_ens.css';

import {FaUserAlt,FaPhoneAlt,FaMoneyCheck} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import { IconContext } from 'react-icons/lib';
class Form extends Component {
    render() {
        return (
          <IconContext.Provider value={{ color: "White", size:"1.5em"}}>
          <div className="container">
  <form className="formAjoutEns">
    <div className="row">
      <div className="col-md-12">
      <h1 className="title text-center">Ajouter enseignant</h1>
      </div>
      </div>
    <div className="row">
  <div className="col-md-4">
  <div className="row">
      <label className="">Nom</label>
  </div>
  <div className='input-group'>
  <span className="input-group-prepend">
  <div class="input-group-text bg-transparent border-right-0">
    <FaUserAlt />
    </div>
    </span>
    <input type="text" className="form-control" placeholder="nom de l'enseignant" aria-label="Nom" />
  </div>

  
  <div className="row">
      <label className="">N Tel</label>
  </div>
  <div className='input-group'>
  <span className="input-group-prepend">
  <div class="input-group-text bg-transparent border-right-0">
    <FaPhoneAlt />
    </div>
    </span>
    <input type="text" className="form-control" placeholder="Telephone de l'enseignant" aria-label="Nom" />
  </div>
  <div className="row">
      <label className="">Salaire de base</label>
  </div>
  <div className='input-group'>
  <span className="input-group-prepend">
  <div class="input-group-text bg-transparent border-right-0">
    <FaMoneyCheck />
    </div>
    </span>
    <input type="text" className="form-control" placeholder="Salaire de base" aria-label="Nom" />
  </div>
  </div>
  <div className="col-md-4">
  <div className="row">
      <label className="">Prenom</label>
  </div>
  <div className='input-group'>
  <span className="input-group-prepend">
  <div class="input-group-text bg-transparent border-right-0">
    <FaUserAlt />
    </div>
    </span>
    <input type="text" className="form-control" placeholder="prenom de l'enseignant" aria-label="prenom" />
  </div>
  <div className="row">
      <label className="">Email</label>
  </div>
  <div className='input-group'>
  <span className="input-group-prepend">
  <div class="input-group-text bg-transparent border-right-0">
    <HiMail />
    </div>
    </span>
    <input type="text" className="form-control" placeholder="example@mail.com" aria-label="email" />
  </div>
  </div>
  <div className="col-sm-4">
<div className="row">
      <label className=""> <br></br></label>
  </div>
  <div className='input-group'>
    <input type="file" className="form-control" id="costumFile" />
  </div>
  </div>
  </div>
  </form>
  </div>
  </IconContext.Provider>
        );
    }
}

export default Form;
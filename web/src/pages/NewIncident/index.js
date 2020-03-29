import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(event){

        event.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            const response = await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            alert(`incident ${response.data.id} salvo com sucesso`);

            history.push('/profile');

        } catch (error) {
            alert('erro ao salvar o incident, try again...');
            
        }        
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para profile
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />

                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
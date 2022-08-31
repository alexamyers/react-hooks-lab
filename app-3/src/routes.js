import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import PokemonList from './components/PokemonList';

export default (
    <Routes>
        <Route path="/" element={<PokemonList/>} exact />
        <Route path="/pokemon/:name" element={<Pokemon/>} />
    </Routes>
)
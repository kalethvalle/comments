import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from '../components/header/header';
import { App } from '../App';
import { CreateComments } from '../views/create-comments/create-comments';

export const IndexRoute = () => {
    let location = useLocation();
    
    return (
        <div>
            <Header 
                title={
                    location.pathname.split('/')[2] === undefined 
                        ? 'listado de comentario' 
                        : location.pathname.split('/')[2] === 'creacion' 
                            ? 'creacion de comentarios' 
                            : 'edicion de comentarios'
                } 
            />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/comentarios/creacion" element={<CreateComments />} />
                <Route path="/comentarios/edicion/:id" element={<CreateComments />} />
            </Routes>
        </div>
    )
}
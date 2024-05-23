import { useState } from "react";
import { FormularioTarefa, ListaTarefas, } from "../../componentes";
import sytle from './Inicial.module.css';


const Inicial = () =>{
    return(
        <div className={sytle.Inicial}>
            <FormularioTarefa/>
            <ListaTarefas />
        </div>
    );
}

export {Inicial};
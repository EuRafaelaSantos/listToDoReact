import { useState } from 'react';
import { Botao, CampoTexto, Loading } from "../../componentes"
import style from './FormularioTarefa.module.css';
import { useAppContext } from '../../hooks';

const FormularioTarefa = () =>{
    const {adicionarTarefa, loadingCriar} = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');

    const onChangeNomeTarefa = (event) =>{
        setNomeTarefa(event.currentTarget.value);
    }

    const submeterFormulario= (event) => {
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }

        adicionarTarefa(nomeTarefa);

        setNomeTarefa('');

    }

    return(
        <>
            <form className={style.FormularioTarefa} onSubmit={submeterFormulario}>
                <CampoTexto 
                    value={nomeTarefa} 
                    onChange={onChangeNomeTarefa}
                />
                <Botao texto={loadingCriar ? <Loading/> : "Adicionar"}/>
            </form>
        </>
    )
}

export {FormularioTarefa}
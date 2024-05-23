import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO } from '../../Botao';
import {CampoTexto, Loading} from '../../../componentes';
import style from './Item.module.css';

const Item = (props) =>{
    const {id, nome} = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const {loadingEditar, loadingDeletar, editarTarefa, removerTarefa} = useAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id, nomeTarefa);

        setEstaEditando(false);
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return(
        <li className={style.Item}>
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto
                    defaultValue={nome} 
                    onBlur={onBlurTarefa}
                    autoFocus
                />
            )}

            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={()=>{setEstaEditando(true)}}> {nome}</span>
            )}

            {loadingEstaEditando && (
                <Loading/>
            )}

            <Botao 
                texto={loadingEstaDeletando ? <Loading/> : "Excluir"} 
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)}
            />
        </li>
    )
}

export {Item}
import { useAppContext } from "../../hooks";
import { Botao, TIPO_BOTAO } from "../Botao"
import { Loading } from "../Loading";
import { Item } from "./Item/Item"
import style from './ListaTarefas.module.css'

const ListaTarefas = () => {
    const {tarefas, loadingCarregar} = useAppContext();
    return(
        <ul className={style.ListaTarefas}>
            {loadingCarregar && (
                <p>
                    Carregando... 
                    <Loading/>
                </p>
            )}

            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas cadastradas...</p>
            )}

            {tarefas.map(item => 
                <Item 
                    key={item.id} 
                    id={item.id} 
                    nome={item.nome}
                />
            )}
        </ul>
    )
}

export {ListaTarefas}
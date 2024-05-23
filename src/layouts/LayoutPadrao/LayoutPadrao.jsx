import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../componentes";
import { useAppContext } from "../../hooks/useAppContext";

const LayoutPadrao = () => {
    const {criador} = useAppContext();
    return(
        <>
            <Cabecalho nomeUsuario={"Rafaela"}/>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape criador={criador}/>
        </>

    );
}

export {LayoutPadrao}
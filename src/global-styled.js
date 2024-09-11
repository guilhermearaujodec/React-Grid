import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Courier New', 'Courier New', Courier, monospace;
    }

    #root{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;             /* troca a direção padrão do display-flex (linhas) para colunas */
    }

`

export default GlobalStyled
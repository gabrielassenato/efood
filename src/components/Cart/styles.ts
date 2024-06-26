import styled from "styled-components"
import { cores } from "../../styles"
import fechar from '../../assets/images/excluir.png'

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const SideBar = styled.aside`
    background-color: ${cores.salmaoEscuro};
    z-index: 1;
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;

    ul {
        list-style: none;
    }

    button {
        background-color: ${cores.salmaoClaro};
        color: ${cores.salmaoEscuro};
        font-size: 14px;
    }
`

export const Prices = styled.p`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    color: ${cores.salmaoClaro};

    h3 {
        font-size: 14px;
        font-weight: bold;
    }
    
    span {
        font-size: 14px;
        font-weight: bold;
    }
`

export const CartItem = styled.li`
    position: relative;
    display: flex;
    background-color: ${cores.salmaoClaro};
    padding: 8px;
    margin-bottom: 16px;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        margin-left: 8px;
        margin-bottom: 16px;
        color: ${cores.salmaoEscuro};
    }

    span {
        font-size: 14px;
        margin-left: 8px;
        color: ${cores.salmaoEscuro};
    }

    button {
        background-image: url(${fechar});
        background-color: transparent;
        cursor: pointer;
        width: 16px;
        height: 16px;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
`
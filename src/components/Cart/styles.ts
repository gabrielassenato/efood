import styled from "styled-components"
import { colors } from "../../styles"
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
    background-color: ${colors.orange};
    z-index: 1;
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;

    ul {
        list-style: none;
    }

    button {
        background-color: ${colors.lightOrange};
        color: ${colors.orange};
        font-size: 14px;
    }

    .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.lightOrange};
    text-align: center;
    }
`

export const CartDetails = styled.div`
    display: block;
    
    &.is-closed {
        display: none;
    }

    button {
        background-color: ${colors.lightOrange};
        border: none;
        padding: 4px 0;
        width: 100%;
        cursor: pointer;
        color: ${colors.orange};
        font-size: 14px;
        font-weight: bold;
    }
`

export const Prices = styled.p`
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    color: ${colors.lightOrange};

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
    background-color: ${colors.lightOrange};
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
        color: ${colors.orange};
    }

    span {
        font-size: 14px;
        margin-left: 8px;
        color: ${colors.orange};
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

export const Form = styled.form`
    display: flex;
`

export const DeliveryDetails = styled.section`
    display: none;
    font-weight: bold;

    &.is-visible {
        display: block;
    }

    h2 {
        font-size: 16px;
        color: ${colors.lightOrange};
        margin-bottom: 16px;
    }

`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

export const InputGroup = styled.div`
    margin-top: 8px;
    font-size: 14px;

    label {
        color: ${colors.lightOrange};
    }
    input {
        display: flex;
        width: 100%;
        height: 32px;
        border: none;
        background-color: ${colors.lightOrange};
        margin-top: 8px;
        font-weight: bold;

        &.error {
            border: 3px solid red;
        }
    }
`

export const ButtonsGroup = styled.div`
    margin-top: 24px;

    Button {
        margin-bottom: 8px;
    }
`

export const PaymentDetails = styled.section`
    display: none;
    font-weight: bold;

    &.is-visible {
        display: block;
    }

    h2 {
        font-size: 16px;
        color: ${colors.lightOrange};
        margin-bottom: 16px;
    }
`

export const OrderDetails = styled.section`
    display: none;

    &.is-visible {
        display: block;
    }

    h2 {
        font-weight: bold;
        font-size: 16px;
        color: ${colors.lightOrange};
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        font-weight: light;
        color: ${colors.lightOrange};
    }
    
    button {
        margin-top: 24px;
    }
`



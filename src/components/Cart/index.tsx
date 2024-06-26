
import { CartContainer, CartItem, Overlay, Prices, SideBar } from "./styles"

import { Button } from "../Foods/styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from "../Foods"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <SideBar>
                <ul>
                    {items.map((item) => (
                        <CartItem key={item.id}>
                            <img src={item.foto} alt={item.nome} />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>R$ {item.preco}</span>
                            </div>
                            <button onClick={() => removeItem(item.id)} type="button" />
                        </CartItem>
                    ))}
                </ul>
                <Prices>
                    <h3>Valor total</h3> 
                    <span>
                        R$ {formataPreco(getTotalPrice())}
                    </span>
                </Prices>
                <Button>Continuar com a entrega</Button>
            </SideBar>
        </CartContainer>
    )
}

export default Cart
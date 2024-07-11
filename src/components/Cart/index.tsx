
import { CartContainer, CartDetails, CartItem, DeliveryDetails, Overlay, Prices, SideBar, Form, InputGroup, Row, ButtonsGroup, PaymentDetails, OrderDetails } from "./styles"

import { Button } from "../Foods/styles"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from "../Foods"
import { useState } from "react"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    
    const [deliveryDetails, setDeliveryDetails] = useState(false)

    const [cartDetails, setCartDetails] = useState(false)

    const [paymentsDetails, setPaymentsDetails] = useState(false)

    const [orderDetails, setOrderDetails] = useState(false)

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
                <CartDetails className={cartDetails ? 'is-closed' : ''}>
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
                    <Button type="button"
                    onClick={() => {
                    setDeliveryDetails(true)
                    setCartDetails(true)
                    }}>
                        Continuar com a entrega
                    </Button>
                </CartDetails>
                <Form>
                    <DeliveryDetails className={deliveryDetails ? 'is-visible' : ''}>
                        <h2>Entrega</h2>
                        <InputGroup>
                            <label htmlFor="">Quem irá receber</label>
                            <input type="text" />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="">Endereço</label>
                            <input type="text" />
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="">Cidade</label>
                            <input type="text" />
                        </InputGroup>
                        <Row>
                            <InputGroup>
                                <label htmlFor="">CEP</label>
                                <input type="text" />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="">Número</label>
                                <input type="text" />
                            </InputGroup>
                        </Row>
                        <InputGroup>
                            <label htmlFor="">Complemento (opcional)</label>
                            <input type="text" />
                        </InputGroup>
                        <ButtonsGroup>
                            <Button type="button"
                            onClick={() => {
                            setDeliveryDetails(false)
                            setCartDetails(true)
                            setPaymentsDetails(true)
                        }}>
                            Continuar com o pagamento
                            </Button>
                            <Button type="button"
                            onClick={() => {
                            setDeliveryDetails(false)
                            setCartDetails(false)
                        }}>
                            Voltar ao carrinho
                            </Button>
                        </ButtonsGroup>
                    </DeliveryDetails>
                </Form>
                <Form>
                    <PaymentDetails className={paymentsDetails ? 'is-visible' : ''}>
                        <h2>Pagamento - Valor a pagar R$ 190,90</h2>
                        <InputGroup>
                            <label htmlFor="">Nome no cartão</label>
                            <input type="text" />
                        </InputGroup>
                        <Row>
                            <InputGroup>
                                <label htmlFor="">Número do cartão</label>
                                <input type="text" />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="">CVV</label>
                                <input type="text" />
                            </InputGroup>
                        </Row>
                        <Row>
                            <InputGroup>
                                <label htmlFor="">Mês de vencimento</label>
                                <input type="text" />
                            </InputGroup>
                            <InputGroup>
                                <label htmlFor="">Ano de vencimento</label>
                                <input type="text" />
                            </InputGroup>
                        </Row>
                        <ButtonsGroup>
                            <Button type="button"
                            onClick={() => {
                            setOrderDetails(true)
                            setPaymentsDetails(false)
                        }}>
                            Finalizar pagamento
                            </Button>
                            <Button type="button"
                            onClick={() => {
                            setDeliveryDetails(true)
                            setCartDetails(true)
                            setPaymentsDetails(false)
                        }}>
                            Voltar para edição de endereço
                            </Button>
                        </ButtonsGroup>
                    </PaymentDetails>
                </Form>
                <OrderDetails className={orderDetails ? 'is-visible' : ''}>
                    <h2>Pedido realizado - 69</h2>
                    <p>
                    Estamos felizes em informar que seu pedido já está em processo
                    de preparação e, em breve, será entregue no endereço
                    fornecido.
                    <br />
                    <br />
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                    <br />
                    <br />
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                    <br />
                    <br />
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                    </p>
                    <Button type="button">
                        Concluir
                    </Button>
                </OrderDetails>
                
            </SideBar>
        </CartContainer>
    )
}

export default Cart
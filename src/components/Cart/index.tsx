import { useState } from "react"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from 'yup'

import { Button } from "../Foods/styles"

import { RootReducer } from "../../store"
import { clear, close, remove } from '../../store/reducers/cart'
import { parseToBrl } from "../../utils"
import { usePurchaseMutation } from "../../services/api"

import * as S from "./styles"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    
    const [deliveryDetails, setDeliveryDetails] = useState(false)
    const [cartDetails, setCartDetails] = useState(false)
    const [paymentsDetails, setPaymentsDetails] = useState(false)
    const [orderDetails, setOrderDetails] = useState(false)
    const [purchase, { isLoading, isError, isSuccess, data }] = usePurchaseMutation()

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

    const clearCart = () => {
        dispatch(clear())
        dispatch(close())
        setOrderDetails(false)
        setCartDetails(false)
    }

    const form = useFormik({
        initialValues: {
            fullName: '',
            adress: '',
            city: '',
            cep: '',
            number: '',
            complement: '',
            cardDisplayName: '',
            cardNumber: '',
            cardCode: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            adress: Yup.string()
                .required('O campo é obrigatório'),
            city: Yup.string()
                .required('O campo é obrigatório'),
            cep: Yup.string()
                .min(9, 'O campo precisa ter 9 caracteres')
                .max(9, 'O campo precisa ter 9 caracteres')
                .required('O campo é obrigatório'),
            number: Yup.number()
                .required('O campo é obrigatório'),
            complement: Yup.string(),
            cardDisplayName: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 caracteres')
                .required('O campo é obrigatório'),
            cardNumber: Yup.string()
                .min(16, 'O número do cartão precisa ter 16 caracteres')
                .max(16, 'O número do cartão precisa ter 16 caracteres')
                .required('O campo é obrigatório'),
            cardCode: Yup.string()
                .min(3, 'O CVV precisa ter 3 caracteres')
                .max(3, 'O CVV precisa ter 3 caracteres')
                .required('O campo é obrigatório'),
            expiresMonth: Yup.string()
                .min(2, 'O mês de expiração precisa ter 2 caracteres')
                .max(2, 'O mês de expiração precisa ter 2 caracteres')
                .required('O campo é obrigatório'),
            expiresYear: Yup.string()
                .min(4, 'O ano de expiração precisa ter 4 caracteres')
                .max(4, 'O ano de expiração precisa ter 4 caracteres')
                .required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            purchase({
                delivery: {
                    receiver: values.fullName,
                    address: {
                        description: values.adress,
                        city: values.city,
                        zipCode: values.cep,
                        number: Number(values.number),
                        complement: values.complement
                    }
                },
                payment: {
                    card: {
                        name: values.cardDisplayName,
                        number: values.cardNumber,
                        code: Number(values.cardCode),
                        expires: {
                            month: Number(values.expiresMonth),
                            year: Number(values.expiresYear)
                        }
                    }
                },
                products: [
                    {
                        id: 1,
                        price: getTotalPrice()
                    }
                ]
            })
        }
    })

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if (isTouched && isInvalid) return message
        return ''
    }

    const checkInputHasError = (fieldName: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.SideBar>
                {items.length > 0 ? (
                    <S.CartDetails className={cartDetails ? 'is-closed' : ''}>
                    <ul>
                        {items.map((item) => (
                            <S.CartItem key={item.id}>
                                <img src={item.foto} alt={item.nome} />
                                <div>
                                    <h3>{item.nome}</h3>
                                    <span>R$ {item.preco}</span>
                                </div>
                                <button onClick={() => removeItem(item.id)} type="button" />
                            </S.CartItem>
                        ))}
                    </ul>
                    <S.Prices>
                        <h3>Valor total</h3>
                        <span>
                            R$ {parseToBrl(getTotalPrice())}
                        </span>
                    </S.Prices>
                    <Button type="button"
                    onClick={() => {
                    setDeliveryDetails(true)
                    setCartDetails(true)
                    }}>
                        Continuar com a entrega
                    </Button>
                </S.CartDetails>
                ) : (
                    <p className="empty-text">
                        O carrinho está vazio, adicione pelo menos um produto para continuar
                        com a compra
                    </p>
                )}

                {isSuccess ? (
                    <S.OrderDetails className={orderDetails ? 'is-visible' : ''}>
                    <h2>Pedido realizado - {data.orderId}</h2>
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
                    <Button type="button" onClick={clearCart}>
                        Concluir
                    </Button>
                    </S.OrderDetails>
                ) : (
                    <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(e) }}>
                    <S.Form>
                        <S.DeliveryDetails className={deliveryDetails ? 'is-visible' : ''}>
                            <h2>Entrega</h2>
                            <S.InputGroup>
                                <label htmlFor="fullName">Quem irá receber</label>
                                <input type="text" id="fullName" name="fullName" value={form.values.fullName} onChange={form.handleChange}
                                className={checkInputHasError('fullName') ? 'error' : ''}
                                onBlur={form.handleBlur} />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="adress">Endereço</label>
                                <input type="text" id="adress" name="adress" value={form.values.adress} onChange={form.handleChange}
                                className={checkInputHasError('adress') ? 'error' : ''}
                                onBlur={form.handleBlur} />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="city">Cidade</label>
                                <input type="text" id="city" name="city" value={form.values.city} onChange={form.handleChange}
                                className={checkInputHasError('city') ? 'error' : ''}
                                onBlur={form.handleBlur} />
                            </S.InputGroup>
                            <S.Row>
                                <S.InputGroup>
                                    <label htmlFor="cep">CEP</label>
                                    <input type="text" id="cep" name="cep" value={form.values.cep} onChange={form.handleChange}
                                    className={checkInputHasError('cep') ? 'error' : ''}
                                    onBlur={form.handleBlur} />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="number">Número</label>
                                    <input type="text" id="number" name="number" value={form.values.number} onChange={form.handleChange}
                                    className={checkInputHasError('number') ? 'error' : ''}
                                    onBlur={form.handleBlur} />
                                </S.InputGroup>
                            </S.Row>
                            <S.InputGroup>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                <input type="text" id="complement" name="complement" value={form.values.complement} onChange={form.handleChange}
                                className={checkInputHasError('complement') ? 'error' : ''}
                                onBlur={form.handleBlur} />
                            </S.InputGroup>
                            <S.ButtonsGroup>
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
                            </S.ButtonsGroup>
                        </S.DeliveryDetails>
                    </S.Form>
                    <S.Form>
                        <S.PaymentDetails className={paymentsDetails ? 'is-visible' : ''}>
                            <h2>Pagamento - Valor a pagar R$ {parseToBrl(getTotalPrice())}</h2>
                            <S.InputGroup>
                                <label htmlFor="cardDisplayName">Nome no cartão</label>
                                <input type="text" id="cardDisplayName" name="cardDisplayName" value={form.values.cardDisplayName} onChange={form.handleChange}
                                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
                                onBlur={form.handleBlur} />
                            </S.InputGroup>
                            <S.Row>
                                <S.InputGroup>
                                    <label htmlFor="cardNumber">Número do cartão</label>
                                    <input type="text" id="cardNumber" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange}
                                    className={checkInputHasError('cardNumber') ? 'error' : ''}
                                    onBlur={form.handleBlur} />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="cardCode">CVV</label>
                                    <input type="text" id="cardCode" name="cardCode" value={form.values.cardCode} onChange={form.handleChange}
                                    className={checkInputHasError('cardCode') ? 'error' : ''}
                                    onBlur={form.handleBlur} />
                                </S.InputGroup>
                            </S.Row>
                            <S.Row>
                                <S.InputGroup>
                                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                                    <input type="text" id="expiresMonth" name="expiresMonth" value={form.values.expiresMonth} onChange={form.handleChange}
                                    className={checkInputHasError('expiresMonth') ? 'error' : ''}
                                    onBlur={form.handleBlur} />
                                </S.InputGroup>
                                <S.InputGroup>
                                    <label htmlFor="expiresYear">Ano de vencimento</label>
                                    <input type="text" id="expiresYear" name="expiresYear" value={form.values.expiresYear} onChange={form.handleChange}
                                    className={checkInputHasError('expiresYear') ? 'error' : ''}
                                    onBlur={form.handleBlur} />
                                </S.InputGroup>
                            </S.Row>
                            <S.ButtonsGroup>
                                <Button type="button"
                                onClick={() => {
                                form.handleSubmit()
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
                            </S.ButtonsGroup>
                        </S.PaymentDetails>
                    </S.Form>
                    </form>
                )}
            </S.SideBar>
        </S.CartContainer>
    )
}

export default Cart
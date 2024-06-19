
import { CartContainer, CartItem, Overlay, Prices, SideBar } from "./styles"

import massa from '../../assets/images/image1.png'
import { Button } from "../Foods/styles"

const Cart = () => (
    <CartContainer>
        <Overlay />
        <SideBar>
            <ul>
                <CartItem>
                    <img src={massa} />
                    <div>
                        <h3>Massa</h3>
                        <span>R$ 60,99</span>
                    </div>
                    <button type="button" />
                </CartItem>
            </ul>
            <Prices><h3>Valor total</h3> <span>R$ 199,69</span></Prices>
            <Button>Continuar com a entrega</Button>
        </SideBar>
    </CartContainer>
)

export default Cart
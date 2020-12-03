import React from 'react'
import { useReactiveVar } from '@apollo/react-hooks'
import { cartVar } from '../index'
import {
    FooterContainer,
    CartSubtotal,
    SubTotalPrice,
    CheckOutOptionsDiv,
    SubscriptionButton,
    CheckoutButton
} from '../styles/cartFooterStyles'




function CartFooter() {
    const cartItems = useReactiveVar(cartVar)
    const subTotal = cartItems.reduce((accumulator, item) => accumulator += item.amount, 0)


    return (
        <FooterContainer>
            <CartSubtotal>
                <span>Subtotal</span>
                    <SubTotalPrice>${subTotal}</SubTotalPrice>
            </CartSubtotal>

            <CheckOutOptionsDiv>
                <SubscriptionButton>make this a subscription (save 20%)</SubscriptionButton>

                <CheckoutButton>proceed to checkout</CheckoutButton>
            </CheckOutOptionsDiv>
        </FooterContainer>
    )
}

export default CartFooter
import React from 'react'
import { CartDiv } from '../styles/lumins'
import Currency from './Currency'
import CartFooter from './CartFooter';
import { useReactiveVar } from '@apollo/react-hooks'
import {
    CartTop,
    MinimizeIconDiv,
    CartHeaderDiv,
    CartHeaderText,
    CartMinimize,
    CurrencyDivStyles,
    CartItemContainer,
    CartItemList,
    CartItemBody,
    ItemDescription,
    ItemImageDiv,
    ItemImage,
    CartItemTitle,
    DeleteButton,
    CartQuantity,
    CartQuantitySelector,
    CartItemQuantity,
    CartQuantityDecrease,
    CartQuantityIncrease,
    CartItemPrice
} from '../styles/cartStyles'
import { cartVar } from '../index'



function Cart(props) {

    const cartItems = useReactiveVar(cartVar)

    return (
        <CartDiv>
            <CartTop >
                <MinimizeIconDiv onClick={() => props.hideCart() } >
                    <CartMinimize> &gt; </CartMinimize>
                </MinimizeIconDiv>

                <CartHeaderDiv>
                    <CartHeaderText>your cart</CartHeaderText>
                </CartHeaderDiv>

                <CartHeaderDiv></CartHeaderDiv>
            </CartTop>

            <CurrencyDivStyles >
                <Currency />
            </CurrencyDivStyles>

            <CartItemContainer>
                <CartItemList>
                    {cartItems.length === 0 ? (
                        <p>No items in your cart</p>
                    ) : (
                            cartItems.map(({ id, title, price, image_url }) => {
                            return (
                                <CartItemBody id={id} key={id} >
                                    <DeleteButton>x</DeleteButton>

                                    <ItemDescription>
                                        <CartItemTitle>{title}</CartItemTitle>

                                        <CartQuantity>
                                            <CartQuantitySelector>
                                                <CartQuantityDecrease>-</CartQuantityDecrease>

                                                <CartItemQuantity>1</CartItemQuantity>

                                                <CartQuantityIncrease>+</CartQuantityIncrease>
                                            </CartQuantitySelector>

                                            <CartItemPrice>${price}</CartItemPrice>
                                        </CartQuantity>
                                    </ItemDescription>

                                    <ItemImageDiv>
                                        <ItemImage src={image_url} />
                                    </ItemImageDiv>
                                </CartItemBody>
                            )
                        }))
                    }
                </CartItemList>
            </CartItemContainer>

            <CartFooter />
        </CartDiv>
    )
}

export default Cart
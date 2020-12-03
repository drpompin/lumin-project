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

    const increaseItemQty = (id) => {
        // get a quote of all cart items
        const addedItems = cartVar()

        // find the newly added item by id
        const addedItem = addedItems.find(item => item.id === id)

        // increase newly added item quantity and price
        addedItem.qty += 1
        addedItem.amount = addedItem.price * addedItem.qty

        cartVar([...cartVar()])
    }

    const decreaseItemQty = (id) => {
        const addedItems = cartVar()
        const addedItem = addedItems.find(item => item.id === id)

        if (addedItem.qty === 1) {
            deleteItem(id)
        } else {
            addedItem.qty -= 1
            addedItem.amount -= addedItem.price

            cartVar([...cartVar()])
        }
    }

    const deleteItem = (id) => {
        const cartList = [...cartVar()]
        cartVar(cartList.filter(item => item.id !== id))
    }

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
                            cartItems.map(({ id, title, price, image_url, qty, amount }) => {
                            return (
                                <CartItemBody id={id} key={id} >
                                    <DeleteButton
                                        onClick={() => deleteItem(id)}
                                    >x</DeleteButton>

                                    <ItemDescription>
                                        <CartItemTitle>{title}</CartItemTitle>

                                        <CartQuantity>
                                            <CartQuantitySelector>
                                                <CartQuantityDecrease
                                                    onClick={() => decreaseItemQty(id)}
                                                >
                                                    -
                                                </CartQuantityDecrease>

                                                <CartItemQuantity>{Number(qty)} </CartItemQuantity>

                                                <CartQuantityIncrease
                                                    onClick={() => increaseItemQty(id)}
                                                >
                                                    +
                                                </CartQuantityIncrease>
                                            </CartQuantitySelector>

                                            <CartItemPrice>${amount}</CartItemPrice>
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
import React, { Component } from 'react'
import styled from 'styled-components';

export const CartItemBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    min-height: inherit;
    max-height: inherit;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
    background: #fff;
`

const ItemDescription = styled.div`
    color: #1e2d2b;
    width: 65%;
    /* line-height: 18px; */
    font-size: 10px;
    padding: 15px 13px 13px 21px;
    letter-spacing: 0.02px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemImageDiv = styled.div`
    background-color: #fdfdfd;
    /* display: flex; */
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    color: #1e2d2b;
    width: 33.3%;
    padding-right: 15px;
`

const ItemImage = styled.img`
    overflow: hidden;
    height: 80px;
    width: auto;
    object-fit: contain;
    max-width: 100%;
    display: block;
    /* vertical-align: middle; */
`


const CartItemTitle = styled.h6`
    color: #1e2d2b;
    margin-bottom: 0;
    font-size: 13px;
    letter-spacing: 0.03px;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
`

const DeleteButton = styled.span`
    position: absolute;
    right: 10px;
    top: 5px;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    line-height: 1;
`

const CartQuantity = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

const CartQuantitySelector = styled.div`
    border: 0.5px solid #bcbcbc;
    padding: 7px;
    width: 76px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`

const CartItemQuantity = styled.span`
    padding: 0 10px;
    font-size: 13px;
`

const CartQuantityDecrease = styled.div`
    cursor: pointer;
    color: #000;
    font-size: 15px;
`

const CartQuantityIncrease = styled.div`
    cursor: pointer;
    color: #000;
    font-size: 15px;
`

const CartItemPrice = styled.div`
    float: right;
    padding: 0 10px;
    width: inherit;
    font-size: 13px;
    letter-spacing: 0.03px;
`



class CartItem extends Component {
    render() {
        return (
            <CartItemBody>
                <DeleteButton>x</DeleteButton>

                <ItemDescription>
                    <CartItemTitle>item title</CartItemTitle>

                    <CartQuantity>
                        <CartQuantitySelector>
                            <CartQuantityDecrease>-</CartQuantityDecrease>

                            <CartItemQuantity>1</CartItemQuantity>
                            
                            <CartQuantityIncrease>+</CartQuantityIncrease>
                        </CartQuantitySelector>

                        <CartItemPrice>$123</CartItemPrice>
                    </CartQuantity>
                </ItemDescription>

                <ItemImageDiv>
                    <ItemImage />
                </ItemImageDiv>
            </CartItemBody>
        )
    }
}

export default CartItem
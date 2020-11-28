import React, { Component } from 'react'
import { CartDiv } from '../snippets/lumins'
import Currency from './Currency'
import styled from 'styled-components';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const CartTop = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const MinimizeIconDiv = styled.div`
    flex: 1;
    width: 33.3%;
    display: flex;
    /* -webkit-box-pack: center;
    -webkit-box-align: center; */
    align-items: center;
    padding-top: 20px;
    justify-content: flex-start;
`

const CartHeaderDiv = styled.div`
    -webkit-box-flex: 1;
    flex: 1;
    width: 33.3%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 20px;
`

const CartHeaderText = styled.h5`
    text-transform: uppercase;
    color: #696969;
    font-weight: 400;
    letter-spacing: 1px;
    font-style: normal;
    font-size: 10px;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.2;
`

const CartMinimize = styled.span`
    border-radius: 50%;
    border: 1px solid rgb(198, 204, 199);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 20px;
    font-weight: 900;
`

const CurrencyDivStyles = styled.div`
    margin: 10px 20px 0;
`

export const CartItemContainer = styled.div`
    padding: 0 20px;
    margin: 5px 0;
    /* -webkit-box-flex: 1; */
    /* flex: 1; */
    overflow-y: auto;
    height: calc(100vh - 305px);
`

const CartItemList = styled.div`
    margin-top: 10px;
`


class Cart extends Component {

    render () {
        // const showCart = this.props.showCart;
        // console.log('showcart====', showCart);

        return (
            <CartDiv>
                <CartTop >
                    <MinimizeIconDiv onClick={() => this.props.hideCart() } >
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
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </CartItemList>
                </CartItemContainer>

                <CartFooter />
            </CartDiv>
        )
    }
}

export default Cart
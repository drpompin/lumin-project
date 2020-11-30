import styled, { keyframes, css } from "styled-components";


export const CartTop = styled.div`
    display: flex;
    margin-bottom: 10px;
`

export const MinimizeIconDiv = styled.div`
    flex: 1;
    width: 33.3%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    justify-content: flex-start;
`

export const CartHeaderDiv = styled.div`
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

export const CartHeaderText = styled.h5`
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

export const CartMinimize = styled.span`
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

export const CurrencyDivStyles = styled.div`
    margin: 10px 20px 0;
`

export const CartItemContainer = styled.div`
    padding: 0 20px;
    margin: 5px 0;
    overflow-y: auto;
    height: calc(100vh - 305px);
`

export const CartItemList = styled.div`
    margin-top: 10px;
`

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

export const ItemDescription = styled.div`
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

export const ItemImageDiv = styled.div`
    background-color: #fdfdfd;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1e2d2b;
    width: 33.3%;
    padding-right: 15px;
`

export const ItemImage = styled.img`
    overflow: hidden;
    height: 60px;
    width: auto;
    object-fit: contain;
    max-width: 100%;
    display: block;
    width: 50;
    /* vertical-align: middle; */
`

export const CartItemTitle = styled.h6`
    color: #1e2d2b;
    margin-bottom: 0;
    font-size: 13px;
    letter-spacing: 0.03px;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
`

export const DeleteButton = styled.span`
    position: absolute;
    right: 10px;
    top: 5px;
    color: #000;
    font-weight: 500;
    cursor: pointer;
    line-height: 1;
`

export const CartQuantity = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const CartQuantitySelector = styled.div`
    border: 0.5px solid #bcbcbc;
    padding: 7px;
    width: 76px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`

export const CartItemQuantity = styled.span`
    padding: 0 10px;
    font-size: 13px;
`

export const CartQuantityDecrease = styled.div`
    cursor: pointer;
    color: #000;
    font-size: 15px;
`

export const CartQuantityIncrease = styled.div`
    cursor: pointer;
    color: #000;
    font-size: 15px;
`

export const CartItemPrice = styled.div`
    float: right;
    padding: 0 10px;
    width: inherit;
    font-size: 13px;
    letter-spacing: 0.03px;
`

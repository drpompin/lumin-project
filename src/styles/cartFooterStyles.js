import styled from 'styled-components'

export const FooterContainer = styled.div`
    border-top: 1px solid #d0d0d0;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1;
    padding: 0 20px 30px;
`

export const CartSubtotal = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 0 solid #6e7b70;
    border-top: none;
`

export const SubTotalPrice = styled.span`
    display: flex;
    justify-content: 'flex-end';
`

export const CheckOutOptionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

export const SubscriptionButton = styled.button`
    font-size: 12px;
    font-weight: 400;
    padding: 16px 20px;
    text-align: center;
    text-decoration: none;
    color: #2b2e2b;
    letter-spacing: 0.96px;
    border: 1px solid #2b2e2b;
    background-color: #fff;
    text-transform: uppercase;
    cursor: pointer;
`

export const CheckoutButton = styled.button`
    color: #fff;
    letter-spacing: 2px;
    background-color: #4b5548;
    border: none;
    margin-top: 15px;
    font-size: 12px;
    font-weight: 400;
    padding: 16px 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
`

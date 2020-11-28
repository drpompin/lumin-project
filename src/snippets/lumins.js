import styled, { keyframes, css } from "styled-components";

const size = {
    tablet: '768px',
}

const device = {
    tablet: `(max-width: ${size.tablet})`,
}

export const BaseDiv = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: relative;
`

export const ProductHeader = styled.div`
    width: 100%;
    padding: 5rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 3rem;
    line-height: 1.25em;
`

export const HeaderText = styled.p`
    margin: 0;
    padding: 0;
    margin-top: 0.75rem;
    font-size: 1.0rem;
    line-height: 1.5;
`

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #e2e6e3;
    padding: 0 3rem;

    @media ${device.tablet} {
        padding: 0
    }
    /* min-height: fit-content */
`
export const ProductCard = styled.div`
    width: calc(100%/3);
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    background: #e2e6e3;
    align-items: center;

    @media ${device.tablet} {
        width: 50%;
    }
`

export const ProductCardInner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 210px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`

export const ProductImage = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 170px;
    height: auto;
    display: block;
    /* vertical-align: middle; */
    flex: 1 1 0%;
`

export const ProductTitle = styled.h2`
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    letter-spacing: -1px;
`

export const ProductPrice = styled.div`
    margin-top: 0.5rem;
    margin-left: 0rem;
    display: inline-flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`

export const ProductPriceTitle = styled.span`
    font-size: 1rem;
    line-height: 1.5;
    margin-left: 0rem;
    margin-right: 0.25rem;
`

export const ProductPriceAmount = styled.span`
    font-size: 1.0rem;
    line-height: 1.5;
`

export const CardButton = styled.button`
    margin-top: 0.5rem;
    margin-left: 0rem;
    display: flex;
    appearance: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 250ms ease 0s;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    border: 0px;
    line-height: 1.2;
    padding-top: 2px;
    font-weight: 600;
    font-family: "FF Bau Regular", sans-serif;
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 52px;
    background: rgb(75, 85, 72);
    color: rgb(252, 252, 249);
    width: 100%;
    max-width: 190px;
    cursor: pointer;
`

export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
`

export const CartDiv = styled.form`
    transform: translateX(0);
    opacity: 1;
    position: fixed;
    top: 0;
    background-color: #f2f2ef;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: auto;
    max-width: 550px;
    width: 100%;
    z-index: 1500;
    transition: transform 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86), opacity 0.4s ease-in-out 0.1s, -webkit-transform 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86);
    left: auto;
    right: 0;
`
// export default {size, device}
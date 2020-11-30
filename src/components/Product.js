import React, { Component } from 'react'
import { 
    CardButton, 
    ProductCard, 
    ProductCardInner, 
    ProductImage, 
    ProductPrice, 
    ProductPriceAmount, 
    ProductPriceTitle, 
    ProductTitle 
} from '../styles/lumins'


const Product = (props) => {
    
    console.log('product in product', props)
    const BackgroundImage = props.product.image_url

    return (
        <ProductCard>
            <ProductCardInner>
                <ProductImage
                    src={BackgroundImage}
                />

                <ProductTitle>{props.product.title}</ProductTitle>
            </ProductCardInner>

            <ProductPrice>
                <ProductPriceTitle>From: </ProductPriceTitle>
                <ProductPriceAmount>${props.product.price}</ProductPriceAmount>
            </ProductPrice>
            
            <CardButton onClick={
                    () => props.showCart()
                    // () => props.addToCart()
                } 
            >Add to Cart</CardButton>
        </ProductCard>
    )
}


export default Product
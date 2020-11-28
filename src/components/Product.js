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
} from '../snippets/lumins'


class Product extends Component {
    

    
    render () {
        console.log('product in product', this.props)
        // const { product } = {} || this.props.product
        const BackgroundImage = this.props.product.image_url


        return (
            <ProductCard>
                <ProductCardInner>
                    <ProductImage
                        src={BackgroundImage}
                        // style={{
                        //     backgroundImage: `url(${BackgroundImage})`
                        // }}
                     />

                    <ProductTitle>{this.props.product.title}</ProductTitle>
                </ProductCardInner>

                <ProductPrice>
                    <ProductPriceTitle>From: </ProductPriceTitle>
                    <ProductPriceAmount>${this.props.product.price}</ProductPriceAmount>
                </ProductPrice>
                
                <CardButton onClick={() => this.props.showCart()} >Add to Cart</CardButton>
                
                
                
            </ProductCard>
        )
    }
}


export default Product
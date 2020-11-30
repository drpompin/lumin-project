import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
// import { useReactiveVar } from '@apollo/react-hooks'

import {
	BaseDiv,
	HeaderTitle,
	HeaderText,
	ProductHeader,
	ProductsContainer,
	Modal,
	CardButton,
	ProductCard,
	ProductCardInner,
	ProductImage,
	ProductPrice,
	ProductPriceAmount,
	ProductPriceTitle,
	ProductTitle
} from '../styles/lumins'
import Cart from '../components/Cart'
import { cartVar } from '../index'

const GET_ALL_PRODUCTS = gql`
	{
		products {
			id
			title
			image_url
			price(currency: USD)
		}
	}
`

function ProductsPage() {
	// const cartItems = useReactiveVar(cartVar)

	const [state, setState] = useState(false)

	const showCart = () => {
		console.log('Showcart function working')
		setState(true)
	}

	const hideCart = () => {
		setState(false)
	}

	

	// const addToCart = (item) => {
	// 	cartVar({ ...cartVar(), item });
	// };

	// const increaseQty = (id) => {
	// 	const qty = cartVar()[id].qty + 1;
	// 	cartVar({ ...cartVar(), [id]: { ...cartVar().id, qty } });
	// };

	// const handleCartOperation = ({ id, title, image_url, price }) => {
	// 		cartItems[id]
	// 		? increaseQty(id)
	// 		: addToCart({ id, title, qty: 1, price, image_url });
	// };

	// products.map(({ id, title, img, price }) => (
	// 	<button onClick={handleCartOperation({ id, title, img, price })}>
	// 		Add to cart
	// 	</button>
	// ));




	const { data, loading, error } = useQuery(GET_ALL_PRODUCTS)
	if (loading) return <h4>Loading...</h4>
	if (error) console.log(error)

	return (
		<>
			<BaseDiv>
				<ProductHeader>
					<HeaderTitle>
						All Products
								</HeaderTitle>

					<HeaderText>
						A 360° look at Lumin
								</HeaderText>
				</ProductHeader>

				<ProductsContainer>
					{
						data && data.products.map(({ id, title, price, image_url }) => {
							return (
								<ProductCard>
									<ProductCardInner>
										<ProductImage
											src={image_url}
										/>

										<ProductTitle>{title}</ProductTitle>
									</ProductCardInner>

									<ProductPrice>
										<ProductPriceTitle>From: </ProductPriceTitle>
										<ProductPriceAmount>${price}</ProductPriceAmount>
									</ProductPrice>

									<CardButton onClick={() => {
										showCart()
										// handleCartOperation({ id, title, price, image_url })
										cartVar([...cartVar(), { id, title, price, image_url }])
									}}>
										Add to Cart
									</CardButton>
								</ProductCard>
							)
						})
					}
				</ProductsContainer>

				{
					state &&
					(<>
						<Modal />

						<Cart
							hideCart={hideCart}
						// cart={this.state.cart} 
						// onDelete={this.handleDelete}
						/>
					</>)

				}
			</BaseDiv>
		</>
	)
}


export default ProductsPage
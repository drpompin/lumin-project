import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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

	const [state, setState] = useState(false)

	const showCart = () => {
		setState(true)
	}

	const hideCart = () => {
		setState(false)
	}

	const addToCart = (product) => {
		const addedItems = cartVar()

		// equate added item to a constant addedItem
		const addedItem = addedItems.find(item => item.id === product.id)
		console.log('addedItem===', addedItem)
		console.log('addedItems===', addedItems)

		// Check if item has already been added to the cart,
		if (addedItem) {
			// If item has already been added to the cart, increase the item qty and item amount
			product.qty += 1
			product.amount = product.qty * product.price

			cartVar([...cartVar()])
		} else {
			// If item doesn't yet exist in the cart, se item qty to 1 and item amount = default item price
			product.qty = 1
			product.amount = product.price
			cartVar([...cartVar(), product])
		}
		
		const itemList = cartVar();
		console.log('itemList===', itemList)
	}


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
						data && data.products.map(product => {
							return (
								<ProductCard id={product.id} key={product.id}>
									<ProductCardInner>
										<ProductImage
											src={product.image_url}
										/>

										<ProductTitle>{product.title}</ProductTitle>
									</ProductCardInner>

									<ProductPrice>
										<ProductPriceTitle>From: </ProductPriceTitle>
										<ProductPriceAmount>${product.price}</ProductPriceAmount>
									</ProductPrice>

									<CardButton onClick={() => {
										showCart()
										addToCart(product)
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
						/>
					</>)

				}
			</BaseDiv>
		</>
	)
}


export default ProductsPage
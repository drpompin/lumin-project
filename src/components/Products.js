import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { 
	BaseDiv, 
	HeaderTitle,
	HeaderText, 
	ProductHeader,
	ProductsContainer,
	Modal
} from '../snippets/lumins'
import Product from './Product'
import Cart from './Cart'

const GET_ALL_ProductsPage = gql`
	{
		products {
			id
			title
			image_url
			price(currency: USD)
		}
	}
`

class ProductsPage extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		showcart: true
	// 	}
	// 	this.showCart = this.showCart.bind(this)
	// }

	// showCart = () => {
	// 	this.setState(prevState => ({
	// 		showcart: !prevState.showcart,
	// 	}));
	// }

	state = {
		showcart: false
	}

	showCart = () => {
		this.setState({
			showcart: true
		})
	}

	hideCart = () => {
		this.setState({
			showcart: false
		})
	}


	render() {

		console.log('showcart==', this.state.showcart)

		return (
			<Query query={GET_ALL_ProductsPage}>
				{({ loading, error, data }) => {
					if (loading) return <h4>Loading</h4>
					if (error) console.log(error)

					console.log('ProductsPage data', data)
					const { products } = data

					return (
						<BaseDiv>
							{/* <ul>
								{products.map(product => {
									return (
										<li>
											{product.title}, {product.price}
										</li>
									)
								})}
							</ul> */}

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
									products.map( (product, index) => {
										return (
											<Product 
												product={product} 
												key={product.id} 
												index={index}
												showCart={this.showCart}
											/>
										)
									})
								}
							</ProductsContainer>

							{
								this.state.showcart 
								&&
								<Modal>
									<Cart hideCart={this.hideCart} />
								</Modal>
							}
						</BaseDiv>
					)
				}}
			</Query>
		)
	}
}
	

export default ProductsPage
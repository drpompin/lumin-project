import React from 'react';
import { ApolloClient } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import ProductsPage from './components/Products';
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-boost'


const httpLink = new HttpLink({ uri: 'https://pangaea-interviews.now.sh/api/graphql' })

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: ''
		}
	}
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache()
})

const App = () => {
	return (
		<ApolloProvider client={client}>
			<ProductsPage />
		</ApolloProvider>
	);
}

export default App;
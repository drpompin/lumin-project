import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './styles/index.css';
import App from './App';
import { makeVar } from '@apollo/react-hooks'


export const cartVar = makeVar([])

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


const cache = new InMemoryCache()


const client = new ApolloClient({
	cache,
	link: link,
})


ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

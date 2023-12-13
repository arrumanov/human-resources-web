import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, NormalizedCacheObject, ApolloProvider, InMemoryCache, createHttpLink} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import App from './app/App'
import './index.css'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_HTTP_LINK_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${keycloak?.token ?? ''}`
    }
  }
});

// инициализация ApolloClient
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(), //Apollo Client использует для кэширования результатов запроса после их получения
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactKeycloakProvider authClient={keycloak}>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </ReactKeycloakProvider>,
)

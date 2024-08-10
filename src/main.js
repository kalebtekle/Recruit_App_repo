// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';


const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:8000/graphql/',
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const pinia = createPinia();
const app = createApp(App).use(pinia);
app.provide(DefaultApolloClient, apolloClient); // Provide ApolloClient directly
app.use(router);
app.mount('#app');

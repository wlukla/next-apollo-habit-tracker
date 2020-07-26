import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';

const isDev = process.env.NODE_ENV !== 'production';
const BASE_URL = isDev
  ? 'http://localhost:3000'
  : 'https://next-apollo-habit-tracker.vercel.app';

const initApolloClient = (initialState = {}) => {
  const cache = new InMemoryCache().restore(initialState);

  const client = new ApolloClient({
    uri: `${BASE_URL}/api/graphql`,
    cache,
  });

  return client;
};

const withApollo = (PageComponent) => {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState);

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  WithApollo.getInitialProps = async (ctx) => {
    const { AppTree } = ctx;

    const apolloClient = (ctx.apolloClient = initApolloClient());

    let pageProps = {};

    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // if server
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import('@apollo/react-ssr');

        await getDataFromTree(
          <AppTree pageProps={{ ...pageProps, apolloClient }} />,
        );
      } catch (err) {
        console.error(err);
      }

      Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();

    return {
      ...pageProps,
      apolloState,
    };
  };

  return WithApollo;
};

export default withApollo;

import {TerraWebappProvider} from '@arthuryeti/terra';
import {
  getChainOptions,
  StaticWalletProvider,
  useWallet,
  WalletControllerChainOptions,
  WalletProvider,
  WalletStatus,
} from '@terra-money/wallet-provider';
import type {AppProps} from 'next/app';
import App from 'next/app';
import React from 'react';
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query';

function MyApp({
  Component,
  pageProps,
  defaultNetwork,
  walletConnectChainIds,
}: AppProps & WalletControllerChainOptions) {
  const [queryClient] = React.useState(() => new QueryClient());

  return typeof window !== 'undefined' ? (
    <WalletProvider defaultNetwork={defaultNetwork} walletConnectChainIds={walletConnectChainIds}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <Hydrate state={pageProps.dehydratedState}>
          <MyAppContent Component={Component} pageProps={pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={defaultNetwork}>
      <Component {...pageProps} />
    </StaticWalletProvider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);
  const chainOptions = await getChainOptions();
  return {
    ...appProps,
    ...chainOptions,
  };
};

const MyAppContent = ({Component, pageProps}) => {
  const wallet = useWallet();
  const isInitializing = wallet.status === WalletStatus.INITIALIZING;

  return !isInitializing ? (
    <TerraWebappProvider>
      <Component {...pageProps} />
    </TerraWebappProvider>
  ) : (
    <></>
  );
};

export default MyApp;

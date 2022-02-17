import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {
  getChainOptions,
  StaticWalletProvider,
  WalletControllerChainOptions,
  WalletProvider,
} from '@terra-money/wallet-provider';
import {TerraWebappProvider} from '@arthuryeti/terra';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        <TerraWebappProvider>
          <Component {...pageProps} />
        </TerraWebappProvider>
      </QueryClientProvider>
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={defaultNetwork}>
      <Component {...pageProps} />
    </StaticWalletProvider>
  );
}

MyApp.getInitialProps = async () => {
  const chainOptions = await getChainOptions();
  return {
    ...chainOptions,
  };
};

export default MyApp;

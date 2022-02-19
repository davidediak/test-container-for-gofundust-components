import type {NextPage} from 'next';
import {ContributeToFund} from '@gofundust/components';
import {TerraWebappProvider} from '@arthuryeti/terra';
import {useWallet, WalletStatus, WalletProvider} from '@terra-money/wallet-provider';
import TerraWallet from '../components/TerraWallet';
import {Global} from '@emotion/react';

const Home: NextPage = () => {
  return (
    <>
          <TerraWallet />
          <Component></Component>
      
    </>
  );
};

const Component = () => {
  const wallet = useWallet();
  return (
    <>
      <ContributeToFund
        fundAddress="terra1xtqzqdw0vlg3933fq73nuwvsaruyry0n4up6fc"
        wallet={wallet}
      />
    </>
  );
};

export default Home;

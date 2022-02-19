import {ContributeToFund} from '@gofundust/components';
import type {NextPage} from 'next';
import TerraWallet from '../components/TerraWallet';

const Home: NextPage = () => {
  return (
    <>
      <TerraWallet />
      <Component></Component>
    </>
  );
};

const Component = () => {
  return <ContributeToFund fundAddress="terra1xtqzqdw0vlg3933fq73nuwvsaruyry0n4up6fc" />;
};

export default Home;

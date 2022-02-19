import {useWallet, WalletStatus} from '@terra-money/wallet-provider';
import React, {FC} from 'react';

const TerraWallet: FC = () => {
  const {connect, disconnect} = useWallet();
  const {status} = useWallet();

  if (status === WalletStatus.WALLET_CONNECTED) {
    return (
      <>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <div>connected</div>
          <button
        onClick={() => {
          disconnect();
        }}>
        Click here to disconnect wallet
      </button>
        </div>
      </>
    );
  }

  if (status === WalletStatus.WALLET_NOT_CONNECTED) {
    return (
      <button
        onClick={() => {
          connect();
        }}>
        Click here to connect wallet
      </button>
    );
  }

  return <div>INITIALIZING</div>;
};

export default TerraWallet;

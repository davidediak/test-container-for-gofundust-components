import React, { FC } from "react";
import { detect } from "detect-browser";
import { Extension } from "@terra-money/terra.js";
import {
  useWallet,
  WalletStatus,
  useInstallChromeExtension,
  useConnectedWallet,
} from "@terra-money/wallet-provider";


import { Link, Text, HStack, chakra, useDisclosure } from "@chakra-ui/react";
import ConnectWalletModal from './modals/ConnectWalletModal';


const TerraWallet: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { status } = useWallet();

  if (status === WalletStatus.WALLET_CONNECTED) {
    return <div> connected</div>
  }

  return (
    <>
      <ConnectWalletModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TerraWallet;

import React, { FC } from "react";
import { useWallet, ConnectType } from "@terra-money/wallet-provider";
import { Text, HStack, Flex, chakra } from "@chakra-ui/react";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ConnectWalletModal: FC<Props> = ({ isOpen, onClose }) => {
  const { connect } = useWallet();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect to a wallet">
      <Flex
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
      >
        <chakra.button
          transition="0.2s all"
          p="6"
          borderRadius="xl"
          bg="brand.purple"
          color="white"
          width="100%"
          mb="4"
          _hover={{
            bg: "white",
            color: "brand.dark",
          }}
          onClick={() => {
            onClose();
            connect(ConnectType.EXTENSION);
          }}
        >
          <HStack justify="space-between">
            <Text>Terra Station Extension</Text>
          </HStack>
        </chakra.button>
        <chakra.button
          transition="0.2s all"
          p="6"
          borderRadius="xl"
          bg="brand.purple"
          color="white"
          width="100%"
          _hover={{
            bg: "white",
            color: "brand.dark",
          }}
          onClick={() => {
            onClose();
            connect(ConnectType.WALLETCONNECT);
          }}
        >
          <HStack justify="space-between">
            <Text>Terra Station Mobile</Text>
          </HStack>
        </chakra.button>
      </Flex>
    </Modal>
  );
};

export default ConnectWalletModal;

import React from "react";
import {
  ConnectWallet,
  // Other imported components
} from "@thirdweb-dev/react";
import "../styles/wallet.module.css"; // Import your custom CSS file

const CustomWallet = () => {
  return (
    <div className="custom-wallet-container">
      <ConnectWallet
        // Props for the wallet component
      />
    </div>
  );
};

export default CustomWallet;
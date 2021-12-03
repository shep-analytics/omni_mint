import React from "react";
import style from "./style.module.css";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";
import Web3 from "web3";

import { tokenABI } from "../contracts/ABIs";
import { tokenAddress } from "../contracts/contractAddress";

import mint from "../imgs/mint.png";
import logo from "../imgs/logo.jpg"

import { ethers } from "ethers";

const PreSale = () => {
  const [omniContract, setOmniContract] = useState(null);
  const [account, setAccount] = useState(null);
  //const [preSaleAmount, setPreSaleAmount] = useState(1000);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      await window.ethereum.enable();

      const account = await web3.eth.getAccounts();
      console.log(account);
      setAccount(account[0]);

      const contract = new web3.eth.Contract(tokenABI, tokenAddress);
      setOmniContract(contract);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const web3 = window.web3;

      const account = await web3.eth.getAccounts();
      console.log(account);
      setAccount(account[0]);

      const contract = new web3.eth.Contract(tokenABI, tokenAddress);
      setOmniContract(contract);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const BuyToken = async (numberOfTokens) => {
    const web3 = window.web3;
    const contract = new web3.eth.Contract(tokenABI, tokenAddress);
    setOmniContract(contract);

    console.log(account);

    
    let tokenTransaction;
    let tokenId = null;
    let transactionData;
    let tokenIdArray = [];
    if (numberOfTokens === 1) {
      tokenTransaction = await contract.methods.presaleMintItems(1).send({
        from: account,
        gas: 3000000,
        value: web3.utils.toWei("0.04", "ether"),
      });
      console.log(tokenABI);

      tokenId = JSON.parse(JSON.stringify(tokenTransaction))["events"][
        "Transfer"
      ]["returnValues"];

      document.getElementById("mint").classList.add("active-bear");
    }

    if (tokenId !== null) window.alert("Token ID: " + JSON.stringify(tokenId));
    else window.alert("Token IDS: " + JSON.stringify(tokenIdArray));
    // await updatePreSale();
  };

  return (
    <>
      <div className={style.wrap}>
        <div className={style.header_logo}>
          <img className={style.logo_img} src={logo} alt="logo" />
        </div>
        <div className={style.body_wrapper}>
          <h1 style={{ textAlign: "center" }}>MINT YOUR OMNI</h1>
          <h2 style={{ textAlign: "center" }}>HOW MANY OMNIS DO YOU WANT?</h2>
          <div className={style.gridWrap}>
            <div className={style.grid}>
              <div className={style.img}>
                <a>
                  <img
                    src={mint}
                    alt="img"
                    onClick={() => BuyToken(1)}
                    className={[style.polar_img, "bear-select"].join(" ")}
                    id="mint"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className={style.address} style={{ textAlign: "center" }}>
            YOUR ADDRESS:{account}
          </p>
          <div style={{ textAlign: "center" }}>
            <div className={style.wallet_btn}>
              <Button onClick={loadWeb3}>CONNECT WALLET</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSale;

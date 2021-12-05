import React from "react";
import style from "./style.module.css";
import { useEffect,useState } from "react";
//import Background from '../imgs/goddess.jpeg';
import Background from '../imgs/logo.jpg';
import header_picture from '../imgs/header_picture.png'


import "bootstrap/dist/css/bootstrap.min.css";

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


import { Button } from "react-bootstrap";
import Web3 from "web3";

import { tokenABI } from "../contracts/ABIs";
import { tokenAddress } from "../contracts/contractAddress";

import mint from "../imgs/mint.png";
import omni_text from "../imgs/writing.png"
import logo from "../imgs/logo.jpg"

//import { ethers } from "ethers";

const PreSale = () => {
  const [omniContract,setOmniContract] = useState(null);
  const [account, setAccount] = useState(null);

  var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: "url(" + Background + ")"
      };

  var price = 0.05;

  const [numOmnis,setValue]=useState('1');

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
    }
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

    var cost = price * numberOfTokens;
    
    let tokenTransaction;
    let tokenId = null;
//    let transactionData;
    let tokenIdArray = [];

    tokenTransaction = await contract.methods.presaleMintItems(numberOfTokens).send({
      from: account,
//      gas: 3000000,
      value: web3.utils.toWei(cost.toString(), "ether"),
    });
    console.log(tokenABI);

    tokenId = JSON.parse(JSON.stringify(tokenTransaction))["events"][
      "Transfer"
    ]["returnValues"];

    document.getElementById("mint").classList.add("active-bear");


    if (tokenId !== null) window.alert("Token ID: " + JSON.stringify(tokenId));
    else window.alert("Token IDS: " + JSON.stringify(tokenIdArray));
    // await updatePreSale();
  };

  return (





  );
};

export default PreSale;

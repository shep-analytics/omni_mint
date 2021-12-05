import React from "react";
import style from "./style.module.css";
import { useEffect,useState } from "react";
//import Background from '../imgs/goddess.jpeg';
import Background from '../imgs/logo.jpg';

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

      <body className="background"
                                    style={{

                                      backgroundImage: `url(${Background})`,
                                      backgroundPosition: 'center',
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      width: '100vw',
                                      height: '100vh'
                                    }} >

            <h1 style={{ textAlign: "center", color:'white',
            textshadow:{
                        color:'white',
                        paddingLeft:30,
                        paddingRight:30,
                        textShadowColor:'black',
                        textShadowOffset:{width: 5, height: 5},
                        textShadowRadius:10,
                      },


             }}>MINT YOUR OMNI</h1>
            <h2 style={{ textAlign: "center", color:'white' }}>HOW MANY OMNIS DO YOU WANT?</h2>
     
            <DropdownButton
             style={{ textAlign: "center" }}
             title={numOmnis}
             id="dropdown-menu"
             onSelect={handleSelect}
            >
                    <Dropdown.Item eventKey="1">1</Dropdown.Item>
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="3">3</Dropdown.Item>
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    <Dropdown.Item eventKey="5">5</Dropdown.Item>
                    <Dropdown.Item eventKey="6">6</Dropdown.Item>
                    <Dropdown.Item eventKey="7">7</Dropdown.Item>
                    <Dropdown.Item eventKey="8">8</Dropdown.Item>
                    <Dropdown.Item eventKey="9">9</Dropdown.Item>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
            </DropdownButton>

            <h2 style={{ textAlign: "center" }}></h2>

            <div style={{ textAlign: "center" }}>
              <a>
                <img
                  src={mint}
                  alt="img"
                  onClick={() => BuyToken(numOmnis)}
                  width="300" 
                  height="100"
                  id="mint"

                />
              </a>
            </div>


            <div style={{ textAlign: "center" }}>
                <img
                  src={omni_text}
                  alt="img"
                  width="1000" 
                  height="200"
                  id="mint"

                />
            </div>

          <p className={style.address} style={{ textAlign: "center" }}>
            YOUR ADDRESS:{account}
          </p>
          <div style={{ textAlign: "center" }}>
            <div className={style.wallet_btn}>
              <Button onClick={loadWeb3}>CONNECT WALLET</Button>
            </div>
          </div>>

      </body>



  );
};

export default PreSale;

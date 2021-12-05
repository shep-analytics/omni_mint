      <body className="background"
                                    style={{
                                      backgroundColor: 'black',
                                      backgroundPosition: 'center',
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',

                                    }} >

            <h1 style={{ textAlign: "center" }}>MINT YOUR OMNI</h1>
            <h2 style={{ textAlign: "center" }}>HOW MANY OMNIS DO YOU WANT?</h2>
     
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

          <h2 style={{ textAlign: "center" }}>OMNIS ARE 0.05 ETH EACH</h2>
          <h3 style={{ textAlign: "center" }}>(Reminder: every 2 mints gets you one FREE female NFT from our next collection)</h3>
          <h3 style={{ textAlign: "center" }}>Breeding info coming soon</h3>


          <p className={style.address} style={{ textAlign: "center" }}>
            YOUR ADDRESS:{account}
          </p>
          <div style={{ textAlign: "center" }}>
            <div className={style.wallet_btn}>
              <Button onClick={loadWeb3}>CONNECT WALLET</Button>
            </div>
          </div>
      </body>




                          <h2 style={{ textAlign: "center",  color:'white'}}>OMNIS ARE 0.05 ETH EACH</h2>
          <h3 style={{ textAlign: "center",  color:'white' }}>(Reminder: every 2 mints gets you one FREE female NFT from our next collection)</h3>
          <h3 style={{ textAlign: "center",  color:'white' }}>Breeding info coming soon!</h3>
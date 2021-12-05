      <body className="background"
                                    style={{

                                      backgroundImage: `url(${Background})`,
                                      backgroundPosition: 'center',
                                      backgroundSize: 'cover',
                                      backgroundRepeat: 'no-repeat',
                                      width: '100vw',
                                      height: '100vh'
                                    }} >


            <div style={{ textAlign: "center" }}>
                <img
                  src={header_picture}
                  alt="img"
                  width="1000" 
                  height="200"
                  id="mint"

                />
            </div>
     
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
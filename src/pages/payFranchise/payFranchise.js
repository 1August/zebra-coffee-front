import React from "react";

import convert from "crypto-convert";

import { ethers } from "ethers";
import { mockConfigInteract } from "../../web3/smartcontracts";
import { onConnect } from "../../web3";

import { Button } from "../../UI/Button/Button";

import "./payFranchise.sass";

const PayFranchise = () => {
    const login = async () => {
        await onConnect().then((data) => {
            mockConfigInteract().then(async (res) => {
                const user = JSON.parse(localStorage.getItem("userAccount"));
                await convert.ready();

                let ETHPrice = convert.ETH.USD(1);
                let value = 20000000 / (470 * ETHPrice);

                let converted = ethers.utils.parseUnits(
                    value.toFixed(6).toString(),
                    "ether"
                );

                const result = await res.methods
                    .send_ETH("0xd1d0A2cB7080b8A52031a0a97DC7DDcf49A83b0d")
                    .send({
                        from: user.account,
                        gasPrice: "20000000000",
                        value: converted,
                    });

                if (result.status) {
                    // postOrder();
                    // setPayed(true);
                }
            });
        });
    };

    return (
        <div className="pay-franchise">
            <div className="container">
                <Button onClick={() => login()}>Оплатить ETH</Button>
            </div>
        </div>
    );
};

export default PayFranchise;

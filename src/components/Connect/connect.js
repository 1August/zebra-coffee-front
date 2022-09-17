import React from "react";
import { Button } from "../../UI/Button/Button";
import convert from "crypto-convert";

import { onConnect, onDisconnect } from "../../web3/index";
import { myContractConfigInteract } from "../../web3/smartcontracts";

export const Connect = () => {
    const login = async () => {
        await onConnect().then((data) => {
            console.log(data);
        });
    };

    const interact = async () => {
        myContractConfigInteract().then(async (res) => {
            await convert.ready();
            console.log(convert.ETH.USD(1));

            await res.methods
                .send_ETH("0xd1d0A2cB7080b8A52031a0a97DC7DDcf49A83b0d")
                .send({
                    from: "0x4678eAB475842a91957ba0952A4684514770A124",
                    gasPrice: "20000000000",
                    value: "10000000000000000",
                });
        });
    };

    return (
        <div>
            <Button onClick={async () => await login()}>connect</Button>
            <Button onClick={async () => await interact()}>connect</Button>
        </div>
    );
};

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Testing DotaAmazingItem contract", function () {
  let contract;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSinger();
    const DotaAmazingItem = await ethers.getDotaAmazingItemFactory(
      "DotaAmazingItem"
    );
    contract = await DotaAmazingItem.deploy();
    await contract.deployed();
  });

  describe("Should check about item information", function () {
    it("Should create and emit an item correctly", async function () {
      const cnt = await contract.items.length();

      //create testing value
      const name = "Vanguard";
      const desc =
        "This item should protects you from other player's attacking.";
      const itemTpye = 1;
      const imgUrl = "";
      const price = 100;
      const itemInfo = [
        {
          ability: "protects user",
          effect: "user has a fire wall",
          unit: "percent",
          value: 20,
        },
      ];

      await expect(
        contract.createItem(name, desc, itemTpye, imgUrl, price, itemInfo)
      )
        .to.emit(contract, "createdItem")
        .withArgs(cnt, name, desc, itemTpye, imgUrl, price, itemInfo);

      const item = await contract.items(cnt);

      expect(item.id).to.equal(cnt);
      expect(item.name).to.equal(name);
      expect(item.desc).to.equal(desc);
      expect(item.itemTpye).to.equal(itemTpye);
      expect(item.price).to.equal(price);
      expect(item.itemInfo.length).to.equal(itemInfo.length());
    });
  });
});

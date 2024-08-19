const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Testing DotaAmazingItem contract", function () {
  let contract, owner;

  beforeEach(async function () {
    const DotaAmazingItem = await ethers.getContractFactory("DotaAmazingItem");
    [owner] = await ethers.getSigners();
    contract = await DotaAmazingItem.deploy();
  });

  describe("Should check about an item information", function () {
    it("Should mint an item correctly", async function () {
      //mint testing value
      const name = "Vanguard";
      const desc =
        "This item should protects you from other player's attacking.";
      const level = 1;
      const imgUrl = "#";
      const price = 100;
      const itemInfo = [
        {
          ability: "protects user",
          effect: "user has a fire wall",
          unit: "percent",
          value: 20,
        },
      ];

      //mint testing item
      await contract.mintItem(name, desc, level, imgUrl, price, itemInfo);

      //fetch the saved data
      const [
        savedId,
        savedName,
        savedDesc,
        savedLevel,
        savedImgUrl,
        savedPrice,
        savedItemInfo,
      ] = await contract.getItem(0);

      //show the fetching data
      // console.log(savedId.toString());
      // console.log(savedName);
      // console.log(savedDesc);
      // console.log(savedLevel.toString());
      // console.log(savedImgUrl);
      // console.log(savedPrice.toString());
      // console.log(savedItemInfo);

      //check the saved item
      expect(savedId).to.equal(0);
      expect(savedName).to.equal(name);
      expect(savedDesc).to.equal(desc);
      expect(savedLevel).to.equal(level);
      expect(savedImgUrl).to.equal(imgUrl);
      expect(savedPrice).to.equal(price);

      for (let i = 0; i < itemInfo.length; i++) {
        expect(savedItemInfo[i].ability).to.equal(itemInfo[0].ability);
        expect(savedItemInfo[i].effect).to.equal(itemInfo[0].effect);
        expect(savedItemInfo[i].unit).to.equal(itemInfo[0].unit);
        expect(savedItemInfo[i].value.toString()).to.equal(
          itemInfo[0].value.toString()
        );
      }
    });

    it("Should assign the minted token to the owner", async function () {
      //mint testing value
      const name = "Vanguard";
      const desc =
        "This item should protects you from other player's attacking.";
      const level = 1;
      const imgUrl = "#";
      const price = 100;
      const itemInfo = [
        {
          ability: "protects user",
          effect: "user has a fire wall",
          unit: "percent",
          value: 20,
        },
      ];

      await contract.mintItem(name, desc, level, imgUrl, price, itemInfo);

      const tokenOwner = await contract.ownerOf(0);
      expect(tokenOwner).to.equal(owner.address);
    });

    it("Should check the tokenId correctly", async function () {
      //mint testing value
      const name1 = "Vanguard";
      const name2 = "shield";
      const desc =
        "This item should protects you from other player's attacking.";
      const level = 1;
      const imgUrl = "#";
      const price = 100;
      const itemInfo = [
        {
          ability: "protects user",
          effect: "user has a fire wall",
          unit: "percent",
          value: 20,
        },
      ];

      //add two item in items
      await contract.mintItem(name1, desc, level, imgUrl, price, itemInfo);
      await contract.mintItem(name2, desc, level, imgUrl, price, itemInfo);

      //fetch the items
      item1 = await contract.getItem(0);
      item2 = await contract.getItem(1);

      //check the data
      expect(item1.name).to.equal(name1);
      expect(item2.name).to.equal(name2);
    });
  });
});

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DotaAmazingItem is ERC721, Ownable {
    struct ItemInformation {
        string ability;
        string effect;
    }

    struct Item {
        uint256 id;
        string name;
        string desc;
        string imgUrl;
        uint256 price;
        ItemInformation[] informations;
    }

    uint256 private _currentTokenId;

    mapping(uint256 => bool) private _tokenExists;
    mapping(uint256 => address) private _itemToOwner;

    Item[] public items;

    event createdItem(
        uint256 _id,
        string _name,
        string _desc,
        string _imgUrl,
        uint256 _price,
        ItemInformation[] _informations
    );

    constructor() ERC721("GameItems", "Token") Ownable(msg.sender) {
        _currentTokenId = 0;
    }

    function createItem(
        string memory _name,
        string memory _desc,
        string memory _imgUrl,
        uint256 _price,
        ItemInformation[] memory _informations
    ) external onlyOwner {
        uint256 tokenId = _currentTokenId;
        _currentTokenId++;

        Item memory newItem = Item({
            id: tokenId,
            name: _name,
            desc: _desc,
            imgUrl: _imgUrl,
            price: _price,
            informations: _informations
        });

        items.push(newItem);
        _tokenExists[tokenId] = true;
        _itemToOwner[tokenId] = msg.sender;

        emit createdItem(tokenId, _name, _desc, _imgUrl, _price, _informations);
    }
}

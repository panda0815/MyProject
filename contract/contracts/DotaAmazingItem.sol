// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DotaAmazingItem is ERC721, Ownable {
    struct ItemInformation {
        string ability;
        string effect;
        string unit;
        uint256 value;
    }

    struct Item {
        uint256 id;
        string name;
        string desc;
        uint16 itemType;
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
        uint16 _itemType,
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
        uint16 _itemType,
        string memory _imgUrl,
        uint256 _price,
        ItemInformation[] memory _informations
    ) external onlyOwner {
        uint256 tokenId = _currentTokenId;
        _currentTokenId++;

        items.push();
        Item storage newItem = items[items.length - 1];
        newItem.id = tokenId;
        newItem.name = _name;
        newItem.imgUrl = _imgUrl;
        newItem.price = _price;
        for (uint256 i = 0; i < _informations.length; i++) {
            newItem.informations.push(_informations[i]);
        }

        _tokenExists[tokenId] = true;
        _itemToOwner[tokenId] = msg.sender;

        emit createdItem(
            tokenId,
            _name,
            _desc,
            _itemType,
            _imgUrl,
            _price,
            _informations
        );
    }
}

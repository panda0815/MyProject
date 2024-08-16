// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DotaAmazingItem is ERC721, Ownable {
    struct itemInformation {
        string ability;
        string effect;
    }

    struct item {
        uint256 id;
        string name;
        string imgUrl;
        uint256 price;
        itemInformation[] informations;
    }

    uint256 private _currentTokenId;

    mapping(uint256 => bool) private _tokenExists;
    mapping(uint256 => address) private _itemToOwner;

    item[] public items;

    event createdItem(item _newItem);

    constructor() ERC721("GameItems", "Token") Ownable(msg.sender) {
        _currentTokenId = 0;
    }

    function createItem(
        string memory _name,
        string memory _imgUrl,
        uint256 _price,
        itemInformation[] memory _informations
    ) external onlyOwner {
        uint256 tokenId = _currentTokenId;
        _currentTokenId++;

        item memory newItem = item({
            id: tokenId,
            name: _name,
            imgUrl: _imgUrl,
            price: _price,
            informations: _informations
        });

        items.push(newItem);
        _tokenExists[tokenId] = true;
        _itemToOwner[tokenId] = msg.sender;

        emit createdItem(newItem);
    }
}

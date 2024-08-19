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
        uint16 level;
        string imgUrl;
        uint256 price;
        ItemInformation[] informations;
    }

    uint256 private _currentTokenId;

    mapping(uint256 => bool) private _tokenExists;
    mapping(uint256 => address) private _itemToOwner;

    Item[] public items;

    event mintedItem(
        uint256 _tokenId,
        string _name,
        string _desc,
        uint16 _level,
        string _imgUrl,
        uint256 _price,
        ItemInformation[] _informations
    );

    constructor() ERC721("DotaAmazingItem", "Token") Ownable(msg.sender) {
        _currentTokenId = 0;
    }

    function mintItem(
        string memory _name,
        string memory _desc,
        uint16 _level,
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
        newItem.desc = _desc;
        newItem.level = _level;
        newItem.imgUrl = _imgUrl;
        newItem.price = _price;

        delete newItem.informations;
        for (uint256 i = 0; i < _informations.length; i++) {
            newItem.informations.push(_informations[i]);
        }

        _tokenExists[tokenId] = true;
        _itemToOwner[tokenId] = msg.sender;

        _mint(msg.sender, tokenId);

        emit mintedItem(
            tokenId,
            _name,
            _desc,
            _level,
            _imgUrl,
            _price,
            _informations
        );
    }

    function getItem(
        uint256 _tokenId
    )
        public
        view
        returns (
            uint256 id,
            string memory name,
            string memory desc,
            uint16 level,
            string memory imgUrl,
            uint256 price,
            ItemInformation[] memory informations
        )
    {
        require(_tokenExists[_tokenId], "This token does not exist");
        Item storage item = items[_tokenId];
        return (
            item.id,
            item.name,
            item.desc,
            item.level,
            item.imgUrl,
            item.price,
            item.informations
        );
    }
}

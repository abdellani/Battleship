/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\nconst domManager = () => {\n  const playerBoard = document.getElementById('player-board')\n  const compBoard = document.getElementById('comp-board')\n\n\n  const startTheGame = document.getElementById('start-button')\n  const playerName = document.getElementById('player-name')\n  const boardSize = document.getElementById('inputFieldSize')\n  const numOfShips = document.getElementById('inputNumberOfShips')\n  const playerForm = document.getElementById('player-container')\n  const boardLoad = document.getElementById('board-container')\n  const addShipGrid = document.getElementById('add-ships')\n  const addShipBoard = document.getElementById('add-ship-board')\n\n  let player;\n  startTheGame.addEventListener('click', () => {\n    player = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerName.value)\n    player.initiate(boardSize.value, boardSize.value)\n    initialize(boardSize.value)\n    playerForm.classList.add('d-none')\n    addShipGrid.classList.remove('d-none')\n    //boardLoad.classList.remove('d-none')\n    //addShipGrid.classList.remove('d-none')\n    addShipBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 1fr)`\n    playerBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 1fr)`\n    compBoard.style.gridTemplateColumns = `repeat(${boardSize.value}, 1fr)`\n  })\n\n  const shipGenerator = () => {\n\n  }\n\n  const initialize = (size) => {\n\n    for (let i = 0; i < size; i++) {\n      for (let j = 0; j < size; j++) {\n        let element = document.createElement(\"DIV\");\n        element.classList = 'field';\n        element.addEventListener('click', () => {\n\n        })\n        addShipBoard.appendChild(element);\n      }\n    }\n\n    for (let i = 0; i < size; i++) {\n      for (let j = 0; j < size; j++) {\n        let element = document.createElement(\"DIV\");\n        element.classList = 'field';\n        element.addEventListener('click', () => {\n          player.receiveAttack(i, j)\n        })\n        playerBoard.appendChild(element);\n      }\n    }\n\n    for (let i = 0; i < size; i++) {\n      for (let j = 0; j < size; j++) {\n        let element = document.createElement(\"DIV\");\n        element.classList = 'field';\n        element.addEventListener('click', () => {\n          player.receiveAttack(i, j)\n        })\n        compBoard.appendChild(element);\n      }\n    }\n  }\n\n  return {\n    initialize\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domManager);\n\n//# sourceURL=webpack:///./src/domManager.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst GameBoard = (columns, rows) => {\n  // board is 10 x 10\n  let ships = []\n  let misses = []\n  const addShipToBattlefield = (initialCordinate, direction, object) => {\n    if ((direction === true && (initialCordinate[0] + object.length() >= columns ||\n        initialCordinate[1] >= rows)) ||\n      (direction === false && (initialCordinate[1] + object.length() >= rows ||\n        initialCordinate[0] >= columns))) {\n      return false\n    } else {\n      if (!newShipCoordinateCheck(initialCordinate[0], initialCordinate[1], direction, object.length())) {\n        // direction : true => horisontal, false => vertical\n        ships.push({\n          initialCordinate,\n          direction,\n          object\n        })\n        return true;\n      } else {\n        return false;\n      }\n\n    }\n  }\n\n  const getOverlap = (x, y) => {\n    let result = ships.some((ship) => {\n      if (ship.direction === true && y === ship.initialCordinate[1] && x >= ship.initialCordinate[0] && x < (ship.initialCordinate[0] + ship.object.length()) ||\n        ship.direction === false && x === ship.initialCordinate[0] && y >= ship.initialCordinate[1] && y < (ship.initialCordinate[1] + ship.object.length())) {\n        return true\n      }\n    })\n    return result\n  }\n\n  const newShipCoordinateCheck = (x, y, direction, size) => {\n    if (direction == true) {\n      for (let i = 0; i < size; i++) {\n        if (getOverlap(x + i, y)) {\n          return true\n        }\n      }\n    } else if (direction == false) {\n      for (let i = 0; i < size; i++) {\n        if (getOverlap(x, y + i)) {\n          return true\n        }\n      }\n    }\n    return false\n  }\n\n  const getShips = () => {\n    return ships\n  }\n\n  const getMisses = () => {\n    return misses\n  }\n\n  const checkForSelectedField = (x, y) => {\n    let result = misses.some((coordinate) => {\n      if (x === coordinate[0] && y === coordinate[1]) {\n        return true\n      }\n    })\n    return result\n  }\n\n  const receiveAttack = (x, y) => {\n    if (checkForSelectedField(x, y)) {\n      return false\n    } else {\n      let result = ships.some((ship) => {\n        // direction : true => horisontal/ x, false => vertical/ y\n        if (ship.direction === true && y === ship.initialCordinate[1] && x >= ship.initialCordinate[0] && x < (ship.initialCordinate[0] + ship.object.length())) {\n          return ship.object.hit(x - ship.initialCordinate[0])\n        } else if (ship.direction === false && x === ship.initialCordinate[0] && y >= ship.initialCordinate[1] && y < (ship.initialCordinate[1] + ship.object.length())) {\n          return ship.object.hit(y - ship.initialCordinate[1])\n        }\n      })\n      if (!result) {\n        misses.push([x, y])\n      }\n      return true\n\n    }\n  }\n  let checkGameOver = () => {\n    return !ships.some((ship) => { // true means game\n      // console.log(ship.object.getFields()) \n      return !ship.object.isSunk() // > no sunk = game is not over\n    })\n  }\n  return {\n    addShipToBattlefield,\n    getShips,\n    receiveAttack,\n    getMisses,\n    checkGameOver\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager */ \"./src/domManager.js\");\n\n\nconst manager = Object(_domManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\n\nconst Player = (name) => {\n  let gameBoard;\n  let initiate = (x, y) => {\n    gameBoard = Object(_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, y);\n  }\n  const getName = () => {\n    return name\n  }\n\n  let addShip = (x, y, direction, size) => {\n    let ship = Object(_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(size)\n    return gameBoard.addShipToBattlefield([x, y], (direction === \"horizontal\") ? true : false, ship)\n  }\n  let receiveAttack = (x, y) => {\n    return gameBoard.receiveAttack(x, y)\n  }\n  let getMisses = () => {\n    return gameBoard.getMisses()\n  }\n  let getShips = () => {\n    return gameBoard.getShips()\n  }\n  let checkGameOver = () => {\n    return gameBoard.checkGameOver()\n  }\n  return {\n    initiate,\n    addShip,\n    receiveAttack,\n    getMisses,\n    getShips,\n    checkGameOver,\n    getName\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet Ship = (size) => {\n  let fields = []\n  for (let i = 0; i < size; i += 1) {\n    fields.push(0)\n  }\n  let length = () => {\n    return size;\n  }\n  let hit = (field) => {\n    if (field > size || fields[field] === 1) {\n      return false\n    }\n    fields[field] = 1;\n    return true;\n  }\n  const getFields = () => {\n    return fields\n  }\n  let isSunk = () => {\n    let result = fields.some((x) => {\n      if (x === 0) {\n        return true;\n      }\n    })\n    return !result;\n  }\n  return {\n    length,\n    hit,\n    isSunk,\n    getFields\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });
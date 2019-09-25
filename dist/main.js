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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\nconst domManager = () => {\n  // Variables related to the initial form\n  const playerForm = document.getElementById('player-container');\n  const playerName = document.getElementById('player-name');\n  const boardSize = document.getElementById('inputFieldSize');\n  const numOfShips = document.getElementById('inputNumberOfShips');\n  const nextButton = document.getElementById('next-button');\n  const playerNameDisplay = document.getElementById('playerNameDisplay');\n\n  // Variables related to Add ship form\n  const addShipFormContainer = document.getElementById('add-ships-form-container');\n  const addShipBoard = document.getElementById('add-ship-board');\n  const addShipButton = document.getElementById('add-ship-button');\n  const newShipCoorX = document.getElementById('new-ship-coor-x');\n  const newShipCoorY = document.getElementById('new-ship-coor-y');\n  const newShipOrientation = document.getElementById('new-ship-orientation');\n  const newShipSize = document.getElementById('new-ship-size');\n  const remainingShipsCounterSpan = document.getElementById('remaining-ships-counter');\n  let remainingShipsCounter;\n\n  // Variables relates to game\n  const playerBoard = document.getElementById('player-board');\n  const computerBoard = document.getElementById('computer-board');\n  const boardsContainer = document.getElementById('board-container');\n  const play = document.getElementById('play');\n  const restart = document.getElementById('reset');\n  let matrixSize;\n  let player;\n  let computer;\n  let gameOver;\n\n  // Listeners\n  nextButton.addEventListener('click', () => {\n    if (!(/([^\\s])/.test(playerName.value))) {\n      alert('Name should not be empty !');\n      return;\n    }\n    matrixSize = Number(boardSize.value);\n    player = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerName.value);\n    player.initiate(matrixSize, matrixSize);\n    computer = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('computer');\n    computer.initiate(matrixSize, matrixSize);\n    playerForm.classList.add('d-none');\n    remainingShipsCounter = numOfShips.value;\n    gameOver = false;\n    renderAddShipContainer(matrixSize);\n    addShipBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;\n    playerBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;\n    computerBoard.style.gridTemplateColumns = `repeat(${matrixSize}, 1fr)`;\n  });\n\n  play.addEventListener('click', () => {\n    if (remainingShipsCounter === 0) {\n      addShipFormContainer.classList.add('d-none');\n      boardsContainer.classList.remove('d-none');\n      generateComputerShips();\n      renderBoard(player, playerBoard, 'Player');\n      renderBoard(computer, computerBoard, 'computer');\n      playerNameDisplay.innerText = player.getName();\n    } else {\n      alert('Please add every ship!');\n    }\n  });\n\n  restart.addEventListener('click', () => {\n    reset();\n  });\n\n  addShipButton.addEventListener('click', () => {\n    if (remainingShipsCounter === 0) {\n      alert('You added all the ship ! \\n you need to start the game ');\n      return;\n    }\n    const res = player.addShip(Number(newShipCoorX.value),\n      Number(newShipCoorY.value),\n      newShipOrientation.value,\n      Number(newShipSize.value));\n    if (!res) {\n      alert(\"You can't add this ship !\");\n      return;\n    }\n    remainingShipsCounter -= 1;\n    renderBoard(player, addShipBoard, 'AddShip');\n  });\n\n  const generateComputerShips = () => {\n    const computerShipsNumber = player.getShips();\n    for (let i = 0; i < computerShipsNumber.length; i += 1) {\n      if (!computer.addShip(Math.floor(Math.random() * 6), Math.floor(Math.random() * (matrixSize - 1)), 'horizontal', computerShipsNumber[i].object.getFields().length)) {\n        i -= 1;\n      }\n    }\n  };\n  const renderAddShipContainer = () => {\n    addShipFormContainer.classList.remove('d-none');\n    renderBoard(player, addShipBoard, 'AddShip');\n  };\n\n  const renderBoard = (user, boardContainer, context = null) => {\n    if (context === 'AddShip') {\n      remainingShipsCounterSpan.innerHTML = remainingShipsCounter;\n    }\n    boardContainer.innerHTML = '';\n    for (let i = 0; i < matrixSize; i += 1) {\n      for (let j = 0; j < matrixSize; j += 1) {\n        const element = document.createElement('DIV');\n        element.classList.add('field');\n        if (context !== 'computer') {\n          if (user.checkField(j, i)) {\n            element.classList.add('ship');\n          }\n        }\n        if (context === 'AddShip') {\n          const size = Number(newShipSize.value);\n          const orientation = newShipOrientation.value;\n          const x = Number(newShipCoorX.value);\n          const y = Number(newShipCoorY.value);\n          if (orientation === 'horizontal' && i === y && x <= j && j < x + size) {\n            element.classList.add('ship-selected');\n          }\n          if (orientation === 'vertical' && j === x && y <= i && i < y + size) {\n            element.classList.add('ship-selected');\n          }\n        }\n        element.addEventListener('click', () => {\n          if (context === 'AddShip') {\n            newShipCoorX.value = j;\n            newShipCoorY.value = i;\n            renderBoard(user, boardContainer, 'AddShip');\n          }\n\n          if (context === 'computer') {\n            if (gameOver) {\n              alert('Game is over');\n              return;\n            }\n            if (!element.classList.contains('shipHit') && !element.classList.contains('miss')) {\n              const result = computer.receiveAttack(j, i);\n              if (result) {\n                element.classList.add('shipHit');\n                if (computer.checkGameOver()) {\n                  gameOver = true;\n                  if (confirm(`Game over winner ${player.getName()}! Play again?`)) {\n                    reset();\n                  }\n                  return;\n                }\n              } else {\n                element.classList.add('miss');\n              }\n              gamePlay();\n            } else {\n              alert('You cant hit same field more than once!');\n            }\n          }\n        });\n        if (context === 'Player') {\n          element.setAttribute('id', `${i}-${j}`);\n        }\n        boardContainer.appendChild(element);\n      }\n    }\n  };\n  const gamePlay = () => {\n    const x = Math.floor(Math.random() * matrixSize);\n    const y = Math.floor(Math.random() * matrixSize);\n    const element = document.getElementById(`${x}-${y}`);\n    if (!element.classList.contains('shipHit') && !element.classList.contains('miss')) {\n      const result = player.receiveAttack(y, x);\n      if (result) {\n        element.classList.add('shipHit');\n        if (player.checkGameOver()) {\n          gameOver = true;\n          if (confirm('Game over winner Computer! Play again?')) {\n            reset();\n          }\n        }\n      } else {\n        element.classList.add('miss');\n      }\n    } else {\n      gamePlay();\n    }\n  };\n\n  const reset = () => {\n    player = null;\n    computer = null;\n    boardsContainer.classList.add('d-none');\n    playerForm.classList.remove('d-none');\n  };\n\n  return {\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (domManager);\n\n\n//# sourceURL=webpack:///./src/domManager.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst GameBoard = (columns, rows) => {\n  // board is 10 x 10\n  const ships = [];\n  const misses = [];\n  const addShipToBattlefield = (initialCordinate, direction, object) => {\n    if ((direction === true && (initialCordinate[0] + object.length() - 1 >= columns\n        || initialCordinate[1] >= rows))\n      || (direction === false && (initialCordinate[1] + object.length() - 1 >= rows\n        || initialCordinate[0] >= columns))) {\n      return false;\n    }\n    if (!newShipCoordinateCheck(initialCordinate[0],\n      initialCordinate[1],\n      direction,\n      object.length())) {\n      // direction : true => horizontal, false => vertical\n      ships.push({\n        initialCordinate,\n        direction,\n        object,\n      });\n      return true;\n    }\n    return false;\n  };\n\n  const getOverlap = (x, y) => {\n    const result = ships.some((ship) => {\n      if (ship.direction === true\n        && y === ship.initialCordinate[1]\n        && x >= ship.initialCordinate[0]\n        && x < (ship.initialCordinate[0] + ship.object.length())\n        || ship.direction === false\n        && x === ship.initialCordinate[0]\n        && y >= ship.initialCordinate[1]\n        && y < (ship.initialCordinate[1] + ship.object.length())) {\n        return true;\n      }\n      return false;\n    });\n    return result;\n  };\n\n  const newShipCoordinateCheck = (x, y, direction, size) => {\n    if (direction === true) {\n      for (let i = 0; i < size; i += 1) {\n        if (getOverlap(x + i, y)) {\n          return true;\n        }\n      }\n    } else if (direction === false) {\n      for (let i = 0; i < size; i += 1) {\n        if (getOverlap(x, y + i)) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n\n  const getShips = () => ships;\n\n  const getMisses = () => misses;\n\n  const checkMissedHits = (x, y) => {\n    const result = misses.some((coordinate) => {\n      if (x === coordinate[0] && y === coordinate[1]) {\n        return true;\n      }\n      return false;\n    });\n    return result;\n  };\n\n  const receiveAttack = (x, y) => {\n    if (checkMissedHits(x, y)) {\n      return false;\n    }\n    const result = ships.some((ship) => {\n      // direction : true => horisontal/ x, false => vertical/ y\n      if (ship.direction === true\n        && y === ship.initialCordinate[1]\n        && x >= ship.initialCordinate[0]\n        && x < (ship.initialCordinate[0] + ship.object.length())) {\n        return ship.object.hit(x - ship.initialCordinate[0]);\n      }\n      if (ship.direction === false\n        && x === ship.initialCordinate[0]\n        && y >= ship.initialCordinate[1]\n        && y < (ship.initialCordinate[1] + ship.object.length())) {\n        return ship.object.hit(y - ship.initialCordinate[1]);\n      }\n      return false;\n    });\n    if (!result) {\n      misses.push([x, y]);\n    }\n    return result;\n  };\n  const checkGameOver = () => !ships.some((ship) => !ship.object.isSunk());\n  return {\n    addShipToBattlefield,\n    getShips,\n    receiveAttack,\n    getMisses,\n    getOverlap,\n    checkGameOver,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoard);\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager */ \"./src/domManager.js\");\n\n\nObject(_domManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\n\nconst Player = (name) => {\n  let gameBoard;\n  const initiate = (x, y) => {\n    gameBoard = Object(_gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, y);\n  };\n  const getName = () => name;\n\n  const addShip = (x, y, direction, size) => {\n    const ship = Object(_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(size);\n    return gameBoard.addShipToBattlefield([x, y], (direction === 'horizontal'), ship);\n  };\n  const receiveAttack = (x, y) => gameBoard.receiveAttack(x, y);\n  const getMisses = () => gameBoard.getMisses();\n  const getShips = () => gameBoard.getShips();\n  const checkGameOver = () => gameBoard.checkGameOver();\n  const checkField = (x, y) => gameBoard.getOverlap(x, y);\n  return {\n    initiate,\n    addShip,\n    getMisses,\n    getShips,\n    checkGameOver,\n    receiveAttack,\n    getName,\n    checkField,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Ship = (size) => {\n  const fields = [];\n  for (let i = 0; i < size; i += 1) {\n    fields.push(0);\n  }\n  const length = () => size;\n  const hit = (field) => {\n    if (field > size || fields[field] === 1) {\n      return false;\n    }\n    fields[field] = 1;\n    return true;\n  };\n  const getFields = () => fields;\n  const isSunk = () => {\n    const result = fields.some((x) => {\n      if (x === 0) {\n        return true;\n      }\n      return false;\n    });\n    return !result;\n  };\n  return {\n    length,\n    hit,\n    isSunk,\n    getFields,\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ })

/******/ });
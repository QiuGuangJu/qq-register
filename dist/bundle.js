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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../common/js/api.js":
/*!*************************************************************!*\
  !*** C:/Users/Administrator/Desktop/Ethan/common/js/api.js ***!
  \*************************************************************/
/*! exports provided: hasClass, addClass, removeClass, getListClassIndex, swiper, isFloat, numToFixed, jsFullElementCover, jsElementMiddleCover, urlLocation, randomValidateStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListClassIndex\", function() { return getListClassIndex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swiper\", function() { return swiper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFloat\", function() { return isFloat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numToFixed\", function() { return numToFixed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsFullElementCover\", function() { return jsFullElementCover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsElementMiddleCover\", function() { return jsElementMiddleCover; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlLocation\", function() { return urlLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomValidateStr\", function() { return randomValidateStr; });\n\r\nfunction hasClass(el, className) {\r\n    /* classList IE 10+ 才支持*/\r\n    //return el.classList.contains( className )\r\n\r\n    var reg = new RegExp(\"(\\\\s+|^)\" + className + \"(\\\\s|$)\")\r\n\r\n   return reg.test(el.className )\r\n\r\n}\r\n\r\nfunction addClass(el, className) {\r\n    //el.classList.add(className)\r\n\r\n    if (hasClass(el, className)) {\r\n        return;\r\n    }\r\n\r\n    if ( el.className.length > 0 ) {\r\n        var originClass = el.className.split(\" \");\r\n        originClass.push(className)\r\n\r\n        el.className = originClass.join(' ')\r\n    } else {\r\n        el.className = className\r\n    }\r\n\r\n\r\n}\r\n\r\nfunction removeClass(el, className) {\r\n\r\n    if ( !hasClass(el, className) ) {\r\n        return;\r\n    }\r\n\r\n    var newArr = [];\r\n    var originClass = el.className.split(' ')\r\n\r\n    for (var i = 0; i < originClass.length; i ++) {\r\n        if ( originClass[i] !== className ) {\r\n            newArr.push(originClass[i])\r\n        }\r\n    }\r\n\r\n    var newClass = newArr.join(' ');\r\n\r\n    el.className = newClass\r\n}\r\n\r\n\r\n/**\r\n * 返回一个类数组中 属性class 包含 className 的第一项的 index 值。 如果没找到则返回 -1\r\n * @param arr   类数组对象\r\n * @param className 需要 查找的 className\r\n */\r\nfunction getListClassIndex(arr, className) {\r\n    if (!arr) {\r\n        return -1;\r\n    }\r\n\r\n    for (var i = 0; i < arr.length; i ++) {\r\n        if ( hasClass(arr[i], className) ) {\r\n            return i;\r\n            break;\r\n        }\r\n    }\r\n\r\n    return -1;\r\n}\r\n\r\n\r\n/**\r\n * 通过添加 或 删除  某个 class 值 来实现轮播效果 的方法\r\n * @param index         class 需要添加一个 className 值的 索引\r\n * @param arr           轮播数组，\r\n * @param className     需要添加 或 删除 的 className\r\n */\r\nfunction swiper(index, arr, className ) {\r\n    var currentIndex = getListClassIndex(arr, className);\r\n\r\n    if ( currentIndex != -1) {\r\n        removeClass(arr[currentIndex], className)\r\n    }\r\n    addClass( arr[index], className)\r\n}\r\n\r\n\r\n/*Number.prototype.numToFixed = function() {\r\n    console.log(this.value instanceof Object)\r\n}*/\r\n\r\n/**\r\n * 判断一个 number 是否为 Float 类型(xx.001) 即小数点后不能全为0\r\n * @param num\r\n * @returns {boolean}\r\n */\r\nfunction isFloat( num ) {\r\n    var str = num + \"\";\r\n    return str.indexOf('.') !== -1 ? true : false\r\n\r\n}\r\n\r\n/**\r\n * 因为原函数 xx.toFixed()  不能保留 xx.000 情况\r\n * 此函数 会 保留小数点 几位数， 包括 xx.000\r\n * 如果 len === 0 则返回 parseInt(num) 否则返回字符串\r\n * @param num\r\n * @param len\r\n */\r\nfunction numToFixed(num, len) {\r\n    var str = num + '';     // 如果str 中含有 . 则 num 不会是 xx.000 情况\r\n\r\n    if ( len > 0 ) {\r\n        if ( isFloat(num) ) {\r\n            var strArr = str.split('.');\r\n            var floatStr = strArr[1],\r\n                newFloatArr = [];\r\n\r\n\r\n            for (var i = 0; i < len ; i ++) {\r\n                if (floatStr[i]) {\r\n                    newFloatArr.push( floatStr[i] )\r\n                } else {\r\n                    newFloatArr.push(\"0\")\r\n                }\r\n            }\r\n\r\n            var newFloatStr = newFloatArr.join('');\r\n            strArr[strArr.length - 1] = newFloatStr\r\n\r\n            var newNumStr = strArr.join('.')\r\n            return newNumStr\r\n        } else {\r\n            var originStr = num + '',\r\n                newStr = originStr + '.'\r\n            for (var i = 0; i < len; i ++) {\r\n                newStr += '0'\r\n            }\r\n            return newStr\r\n        }\r\n    } else {\r\n        return parseInt(num)\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * 有BUG\r\n *实现覆盖整个 element 元素的遮罩层\r\n * @param obj   参数对象 包含 id, el, code 属性\r\n */\r\nfunction jsFullElementCover( obj ) {\r\n    var id = obj.id === undefined ? \"jsFullElementCover\" : obj.id,\r\n        el = obj.el === undefined ? document.getElementsByTagName('body')[0] : obj.el,\r\n        code = obj.code === undefined ?  \"\" : obj.code,\r\n        isVerticalCenter = obj.isVerticalCenter === undefined ? false : isVerticalCenter;\r\n\r\n    if ( document.getElementById(id) ) {\r\n        document.getElementById(id).style.display = \"block\"\r\n        return;\r\n    }\r\n\r\n    var div = document.createElement('div');\r\n\r\n    if (id) {\r\n        div.id = id\r\n    }\r\n\r\n    var elStylePosition = el.style.position\r\n\r\n    if ( elStylePosition === 'relative' || elStylePosition === 'absolute' || elStylePosition === 'fixed') {\r\n        div.style.position = \"absolute\"\r\n    } else {\r\n        div.style.position = 'fixed'\r\n    }\r\n\r\n    if (isVerticalCenter) {\r\n        div.style.backgroundColor = \"#fff\";\r\n        div.style.width = \"300px\"\r\n        div.style.height = \"100px\"\r\n\r\n        div.style.left = \"0\"\r\n        div.style.right = \"0\"\r\n        div.style.top = \"0\"\r\n        div.style.bottom = \"0\"\r\n        div.style.margin = \"auto\"\r\n        div.className = 'jsElementCover'\r\n        div.innerHTML = code\r\n    } else {\r\n        div.style.left = 0;\r\n        div.style.top = 0\r\n        div.style.width = '100%'\r\n        div.style.height = '100%'\r\n        div.style.backgroundColor = 'rgba(0,0,0,.4)'\r\n        div.className = 'jsElementCover'\r\n        div.style.zIndex = '9999'\r\n    }\r\n    el.appendChild(div)\r\n}\r\n\r\n/**\r\n * 有 BUG\r\n * 在一个元素内生成一个div并水平垂直居中\r\n * @param obj\r\n */\r\nfunction jsElementMiddleCover(obj) {\r\n    var id = obj.id === undefined ? \"jsMiddleElementCover\" : obj.id,\r\n        el = obj.el === undefined ? document.getElementsByTagName('body')[0] : obj.el,\r\n        code = obj.code === undefined ?  \"\" : obj.code\r\n    console.log(el)\r\n    console.log( el.getElementById(id) )\r\n    if ( el.getElementById(id) ) {\r\n        el.getElementById(id).style.display = \"block\";\r\n        return;\r\n    }\r\n\r\n    var div = document.createElement('div')\r\n\r\n    var elStylePosition = el.style.position\r\n    if ( elStylePosition === 'relative' || elStylePosition === 'absolute' || elStylePosition === 'fixed') {\r\n        div.style.position = \"absolute\"\r\n    } else {\r\n        div.style.position = 'fixed'\r\n    }\r\n\r\n    div.style.backgroundColor = \"#fff\";\r\n    div.style.width = \"300px\"\r\n    div.style.height = \"100px\"\r\n\r\n    div.style.left = \"0\"\r\n    div.style.right = \"0\"\r\n    div.style.top = \"0\"\r\n    div.style.bottom = \"0\"\r\n    div.style.margin = \"auto\"\r\n    div.id = 'jsElementMiddleCover'\r\n    div.innerHTML = code\r\n\r\n    el.appendChild(div)\r\n}\r\n\r\n\r\nfunction  urlLocation(elements, attribute, oldValue, newValue) {\r\n    var reg = new RegExp(oldValue, \"g\")\r\n    for (var i = 0; i < elements.length; i ++ ) {\r\n        var eleAttr = elements[i].getAttribute(attribute);\r\n        if ( eleAttr.indexOf(oldValue)  !== -1 ) {\r\n           eleAttr =  eleAttr.replace(reg, newValue)\r\n            elements[i].setAttribute(attribute, eleAttr)\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * 获取一个随机4位且不重复字符验证码 包含 数字  小写字母 大写字母\r\n * @returns {string}\r\n */\r\nfunction randomValidateStr () {\r\n    var arrOriginAscii = [];     // 0-9 A-Z a-z\r\n\r\n    for (var i = 48; i <= 57;  i ++) {\r\n        arrOriginAscii.push(i)\r\n    }\r\n\r\n    for (var j = 65; j <=90; j ++) {\r\n        arrOriginAscii.push(j)\r\n    }\r\n\r\n    for (var k = 97; k <= 122; k ++) {\r\n        arrOriginAscii.push(k)\r\n    }\r\n\r\n\r\n    var strValidate = '';\r\n    for (var i = 0; i < 4; i ++) {\r\n        var singleCode = arrOriginAscii[ parseInt( Math.random() * (arrOriginAscii.length - 1) ) ]\r\n        strValidate += String.fromCharCode( singleCode );\r\n    }\r\n\r\n    while( strValidate.length < 4 ) {\r\n        var singleCode = arrOriginAscii[ parseInt( Math.random() * (arrOriginAscii.length - 1) ) ]\r\n        if ( strValidate.indexOf( singleCode ) == -1 ) {\r\n            strValidate += String.fromCharCode( singleCode );\r\n        }\r\n    }\r\n\r\n    return strValidate;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///C:/Users/Administrator/Desktop/Ethan/common/js/api.js?");

/***/ }),

/***/ "./carousel.js":
/*!*********************!*\
  !*** ./Carousel.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar carousel =  function(){\r\n    var side = document.getElementsByClassName('side')[0],\r\n        arrImg = ['./images/01-1.jpg', './images/01-2.jpg', './images/01-3.jpg','./images/01-4.jpg'],\r\n        index = 0;\r\n    window.timer = setInterval(function(){\r\n        index ++;\r\n        index = index > arrImg.length - 1 ? 0 : index;\r\n        side.style.backgroundImage = 'url(' + arrImg[index] + ')'\r\n    }, 3000)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (carousel);\n\n//# sourceURL=webpack:///./Carousel.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.js */ \"./Carousel.js\");\n/* harmony import */ var _common_js_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/js/api.js */ \"../../../common/js/api.js\");\n\r\n\r\n\r\nObject(_carousel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nvar userNickname = document.getElementsByClassName('userNickname')[0],\r\n    domPassword = document.getElementsByClassName('password')[0],\r\n    nicknameError = userNickname.nextElementSibling,\r\n    tipsContainer = document.getElementsByClassName('tipsContainer')[0],\r\n    btnSubmit = document.getElementsByClassName('submit')[0],\r\n    lianghaoSearch = document.getElementsByClassName('lianghao-search')[0],\r\n    liangaoInput = lianghaoSearch.getElementsByTagName('input')[0];\r\n\r\n\r\n\r\n// 必须是字母、数字、字符(_) 至少2种组合\r\n var    regPassword =  /^(?![_]+$)(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z_]{8,16}$/;\r\n//                    字母和数字   字母和_      数字和_\r\n\r\n\r\n// 设置hash数组 来标识 用户名 密码 以及 密码 三种要求 的匹配结果 必须四项都为true 才能提交\r\nvar regResultArr = [];\r\nregResultArr['nickName'] = false\r\nregResultArr['passwordSpace'] = false\r\nregResultArr['passwordLength'] = false\r\nregResultArr['passwordVariable'] = false\r\n\r\n// 使用一个 hash 数组来装要匹配密码的三个规则\r\nvar hashPassword = [];\r\nhashPassword['passwordSpace'] = /^(?![\\s]+$)[0-9a-zA-Z_]*$/;\r\nhashPassword['passwordLength'] = /^[0-9a-zA-Z_]{8,16}$/;\r\nhashPassword['passwordVariable'] = /^(?![_]+$)(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z_]{1,}$/;\r\n\r\nuserNickname.onfocus = function(){\r\n    userNickname.style.borderColor = '#3487ff'\r\n    nicknameError.style.height = \"0\"\r\n}\r\n\r\n\r\ndomPassword.onfocus = function(){\r\n    var tips = document.getElementsByClassName('tips');\r\n\r\n    tipsContainer.style.display = 'block'\r\n\r\n    tipsContainer.style.height='94px'\r\n    this.style.borderColor = '#3487ff'\r\n    this.nextElementSibling.style.height = '0'\r\n\r\n    var _self = this;\r\n     window.addEventListener('keyup', function() {\r\n            var password = _self.value,\r\n                i = -1;\r\n\r\n                for (var k in hashPassword) {\r\n                    i = i == tips.length ? 0 : ++i;\r\n                    if ( hashPassword[k].test(password) ) {\r\n                        regResultArr[k] = true;\r\n                        Object(_common_js_api_js__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])(tips[i], 'correct');\r\n                    } else {\r\n                        regResultArr[k] = false;\r\n                        Object(_common_js_api_js__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])(tips[i], 'correct')\r\n                    }\r\n                }\r\n        })\r\n}\r\n\r\nuserNickname.onblur = function(){\r\n    var inputCorret = this.nextElementSibling.nextElementSibling\r\n\r\n    if (this.value.length == 0) {\r\n        nicknameError.style.height = \"18px\"\r\n        this.style.borderColor = '#ff5b5b'\r\n        regResultArr['nickName'] = false\r\n        inputCorret.style.display = 'none'\r\n\r\n    } else {\r\n        inputCorret.style.display = 'block'\r\n        this.style.borderColor = '#aaa'\r\n        nicknameError.style.height = \"0\"\r\n//        nickName = true;\r\n        regResultArr['nickName'] = true\r\n\r\n    }\r\n}\r\n\r\ndomPassword.onblur = function() {\r\n    var password = this.value,\r\n        inputCorrect = this.nextElementSibling.nextElementSibling\r\n\r\n    tipsContainer.style.height = 0\r\n    this.previousElementSibling.style.display = 'none'\r\n    var error = this.nextElementSibling\r\n\r\n    if ( password.length == 0) {\r\n        domPassword.style.borderColor = '#ff5b5b'\r\n        error.style.height = '18px'\r\n        error.innerText = '密码不能为空'\r\n        inputCorrect.style.display = 'none'\r\n        return ;\r\n    }\r\n\r\n\r\n\r\n    tipsContainer.style.display = 'none'\r\n    tipsContainer.style.height = '0'\r\n\r\n    var regPasswordResult = regPassword.test(password)\r\n\r\n    if (  regPasswordResult ) {\r\n        inputCorrect.style.display = 'block'\r\n\r\n    } else {\r\n        inputCorrect.style.display = 'none'\r\n\r\n        error.style.height = '18px'\r\n        domPassword.style.borderColor = '#ff5b5b'\r\n\r\n         if (!regResultArr['passwordSpace']) {\r\n            error.innerText = tipsContainer.getElementsByClassName('tips')[0].innerText\r\n        } else if ( !regResultArr['passwordLength'] ) {\r\n            error.innerText = tipsContainer.getElementsByClassName('tips')[1].innerText\r\n        }else if (!regResultArr['passwordVariable']) {\r\n            error.innerText = tipsContainer.getElementsByClassName('tips')[2].innerText\r\n        }\r\n    }\r\n\r\n}\r\n\r\nbtnSubmit.onclick = function() {\r\n\r\n    if ( !( regResultArr['nickName'] && regResultArr['passwordSpace'] && regResultArr['passwordSpace'] && regResultArr['passwordVariable'])) {\r\n        return false\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\nliangaoInput.oninput = function () {\r\n    toggleLabel(this)\r\n}\r\n\r\nuserNickname.oninput = function () {\r\n    toggleLabel(this)\r\n}\r\n\r\n\r\ndomPassword.oninput = function () {\r\n    toggleLabel(this)\r\n}\r\n\r\nfunction toggleLabel(ele) {\r\n    var label = ele.previousElementSibling;\r\n    if (ele) {\r\n        var userInput = ele.value;\r\n        if ( userInput.length == 0 ) {\r\n            label.style.display = 'block'\r\n        } else {\r\n            label.style.display = 'none'\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/CheckoutProduct.js":
/*!*******************************************!*\
  !*** ./src/components/CheckoutProduct.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-format */ "./node_modules/react-currency-format/lib/currency-format.js");
/* harmony import */ var react_currency_format__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_format__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Envy\\Documents\\GitHub\\Amazon\\amazon\\src\\components\\CheckoutProduct.js";





function CheckoutProduct(_ref) {
  var _this = this;

  var id = _ref.id,
      title = _ref.title,
      price = _ref.price,
      rating = _ref.rating,
      description = _ref.description,
      category = _ref.category,
      image = _ref.image,
      hasPrime = _ref.hasPrime;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-cols-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "col-span-3 mx-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex",
        children: Array(rating).fill().map(function (_, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {
            className: "h-5 text-yellow-500"
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs my-2 line-clamp-3",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_format__WEBPACK_IMPORTED_MODULE_3___default()), {
        value: price,
        displayType: 'text',
        thousandSeparator: true,
        prefix: '$'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_c = CheckoutProduct;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutProduct);

var _c;

$RefreshReg$(_c, "CheckoutProduct");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/react-currency-format/lib/currency-format.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-currency-format/lib/currency-format.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-currency-format/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  thousandSeparator: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf([true])]),
  thousandSpacing: _propTypes2.default.oneOf(['2', '2s', '3', '4']),
  decimalSeparator: _propTypes2.default.string,
  decimalScale: _propTypes2.default.number,
  fixedDecimalScale: _propTypes2.default.bool,
  displayType: _propTypes2.default.oneOf(['input', 'text']),
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  removeFormatting: _propTypes2.default.func,
  mask: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  isNumericString: _propTypes2.default.bool,
  customInput: _propTypes2.default.func,
  allowNegative: _propTypes2.default.bool,
  onValueChange: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['text', 'tel']),
  isAllowed: _propTypes2.default.func,
  renderText: _propTypes2.default.func
};

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandSpacing: '3',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  isNumericString: false,
  type: 'text',
  onValueChange: _utils.noop,
  onChange: _utils.noop,
  onKeyDown: _utils.noop,
  onMouseUp: _utils.noop,
  onFocus: _utils.noop,
  onBlur: _utils.noop,
  isAllowed: _utils.returnTrue
};

var CurrencyFormat = function (_React$Component) {
  _inherits(CurrencyFormat, _React$Component);

  function CurrencyFormat(props) {
    _classCallCheck(this, CurrencyFormat);

    //validate props
    var _this = _possibleConstructorReturn(this, (CurrencyFormat.__proto__ || Object.getPrototypeOf(CurrencyFormat)).call(this, props));

    _this.validateProps();

    var formattedValue = _this.formatValueProp();

    _this.state = {
      value: formattedValue,
      numAsString: _this.removeFormatting(formattedValue)
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  _createClass(CurrencyFormat, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.updateValueIfRequired(prevProps);
    }
  }, {
    key: 'updateValueIfRequired',
    value: function updateValueIfRequired(prevProps) {
      var props = this.props,
          state = this.state;


      if (prevProps !== props) {
        //validate props
        this.validateProps();

        var stateValue = state.value;

        var lastNumStr = state.numAsString || '';

        var formattedValue = props.value === undefined ? this.formatNumString(lastNumStr) : this.formatValueProp();

        if (formattedValue !== stateValue) {
          this.setState({
            value: formattedValue,
            numAsString: this.removeFormatting(formattedValue)
          });
        }
      }
    }

    /** Misc methods **/

  }, {
    key: 'getFloatString',
    value: function getFloatString() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _getSeparators = this.getSeparators(),
          decimalSeparator = _getSeparators.decimalSeparator;

      var numRegex = this.getNumberRegex(true);

      //remove negation for regex check
      var hasNegation = num[0] === '-';
      if (hasNegation) num = num.replace('-', '');

      num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

      //remove extra decimals
      var firstDecimalIndex = num.indexOf('.');

      if (firstDecimalIndex !== -1) {
        num = num.substring(0, firstDecimalIndex) + '.' + num.substring(firstDecimalIndex + 1, num.length).replace(new RegExp((0, _utils.escapeRegExp)(decimalSeparator), 'g'), '');
      }

      //add negation back
      if (hasNegation) num = '-' + num;

      return num;
    }

    //returned regex assumes decimalSeparator is as per prop

  }, {
    key: 'getNumberRegex',
    value: function getNumberRegex(g, ignoreDecimalSeparator) {
      var _props = this.props,
          format = _props.format,
          decimalScale = _props.decimalScale;

      var _getSeparators2 = this.getSeparators(),
          decimalSeparator = _getSeparators2.decimalSeparator;

      return new RegExp('\\d' + (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format ? '|' + (0, _utils.escapeRegExp)(decimalSeparator) : ''), g ? 'g' : undefined);
    }
  }, {
    key: 'getSeparators',
    value: function getSeparators() {
      var _props2 = this.props,
          decimalSeparator = _props2.decimalSeparator,
          thousandSpacing = _props2.thousandSpacing;
      var thousandSeparator = this.props.thousandSeparator;


      if (thousandSeparator === true) {
        thousandSeparator = ',';
      }

      return {
        decimalSeparator: decimalSeparator,
        thousandSeparator: thousandSeparator,
        thousandSpacing: thousandSpacing
      };
    }
  }, {
    key: 'getMaskAtIndex',
    value: function getMaskAtIndex(index) {
      var _props$mask = this.props.mask,
          mask = _props$mask === undefined ? ' ' : _props$mask;

      if (typeof mask === 'string') {
        return mask;
      }

      return mask[index] || ' ';
    }
  }, {
    key: 'validateProps',
    value: function validateProps() {
      var mask = this.props.mask;

      //validate decimalSeparator and thousandSeparator

      var _getSeparators3 = this.getSeparators(),
          decimalSeparator = _getSeparators3.decimalSeparator,
          thousandSeparator = _getSeparators3.thousandSeparator;

      if (decimalSeparator === thousandSeparator) {
        throw new Error('\n          Decimal separator can\'t be same as thousand separator.\n\n          thousandSeparator: ' + thousandSeparator + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: ' + decimalSeparator + ' (default value for decimalSeparator is .)\n       ');
      }

      //validate mask
      if (mask) {
        var maskAsStr = mask === 'string' ? mask : mask.toString();
        if (maskAsStr.match(/\d/g)) {
          throw new Error('\n          Mask ' + mask + ' should not contain numeric character;\n        ');
        }
      }
    }
  }, {
    key: 'splitDecimal',
    value: function splitDecimal(numStr) {
      var allowNegative = this.props.allowNegative;

      var hasNagation = numStr[0] === '-';
      var addNegation = hasNagation && allowNegative;
      numStr = numStr.replace('-', '');

      var parts = numStr.split('.');
      var beforeDecimal = parts[0];
      var afterDecimal = parts[1] || '';

      return {
        beforeDecimal: beforeDecimal,
        afterDecimal: afterDecimal,
        hasNagation: hasNagation,
        addNegation: addNegation
      };
    }

    /** Misc methods end **/

    /** caret specific methods **/

  }, {
    key: 'setPatchedCaretPosition',
    value: function setPatchedCaretPosition(el, caretPos, currentValue) {
      /* setting caret position within timeout of 0ms is required for mobile chrome,
      otherwise browser resets the caret position after we set it
      We are also setting it without timeout so that in normal browser we don't see the flickering */
      (0, _utils.setCaretPosition)(el, caretPos);
      setTimeout(function () {
        if (el.value === currentValue) (0, _utils.setCaretPosition)(el, caretPos);
      }, 0);
    }

    /* This keeps the caret within typing area so people can't type in between prefix or suffix */

  }, {
    key: 'correctCaretPosition',
    value: function correctCaretPosition(value, caretPos, direction) {
      var _props3 = this.props,
          prefix = _props3.prefix,
          suffix = _props3.suffix,
          format = _props3.format;

      //in case of format as number limit between prefix and suffix

      if (!format) {
        var hasNegation = value[0] === '-';
        return Math.min(Math.max(caretPos, prefix.length + (hasNegation ? 1 : 0)), value.length - suffix.length);
      }

      //in case if custom format method don't do anything
      if (typeof format === 'function') return caretPos;

      /* in case format is string find the closest # position from the caret position */

      //in case the caretPos have input value on it don't do anything
      if (format[caretPos] === '#' && (0, _utils.charIsNumber)(value[caretPos])) return caretPos;

      //if caretPos is just after input value don't do anything
      if (format[caretPos - 1] === '#' && (0, _utils.charIsNumber)(value[caretPos - 1])) return caretPos;

      //find the nearest caret position
      var firstHashPosition = format.indexOf('#');
      var lastHashPosition = format.lastIndexOf('#');

      //limit the cursor between the first # position and the last # position
      caretPos = Math.min(Math.max(caretPos, firstHashPosition), lastHashPosition + 1);

      var nextPos = format.substring(caretPos, format.length).indexOf('#');
      var caretLeftBound = caretPos;
      var caretRightBoud = caretPos + (nextPos === -1 ? 0 : nextPos);

      //get the position where the last number is present
      while (caretLeftBound > firstHashPosition && (format[caretLeftBound] !== '#' || !(0, _utils.charIsNumber)(value[caretLeftBound]))) {
        caretLeftBound -= 1;
      }

      var goToLeft = !(0, _utils.charIsNumber)(value[caretRightBoud]) || direction === 'left' && caretPos !== firstHashPosition || caretPos - caretLeftBound < caretRightBoud - caretPos;

      return goToLeft ? caretLeftBound + 1 : caretRightBoud;
    }
  }, {
    key: 'getCaretPosition',
    value: function getCaretPosition(inputValue, formattedValue, caretPos) {
      var format = this.props.format;

      var stateValue = this.state.value;
      var numRegex = this.getNumberRegex(true);
      var inputNumber = (inputValue.match(numRegex) || []).join('');
      var formattedNumber = (formattedValue.match(numRegex) || []).join('');
      var j = void 0,
          i = void 0;

      j = 0;

      for (i = 0; i < caretPos; i++) {
        var currentInputChar = inputValue[i] || '';
        var currentFormatChar = formattedValue[j] || '';
        //no need to increase new cursor position if formatted value does not have those characters
        //case inputValue = 1a23 and formattedValue =  123
        if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) continue;

        //When we are striping out leading zeros maintain the new cursor position
        //Case inputValue = 00023 and formattedValue = 23;
        if (currentInputChar === '0' && currentFormatChar.match(numRegex) && currentFormatChar !== '0' && inputNumber.length !== formattedNumber.length) continue;

        //we are not using currentFormatChar because j can change here
        while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
          j++;
        }j++;
      }

      if (typeof format === 'string' && !stateValue) {
        //set it to the maximum value so it goes after the last number
        j = formattedValue.length;
      }

      //correct caret position if its outside of editable area
      j = this.correctCaretPosition(formattedValue, j);

      return j;
    }
    /** caret specific methods ends **/

    /** methods to remove formattting **/

  }, {
    key: 'removePrefixAndSuffix',
    value: function removePrefixAndSuffix(val) {
      var _props4 = this.props,
          format = _props4.format,
          prefix = _props4.prefix,
          suffix = _props4.suffix;

      //remove prefix and suffix

      if (!format && val) {
        var isNegative = val[0] === '-';

        //remove negation sign
        if (isNegative) val = val.substring(1, val.length);

        //remove prefix
        val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

        //remove suffix
        var suffixLastIndex = val.lastIndexOf(suffix);
        val = suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length ? val.substring(0, suffixLastIndex) : val;

        //add negation sign back
        if (isNegative) val = '-' + val;
      }

      return val;
    }
  }, {
    key: 'removePatternFormatting',
    value: function removePatternFormatting(val) {
      var format = this.props.format;

      var formatArray = format.split('#').filter(function (str) {
        return str !== '';
      });
      var start = 0;
      var numStr = '';

      for (var i = 0, ln = formatArray.length; i <= ln; i++) {
        var part = formatArray[i] || '';

        //if i is the last fragment take the index of end of the value
        //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
        var index = i === ln ? val.length : val.indexOf(part, start);

        /* in any case if we don't find the pattern part in the value assume the val as numeric string
        This will be also in case if user has started typing, in any other case it will not be -1
        unless wrong prop value is provided */
        if (index === -1) {
          numStr = val;
          break;
        } else {
          numStr += val.substring(start, index);
          start = index + part.length;
        }
      }

      return (numStr.match(/\d/g) || []).join('');
    }
  }, {
    key: 'removeFormatting',
    value: function removeFormatting(val) {
      var _props5 = this.props,
          format = _props5.format,
          removeFormatting = _props5.removeFormatting;

      if (!val) return val;

      if (!format) {
        val = this.removePrefixAndSuffix(val);
        val = this.getFloatString(val);
      } else if (typeof format === 'string') {
        val = this.removePatternFormatting(val);
      } else if (typeof removeFormatting === 'function') {
        //condition need to be handled if format method is provide,
        val = removeFormatting(val);
      } else {
        val = (val.match(/\d/g) || []).join('');
      }
      return val;
    }
    /** methods to remove formattting end **/

    /*** format specific methods start ***/
    /**
     * Format when # based string is provided
     * @param  {string} numStr Numeric String
     * @return {string}        formatted Value
     */

  }, {
    key: 'formatWithPattern',
    value: function formatWithPattern(numStr) {
      var format = this.props.format;

      var hashCount = 0;
      var formattedNumberAry = format.split('');
      for (var i = 0, ln = format.length; i < ln; i++) {
        if (format[i] === '#') {
          formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
          hashCount += 1;
        }
      }
      return formattedNumberAry.join('');
    }
    /**
     * Format the given string according to thousand separator and thousand spacing
     * @param {*} beforeDecimal 
     * @param {*} thousandSeparator 
     * @param {*} thousandSpacing 
     */

  }, {
    key: 'formatThousand',
    value: function formatThousand(beforeDecimal, thousandSeparator, thousandSpacing) {
      var digitalGroup = void 0;
      switch (thousandSpacing) {
        case _utils.thousandGroupSpacing.two:
          digitalGroup = /(\d)(?=(\d{2})+(?!\d))/g;
          break;
        case _utils.thousandGroupSpacing.twoScaled:
          digitalGroup = /(\d)(?=(((\d{2})+)(\d{1})(?!\d)))/g;
          break;
        case _utils.thousandGroupSpacing.four:
          digitalGroup = /(\d)(?=(\d{4})+(?!\d))/g;
          break;
        default:
          digitalGroup = /(\d)(?=(\d{3})+(?!\d))/g;
      }

      return beforeDecimal.replace(digitalGroup, '$1' + thousandSeparator);
    }
    /**
     * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
     * @return {string} formatted Value
     */

  }, {
    key: 'formatAsNumber',
    value: function formatAsNumber(numStr) {
      var _props6 = this.props,
          decimalScale = _props6.decimalScale,
          fixedDecimalScale = _props6.fixedDecimalScale,
          prefix = _props6.prefix,
          suffix = _props6.suffix;

      var _getSeparators4 = this.getSeparators(),
          thousandSeparator = _getSeparators4.thousandSeparator,
          decimalSeparator = _getSeparators4.decimalSeparator,
          thousandSpacing = _getSeparators4.thousandSpacing;

      var hasDecimalSeparator = numStr.indexOf('.') !== -1 || decimalScale && fixedDecimalScale;

      var _splitDecimal = this.splitDecimal(numStr),
          beforeDecimal = _splitDecimal.beforeDecimal,
          afterDecimal = _splitDecimal.afterDecimal,
          addNegation = _splitDecimal.addNegation; // eslint-disable-line prefer-const

      //apply decimal precision if its defined


      if (decimalScale !== undefined) afterDecimal = (0, _utils.limitToScale)(afterDecimal, decimalScale, fixedDecimalScale);

      if (thousandSeparator) {
        beforeDecimal = this.formatThousand(beforeDecimal, thousandSeparator, thousandSpacing);
      }

      //add prefix and suffix
      if (prefix) beforeDecimal = prefix + beforeDecimal;
      if (suffix) afterDecimal = afterDecimal + suffix;

      //restore negation sign
      if (addNegation) beforeDecimal = '-' + beforeDecimal;

      numStr = beforeDecimal + (hasDecimalSeparator && decimalSeparator || '') + afterDecimal;

      return numStr;
    }
  }, {
    key: 'formatNumString',
    value: function formatNumString() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format;

      var formattedValue = value;

      if (value === '') {
        formattedValue = '';
      } else if (value === '-' && !format) {
        formattedValue = '-';
        value = '';
      } else if (typeof format === 'string') {
        formattedValue = this.formatWithPattern(formattedValue);
      } else if (typeof format === 'function') {
        formattedValue = format(formattedValue);
      } else {
        formattedValue = this.formatAsNumber(formattedValue);
      }

      return formattedValue;
    }
  }, {
    key: 'formatValueProp',
    value: function formatValueProp() {
      var _props7 = this.props,
          format = _props7.format,
          decimalScale = _props7.decimalScale,
          fixedDecimalScale = _props7.fixedDecimalScale;
      var _props8 = this.props,
          value = _props8.value,
          isNumericString = _props8.isNumericString;

      // if value is not defined return empty string

      if (value === undefined) return '';

      if (typeof value === 'number') {
        value = value.toString();
        isNumericString = true;
      }

      //round the number based on decimalScale
      //format only if non formatted value is provided
      if (isNumericString && !format && typeof decimalScale === 'number') {
        value = (0, _utils.roundToPrecision)(value, decimalScale, fixedDecimalScale);
      }

      var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

      return formattedValue;
    }
  }, {
    key: 'formatNegation',
    value: function formatNegation() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var allowNegative = this.props.allowNegative;

      var negationRegex = new RegExp('(-)');
      var doubleNegationRegex = new RegExp('(-)(.)*(-)');

      // Check number has '-' value
      var hasNegation = negationRegex.test(value);

      // Check number has 2 or more '-' values
      var removeNegation = doubleNegationRegex.test(value);

      //remove negation
      value = value.replace(/-/g, '');

      if (hasNegation && !removeNegation && allowNegative) {
        value = '-' + value;
      }

      return value;
    }
  }, {
    key: 'formatInput',
    value: function formatInput() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var format = this.props.format;

      //format negation only if we are formatting as number

      if (!format) {
        value = this.formatNegation(value);
      }

      //remove formatting from number
      value = this.removeFormatting(value);

      return this.formatNumString(value);
    }

    /*** format specific methods end ***/

  }, {
    key: 'isCharacterAFormat',
    value: function isCharacterAFormat(caretPos, value) {
      var _props9 = this.props,
          format = _props9.format,
          prefix = _props9.prefix,
          suffix = _props9.suffix,
          decimalScale = _props9.decimalScale,
          fixedDecimalScale = _props9.fixedDecimalScale;

      var _getSeparators5 = this.getSeparators(),
          decimalSeparator = _getSeparators5.decimalSeparator;

      //check within format pattern


      if (typeof format === 'string' && format[caretPos] !== '#') return true;

      //check in number format
      if (!format && (caretPos < prefix.length || caretPos >= value.length - suffix.length || decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator)) {
        return true;
      }

      return false;
    }
  }, {
    key: 'checkIfFormatGotDeleted',
    value: function checkIfFormatGotDeleted(start, end, value) {
      for (var i = start; i < end; i++) {
        if (this.isCharacterAFormat(i, value)) return true;
      }
      return false;
    }

    /**
     * This will check if any formatting got removed by the delete or backspace and reset the value
     * It will also work as fallback if android chome keyDown handler does not work
     **/

  }, {
    key: 'correctInputValue',
    value: function correctInputValue(caretPos, lastValue, value) {
      var format = this.props.format;

      var lastNumStr = this.state.numAsString || '';

      //don't do anyhting if something got added, or if value is empty string (when whole input is cleared)
      if (value.length >= lastValue.length || !value.length) {
        return value;
      }

      var start = caretPos;
      var lastValueParts = (0, _utils.splitString)(lastValue, caretPos);
      var newValueParts = (0, _utils.splitString)(value, caretPos);
      var deletedIndex = lastValueParts[1].lastIndexOf(newValueParts[1]);
      var diff = deletedIndex !== -1 ? lastValueParts[1].substring(0, deletedIndex) : '';
      var end = start + diff.length;

      //if format got deleted reset the value to last value
      if (this.checkIfFormatGotDeleted(start, end, lastValue)) {
        value = lastValue;
      }

      //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
      //clear all numbers in such case while keeping the - sign
      if (!format) {
        var numericString = this.removeFormatting(value);

        var _splitDecimal2 = this.splitDecimal(numericString),
            beforeDecimal = _splitDecimal2.beforeDecimal,
            afterDecimal = _splitDecimal2.afterDecimal,
            addNegation = _splitDecimal2.addNegation; // eslint-disable-line prefer-const

        //clear only if something got deleted


        if (numericString.length < lastNumStr.length && beforeDecimal === '' && !parseFloat(afterDecimal)) {
          return addNegation ? '-' : '';
        }
      }

      return value;
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      e.persist();
      var el = e.target;
      var inputValue = el.value;
      var state = this.state,
          props = this.props;
      var isAllowed = props.isAllowed;

      var lastValue = state.value || '';

      /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
      var currentCaretPosition = Math.max(el.selectionStart, el.selectionEnd);

      inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

      var formattedValue = this.formatInput(inputValue) || '';
      var numAsString = this.removeFormatting(formattedValue);

      var valueObj = {
        formattedValue: formattedValue,
        value: numAsString,
        floatValue: parseFloat(numAsString)
      };

      if (!isAllowed(valueObj)) {
        formattedValue = lastValue;
      }

      //set the value imperatively, this is required for IE fix
      el.value = formattedValue;

      //get the caret position
      var caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);

      //set caret position
      this.setPatchedCaretPosition(el, caretPos, formattedValue);

      //change the state
      if (formattedValue !== lastValue) {
        this.setState({ value: formattedValue, numAsString: numAsString }, function () {
          props.onValueChange(valueObj);
          props.onChange(e);
        });
      } else {
        props.onChange(e);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var props = this.props,
          state = this.state;
      var format = props.format,
          onBlur = props.onBlur;
      var numAsString = state.numAsString;

      var lastValue = state.value;
      if (!format) {
        numAsString = (0, _utils.fixLeadingZero)(numAsString);
        var formattedValue = this.formatNumString(numAsString);
        var valueObj = {
          formattedValue: formattedValue,
          value: numAsString,
          floatValue: parseFloat(numAsString)
        };

        //change the state
        if (formattedValue !== lastValue) {
          // the event needs to be persisted because its properties can be accessed in an asynchronous way
          e.persist();
          this.setState({ value: formattedValue, numAsString: numAsString }, function () {
            props.onValueChange(valueObj);
            onBlur(e);
          });
          return;
        }
      }
      onBlur(e);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var el = e.target;
      var key = e.key;
      var selectionEnd = el.selectionEnd,
          value = el.value;
      var selectionStart = el.selectionStart;

      var expectedCaretPosition = void 0;
      var _props10 = this.props,
          decimalScale = _props10.decimalScale,
          fixedDecimalScale = _props10.fixedDecimalScale,
          prefix = _props10.prefix,
          suffix = _props10.suffix,
          format = _props10.format,
          onKeyDown = _props10.onKeyDown;

      var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
      var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
      var negativeRegex = new RegExp('-');
      var isPatternFormat = typeof format === 'string';

      //Handle backspace and delete against non numerical/decimal characters or arrow keys
      if (key === 'ArrowLeft' || key === 'Backspace') {
        expectedCaretPosition = selectionStart - 1;
      } else if (key === 'ArrowRight') {
        expectedCaretPosition = selectionStart + 1;
      } else if (key === 'Delete') {
        expectedCaretPosition = selectionStart;
      }

      //if expectedCaretPosition is not set it means we don't want to Handle keyDown
      //also if multiple characters are selected don't handle
      if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
        onKeyDown(e);
        return;
      }

      var newCaretPosition = expectedCaretPosition;
      var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
      var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        var direction = key === 'ArrowLeft' ? 'left' : 'right';
        newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
      } else if (key === 'Delete' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
          newCaretPosition++;
        }
      } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition]) && !negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }

      if (newCaretPosition !== expectedCaretPosition || expectedCaretPosition < leftBound || expectedCaretPosition > rightBound) {
        e.preventDefault();
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
              Remove this when you find different solution */
      if (e.isUnitTestRun) {
        this.setPatchedCaretPosition(el, newCaretPosition, value);
      }

      this.props.onKeyDown(e);
    }

    /** required to handle the caret position when click anywhere within the input **/

  }, {
    key: 'onMouseUp',
    value: function onMouseUp(e) {
      var el = e.target;
      var selectionStart = el.selectionStart,
          selectionEnd = el.selectionEnd,
          value = el.value;


      if (selectionStart === selectionEnd) {
        var caretPostion = this.correctCaretPosition(value, selectionStart);
        if (caretPostion !== selectionStart) {
          this.setPatchedCaretPosition(el, caretPostion, value);
        }
      }

      this.props.onMouseUp(e);
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      var _this2 = this;

      // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
      // (onFocus event target selectionStart is always 0 before setTimeout)
      e.persist();
      setTimeout(function () {
        var el = e.target;
        var selectionStart = el.selectionStart,
            value = el.value;


        var caretPosition = _this2.correctCaretPosition(value, selectionStart);
        if (caretPosition !== selectionStart) {
          _this2.setPatchedCaretPosition(el, caretPosition, value);
        }

        _this2.props.onFocus(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props11 = this.props,
          type = _props11.type,
          displayType = _props11.displayType,
          customInput = _props11.customInput,
          renderText = _props11.renderText;
      var value = this.state.value;


      var otherProps = (0, _utils.omit)(this.props, propTypes);

      var inputProps = _extends({}, otherProps, {
        type: type,
        value: value,
        onChange: this.onChange,
        onKeyDown: this.onKeyDown,
        onMouseUp: this.onMouseUp,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      });

      if (displayType === 'text') {
        return renderText ? renderText(value) || null : _react2.default.createElement(
          'span',
          otherProps,
          value
        );
      } else if (customInput) {
        var CustomInput = customInput;
        return _react2.default.createElement(CustomInput, inputProps);
      }

      return _react2.default.createElement('input', inputProps);
    }
  }]);

  return CurrencyFormat;
}(_react2.default.Component);

CurrencyFormat.propTypes = propTypes;
CurrencyFormat.defaultProps = defaultProps;

module.exports = CurrencyFormat;

/***/ }),

/***/ "./node_modules/react-currency-format/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-currency-format/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noop = noop;
exports.returnTrue = returnTrue;
exports.charIsNumber = charIsNumber;
exports.escapeRegExp = escapeRegExp;
exports.fixLeadingZero = fixLeadingZero;
exports.splitString = splitString;
exports.limitToScale = limitToScale;
exports.roundToPrecision = roundToPrecision;
exports.omit = omit;
exports.setCaretPosition = setCaretPosition;


// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char) {
  return !!(char || '').match(/\d/);
}

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function fixLeadingZero(numStr) {
  if (!numStr) return numStr;
  var isNegative = numStr[0] === '-';
  if (isNegative) numStr = numStr.substring(1, numStr.length);
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return '' + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? '.' + afterDecimal : '');
}

function splitString(str, index) {
  return [str.substring(0, index), str.substring(index)];
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr, scale, fixedDecimalScale) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr, scale, fixedDecimalScale) {
  var numberParts = numStr.split('.');
  var roundedDecimalParts = parseFloat('0.' + (numberParts[1] || '0')).toFixed(scale).split('.');
  var intPart = numberParts[0].split('').reverse().reduce(function (roundedStr, current, idx) {
    if (roundedStr.length > idx) {
      return (Number(roundedStr[0]) + Number(current)).toString() + roundedStr.substring(1, roundedStr.length);
    }
    return current + roundedStr;
  }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(roundedDecimalParts[1] || '', (numberParts[1] || '').length, fixedDecimalScale);

  return intPart + (decimalPart ? '.' + decimalPart : '');
}

function omit(obj, keyMaps) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) filteredObj[key] = obj[key];
  });
  return filteredObj;
}

/** set the caret positon in an input field **/
function setCaretPosition(el, caretPos) {
  el.value = el.value;
  // ^ this is used to not only get "focus", but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

var thousandGroupSpacing = exports.thousandGroupSpacing = {
  two: '2',
  twoScaled: '2s',
  three: '3',
  four: '4'
};

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtY3VycmVuY3ktZm9ybWF0L2xpYi9jdXJyZW5jeS1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jdXJyZW5jeS1mb3JtYXQvbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbIkNoZWNrb3V0UHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImhhc1ByaW1lIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9BU0k7QUFBQTs7QUFBQSxNQVJBQyxFQVFBLFFBUkFBLEVBUUE7QUFBQSxNQVBBQyxLQU9BLFFBUEFBLEtBT0E7QUFBQSxNQU5BQyxLQU1BLFFBTkFBLEtBTUE7QUFBQSxNQUxBQyxNQUtBLFFBTEFBLE1BS0E7QUFBQSxNQUpBQyxXQUlBLFFBSkFBLFdBSUE7QUFBQSxNQUhBQyxRQUdBLFFBSEFBLFFBR0E7QUFBQSxNQUZBQyxLQUVBLFFBRkFBLEtBRUE7QUFBQSxNQURBQyxRQUNBLFFBREFBLFFBQ0E7QUFDRixzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNJLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFRCxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUdJO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0k7QUFBQSxrQkFBSUw7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGtCQUNDTyxLQUFLLENBQUNMLE1BQUQsQ0FBTCxDQUNBTSxJQURBLEdBRUFDLEdBRkEsQ0FFSSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDRCw4REFBQyxpRUFBRDtBQUFrQixxQkFBUyxFQUFDO0FBQTVCLGFBQWVBLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQztBQUFBLFNBRko7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFVSTtBQUFHLGlCQUFTLEVBQUMsMkJBQWI7QUFBQSxrQkFDS1I7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkosZUFhSSw4REFBQyw4REFBRDtBQUFnQixhQUFLLEVBQUVGLEtBQXZCO0FBQStCLG1CQUFXLEVBQUUsTUFBNUM7QUFBb0QseUJBQWlCLEVBQUUsSUFBdkU7QUFBNkUsY0FBTSxFQUFFO0FBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDs7S0EvQlFILGU7QUFpQ1QsK0RBQWVBLGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENhOztBQUViLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTs7QUFFckM7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1Qjs7QUFFQSxhQUFhLG1CQUFPLENBQUMsa0VBQVM7O0FBRTlCLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNktBQTZLLEtBQUs7QUFDbEw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSw4Q0FBOEMsU0FBUztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxRQUFRO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEVBQUU7QUFDdkM7QUFDQTtBQUNBLHVDQUF1QyxFQUFFLE9BQU8sRUFBRTtBQUNsRDtBQUNBO0FBQ0EscUNBQXFDLEVBQUU7QUFDdkM7QUFDQTtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixrREFBa0Q7QUFDekU7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBa0Q7QUFDM0U7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLGdDOzs7Ozs7Ozs7OztBQzE3QmE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1osd0JBQXdCOzs7QUFHeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC41ODcyNTc2ZWU2NmI5OTQ2MWM1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDdXJyZW5jeUZvcm1hdFxyXG4gZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0J1xyXG5mdW5jdGlvbiBDaGVja291dFByb2R1Y3Qoe1xyXG4gICAgaWQsIFxyXG4gICAgdGl0bGUsIFxyXG4gICAgcHJpY2UsIFxyXG4gICAgcmF0aW5nLFxyXG4gICAgZGVzY3JpcHRpb24sIFxyXG4gICAgY2F0ZWdvcnksIFxyXG4gICAgaW1hZ2UsXHJcbiAgICBoYXNQcmltZVxyXG4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNSc+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9J2NvbnRhaW4nIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBteC01XCI+XHJcbiAgICAgICAgICAgIDxwPnt0aXRsZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAge0FycmF5KHJhdGluZylcclxuICAgICAgICAgICAgLmZpbGwoKVxyXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U3Rhckljb24ga2V5PXtpfSBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwXCIgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0zJz5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8Q3VycmVuY3lGb3JtYXQgdmFsdWU9e3ByaWNlfSAgZGlzcGxheVR5cGU9eyd0ZXh0J30gdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9IHByZWZpeD17JyQnfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGVja291dFByb2R1Y3QiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgdGhvdXNhbmRTZXBhcmF0b3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbdHJ1ZV0pXSksXG4gIHRob3VzYW5kU3BhY2luZzogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJzInLCAnMnMnLCAnMycsICc0J10pLFxuICBkZWNpbWFsU2VwYXJhdG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZGVjaW1hbFNjYWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZml4ZWREZWNpbWFsU2NhbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzcGxheVR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydpbnB1dCcsICd0ZXh0J10pLFxuICBwcmVmaXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdWZmaXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBmb3JtYXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jXSksXG4gIHJlbW92ZUZvcm1hdHRpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgbWFzazogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcpXSksXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nXSksXG4gIGlzTnVtZXJpY1N0cmluZzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjdXN0b21JbnB1dDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBhbGxvd05lZ2F0aXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG9uVmFsdWVDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25LZXlEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsndGV4dCcsICd0ZWwnXSksXG4gIGlzQWxsb3dlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICByZW5kZXJUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc3BsYXlUeXBlOiAnaW5wdXQnLFxuICBkZWNpbWFsU2VwYXJhdG9yOiAnLicsXG4gIHRob3VzYW5kU3BhY2luZzogJzMnLFxuICBmaXhlZERlY2ltYWxTY2FsZTogZmFsc2UsXG4gIHByZWZpeDogJycsXG4gIHN1ZmZpeDogJycsXG4gIGFsbG93TmVnYXRpdmU6IHRydWUsXG4gIGlzTnVtZXJpY1N0cmluZzogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgb25WYWx1ZUNoYW5nZTogX3V0aWxzLm5vb3AsXG4gIG9uQ2hhbmdlOiBfdXRpbHMubm9vcCxcbiAgb25LZXlEb3duOiBfdXRpbHMubm9vcCxcbiAgb25Nb3VzZVVwOiBfdXRpbHMubm9vcCxcbiAgb25Gb2N1czogX3V0aWxzLm5vb3AsXG4gIG9uQmx1cjogX3V0aWxzLm5vb3AsXG4gIGlzQWxsb3dlZDogX3V0aWxzLnJldHVyblRydWVcbn07XG5cbnZhciBDdXJyZW5jeUZvcm1hdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDdXJyZW5jeUZvcm1hdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ3VycmVuY3lGb3JtYXQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ3VycmVuY3lGb3JtYXQpO1xuXG4gICAgLy92YWxpZGF0ZSBwcm9wc1xuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDdXJyZW5jeUZvcm1hdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEN1cnJlbmN5Rm9ybWF0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMudmFsaWRhdGVQcm9wcygpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gX3RoaXMuZm9ybWF0VmFsdWVQcm9wKCk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgIG51bUFzU3RyaW5nOiBfdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkNoYW5nZSA9IF90aGlzLm9uQ2hhbmdlLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm9uS2V5RG93biA9IF90aGlzLm9uS2V5RG93bi5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5vbk1vdXNlVXAgPSBfdGhpcy5vbk1vdXNlVXAuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25Gb2N1cyA9IF90aGlzLm9uRm9jdXMuYmluZChfdGhpcyk7XG4gICAgX3RoaXMub25CbHVyID0gX3RoaXMub25CbHVyLmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDdXJyZW5jeUZvcm1hdCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlSWZSZXF1aXJlZChwcmV2UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZVZhbHVlSWZSZXF1aXJlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlSWZSZXF1aXJlZChwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG5cbiAgICAgIGlmIChwcmV2UHJvcHMgIT09IHByb3BzKSB7XG4gICAgICAgIC8vdmFsaWRhdGUgcHJvcHNcbiAgICAgICAgdGhpcy52YWxpZGF0ZVByb3BzKCk7XG5cbiAgICAgICAgdmFyIHN0YXRlVmFsdWUgPSBzdGF0ZS52YWx1ZTtcblxuICAgICAgICB2YXIgbGFzdE51bVN0ciA9IHN0YXRlLm51bUFzU3RyaW5nIHx8ICcnO1xuXG4gICAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHByb3BzLnZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmZvcm1hdE51bVN0cmluZyhsYXN0TnVtU3RyKSA6IHRoaXMuZm9ybWF0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgaWYgKGZvcm1hdHRlZFZhbHVlICE9PSBzdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgICBudW1Bc1N0cmluZzogdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqIE1pc2MgbWV0aG9kcyAqKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0RmxvYXRTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbG9hdFN0cmluZygpIHtcbiAgICAgIHZhciBudW0gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuXG4gICAgICB2YXIgX2dldFNlcGFyYXRvcnMgPSB0aGlzLmdldFNlcGFyYXRvcnMoKSxcbiAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gX2dldFNlcGFyYXRvcnMuZGVjaW1hbFNlcGFyYXRvcjtcblxuICAgICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKTtcblxuICAgICAgLy9yZW1vdmUgbmVnYXRpb24gZm9yIHJlZ2V4IGNoZWNrXG4gICAgICB2YXIgaGFzTmVnYXRpb24gPSBudW1bMF0gPT09ICctJztcbiAgICAgIGlmIChoYXNOZWdhdGlvbikgbnVtID0gbnVtLnJlcGxhY2UoJy0nLCAnJyk7XG5cbiAgICAgIG51bSA9IChudW0ubWF0Y2gobnVtUmVnZXgpIHx8IFtdKS5qb2luKCcnKS5yZXBsYWNlKGRlY2ltYWxTZXBhcmF0b3IsICcuJyk7XG5cbiAgICAgIC8vcmVtb3ZlIGV4dHJhIGRlY2ltYWxzXG4gICAgICB2YXIgZmlyc3REZWNpbWFsSW5kZXggPSBudW0uaW5kZXhPZignLicpO1xuXG4gICAgICBpZiAoZmlyc3REZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIG51bSA9IG51bS5zdWJzdHJpbmcoMCwgZmlyc3REZWNpbWFsSW5kZXgpICsgJy4nICsgbnVtLnN1YnN0cmluZyhmaXJzdERlY2ltYWxJbmRleCArIDEsIG51bS5sZW5ndGgpLnJlcGxhY2UobmV3IFJlZ0V4cCgoMCwgX3V0aWxzLmVzY2FwZVJlZ0V4cCkoZGVjaW1hbFNlcGFyYXRvciksICdnJyksICcnKTtcbiAgICAgIH1cblxuICAgICAgLy9hZGQgbmVnYXRpb24gYmFja1xuICAgICAgaWYgKGhhc05lZ2F0aW9uKSBudW0gPSAnLScgKyBudW07XG5cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuXG4gICAgLy9yZXR1cm5lZCByZWdleCBhc3N1bWVzIGRlY2ltYWxTZXBhcmF0b3IgaXMgYXMgcGVyIHByb3BcblxuICB9LCB7XG4gICAga2V5OiAnZ2V0TnVtYmVyUmVnZXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROdW1iZXJSZWdleChnLCBpZ25vcmVEZWNpbWFsU2VwYXJhdG9yKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBmb3JtYXQgPSBfcHJvcHMuZm9ybWF0LFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF9wcm9wcy5kZWNpbWFsU2NhbGU7XG5cbiAgICAgIHZhciBfZ2V0U2VwYXJhdG9yczIgPSB0aGlzLmdldFNlcGFyYXRvcnMoKSxcbiAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gX2dldFNlcGFyYXRvcnMyLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKCdcXFxcZCcgKyAoZGVjaW1hbFNlcGFyYXRvciAmJiBkZWNpbWFsU2NhbGUgIT09IDAgJiYgIWlnbm9yZURlY2ltYWxTZXBhcmF0b3IgJiYgIWZvcm1hdCA/ICd8JyArICgwLCBfdXRpbHMuZXNjYXBlUmVnRXhwKShkZWNpbWFsU2VwYXJhdG9yKSA6ICcnKSwgZyA/ICdnJyA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2VwYXJhdG9ycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlcGFyYXRvcnMoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9IF9wcm9wczIuZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICB0aG91c2FuZFNwYWNpbmcgPSBfcHJvcHMyLnRob3VzYW5kU3BhY2luZztcbiAgICAgIHZhciB0aG91c2FuZFNlcGFyYXRvciA9IHRoaXMucHJvcHMudGhvdXNhbmRTZXBhcmF0b3I7XG5cblxuICAgICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yID09PSB0cnVlKSB7XG4gICAgICAgIHRob3VzYW5kU2VwYXJhdG9yID0gJywnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBkZWNpbWFsU2VwYXJhdG9yLFxuICAgICAgICB0aG91c2FuZFNlcGFyYXRvcjogdGhvdXNhbmRTZXBhcmF0b3IsXG4gICAgICAgIHRob3VzYW5kU3BhY2luZzogdGhvdXNhbmRTcGFjaW5nXG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1hc2tBdEluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TWFza0F0SW5kZXgoaW5kZXgpIHtcbiAgICAgIHZhciBfcHJvcHMkbWFzayA9IHRoaXMucHJvcHMubWFzayxcbiAgICAgICAgICBtYXNrID0gX3Byb3BzJG1hc2sgPT09IHVuZGVmaW5lZCA/ICcgJyA6IF9wcm9wcyRtYXNrO1xuXG4gICAgICBpZiAodHlwZW9mIG1hc2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBtYXNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFza1tpbmRleF0gfHwgJyAnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3ZhbGlkYXRlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKCkge1xuICAgICAgdmFyIG1hc2sgPSB0aGlzLnByb3BzLm1hc2s7XG5cbiAgICAgIC8vdmFsaWRhdGUgZGVjaW1hbFNlcGFyYXRvciBhbmQgdGhvdXNhbmRTZXBhcmF0b3JcblxuICAgICAgdmFyIF9nZXRTZXBhcmF0b3JzMyA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfZ2V0U2VwYXJhdG9yczMuZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvciA9IF9nZXRTZXBhcmF0b3JzMy50aG91c2FuZFNlcGFyYXRvcjtcblxuICAgICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXFxuICAgICAgICAgIERlY2ltYWwgc2VwYXJhdG9yIGNhblxcJ3QgYmUgc2FtZSBhcyB0aG91c2FuZCBzZXBhcmF0b3IuXFxuXFxuICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yOiAnICsgdGhvdXNhbmRTZXBhcmF0b3IgKyAnICh0aG91c2FuZFNlcGFyYXRvciA9IHt0cnVlfSBpcyBzYW1lIGFzIHRob3VzYW5kU2VwYXJhdG9yID0gXCIsXCIpXFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3I6ICcgKyBkZWNpbWFsU2VwYXJhdG9yICsgJyAoZGVmYXVsdCB2YWx1ZSBmb3IgZGVjaW1hbFNlcGFyYXRvciBpcyAuKVxcbiAgICAgICAnKTtcbiAgICAgIH1cblxuICAgICAgLy92YWxpZGF0ZSBtYXNrXG4gICAgICBpZiAobWFzaykge1xuICAgICAgICB2YXIgbWFza0FzU3RyID0gbWFzayA9PT0gJ3N0cmluZycgPyBtYXNrIDogbWFzay50b1N0cmluZygpO1xuICAgICAgICBpZiAobWFza0FzU3RyLm1hdGNoKC9cXGQvZykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1xcbiAgICAgICAgICBNYXNrICcgKyBtYXNrICsgJyBzaG91bGQgbm90IGNvbnRhaW4gbnVtZXJpYyBjaGFyYWN0ZXI7XFxuICAgICAgICAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NwbGl0RGVjaW1hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNwbGl0RGVjaW1hbChudW1TdHIpIHtcbiAgICAgIHZhciBhbGxvd05lZ2F0aXZlID0gdGhpcy5wcm9wcy5hbGxvd05lZ2F0aXZlO1xuXG4gICAgICB2YXIgaGFzTmFnYXRpb24gPSBudW1TdHJbMF0gPT09ICctJztcbiAgICAgIHZhciBhZGROZWdhdGlvbiA9IGhhc05hZ2F0aW9uICYmIGFsbG93TmVnYXRpdmU7XG4gICAgICBudW1TdHIgPSBudW1TdHIucmVwbGFjZSgnLScsICcnKTtcblxuICAgICAgdmFyIHBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gICAgICB2YXIgYmVmb3JlRGVjaW1hbCA9IHBhcnRzWzBdO1xuICAgICAgdmFyIGFmdGVyRGVjaW1hbCA9IHBhcnRzWzFdIHx8ICcnO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBiZWZvcmVEZWNpbWFsOiBiZWZvcmVEZWNpbWFsLFxuICAgICAgICBhZnRlckRlY2ltYWw6IGFmdGVyRGVjaW1hbCxcbiAgICAgICAgaGFzTmFnYXRpb246IGhhc05hZ2F0aW9uLFxuICAgICAgICBhZGROZWdhdGlvbjogYWRkTmVnYXRpb25cbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIE1pc2MgbWV0aG9kcyBlbmQgKiovXG5cbiAgICAvKiogY2FyZXQgc3BlY2lmaWMgbWV0aG9kcyAqKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MsIGN1cnJlbnRWYWx1ZSkge1xuICAgICAgLyogc2V0dGluZyBjYXJldCBwb3NpdGlvbiB3aXRoaW4gdGltZW91dCBvZiAwbXMgaXMgcmVxdWlyZWQgZm9yIG1vYmlsZSBjaHJvbWUsXHJcbiAgICAgIG90aGVyd2lzZSBicm93c2VyIHJlc2V0cyB0aGUgY2FyZXQgcG9zaXRpb24gYWZ0ZXIgd2Ugc2V0IGl0XHJcbiAgICAgIFdlIGFyZSBhbHNvIHNldHRpbmcgaXQgd2l0aG91dCB0aW1lb3V0IHNvIHRoYXQgaW4gbm9ybWFsIGJyb3dzZXIgd2UgZG9uJ3Qgc2VlIHRoZSBmbGlja2VyaW5nICovXG4gICAgICAoMCwgX3V0aWxzLnNldENhcmV0UG9zaXRpb24pKGVsLCBjYXJldFBvcyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGVsLnZhbHVlID09PSBjdXJyZW50VmFsdWUpICgwLCBfdXRpbHMuc2V0Q2FyZXRQb3NpdGlvbikoZWwsIGNhcmV0UG9zKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIC8qIFRoaXMga2VlcHMgdGhlIGNhcmV0IHdpdGhpbiB0eXBpbmcgYXJlYSBzbyBwZW9wbGUgY2FuJ3QgdHlwZSBpbiBiZXR3ZWVuIHByZWZpeCBvciBzdWZmaXggKi9cblxuICB9LCB7XG4gICAga2V5OiAnY29ycmVjdENhcmV0UG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgY2FyZXRQb3MsIGRpcmVjdGlvbikge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeCA9IF9wcm9wczMucHJlZml4LFxuICAgICAgICAgIHN1ZmZpeCA9IF9wcm9wczMuc3VmZml4LFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczMuZm9ybWF0O1xuXG4gICAgICAvL2luIGNhc2Ugb2YgZm9ybWF0IGFzIG51bWJlciBsaW1pdCBiZXR3ZWVuIHByZWZpeCBhbmQgc3VmZml4XG5cbiAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgIHZhciBoYXNOZWdhdGlvbiA9IHZhbHVlWzBdID09PSAnLSc7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChjYXJldFBvcywgcHJlZml4Lmxlbmd0aCArIChoYXNOZWdhdGlvbiA/IDEgOiAwKSksIHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICAvL2luIGNhc2UgaWYgY3VzdG9tIGZvcm1hdCBtZXRob2QgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSByZXR1cm4gY2FyZXRQb3M7XG5cbiAgICAgIC8qIGluIGNhc2UgZm9ybWF0IGlzIHN0cmluZyBmaW5kIHRoZSBjbG9zZXN0ICMgcG9zaXRpb24gZnJvbSB0aGUgY2FyZXQgcG9zaXRpb24gKi9cblxuICAgICAgLy9pbiBjYXNlIHRoZSBjYXJldFBvcyBoYXZlIGlucHV0IHZhbHVlIG9uIGl0IGRvbid0IGRvIGFueXRoaW5nXG4gICAgICBpZiAoZm9ybWF0W2NhcmV0UG9zXSA9PT0gJyMnICYmICgwLCBfdXRpbHMuY2hhcklzTnVtYmVyKSh2YWx1ZVtjYXJldFBvc10pKSByZXR1cm4gY2FyZXRQb3M7XG5cbiAgICAgIC8vaWYgY2FyZXRQb3MgaXMganVzdCBhZnRlciBpbnB1dCB2YWx1ZSBkb24ndCBkbyBhbnl0aGluZ1xuICAgICAgaWYgKGZvcm1hdFtjYXJldFBvcyAtIDFdID09PSAnIycgJiYgKDAsIF91dGlscy5jaGFySXNOdW1iZXIpKHZhbHVlW2NhcmV0UG9zIC0gMV0pKSByZXR1cm4gY2FyZXRQb3M7XG5cbiAgICAgIC8vZmluZCB0aGUgbmVhcmVzdCBjYXJldCBwb3NpdGlvblxuICAgICAgdmFyIGZpcnN0SGFzaFBvc2l0aW9uID0gZm9ybWF0LmluZGV4T2YoJyMnKTtcbiAgICAgIHZhciBsYXN0SGFzaFBvc2l0aW9uID0gZm9ybWF0Lmxhc3RJbmRleE9mKCcjJyk7XG5cbiAgICAgIC8vbGltaXQgdGhlIGN1cnNvciBiZXR3ZWVuIHRoZSBmaXJzdCAjIHBvc2l0aW9uIGFuZCB0aGUgbGFzdCAjIHBvc2l0aW9uXG4gICAgICBjYXJldFBvcyA9IE1hdGgubWluKE1hdGgubWF4KGNhcmV0UG9zLCBmaXJzdEhhc2hQb3NpdGlvbiksIGxhc3RIYXNoUG9zaXRpb24gKyAxKTtcblxuICAgICAgdmFyIG5leHRQb3MgPSBmb3JtYXQuc3Vic3RyaW5nKGNhcmV0UG9zLCBmb3JtYXQubGVuZ3RoKS5pbmRleE9mKCcjJyk7XG4gICAgICB2YXIgY2FyZXRMZWZ0Qm91bmQgPSBjYXJldFBvcztcbiAgICAgIHZhciBjYXJldFJpZ2h0Qm91ZCA9IGNhcmV0UG9zICsgKG5leHRQb3MgPT09IC0xID8gMCA6IG5leHRQb3MpO1xuXG4gICAgICAvL2dldCB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIGxhc3QgbnVtYmVyIGlzIHByZXNlbnRcbiAgICAgIHdoaWxlIChjYXJldExlZnRCb3VuZCA+IGZpcnN0SGFzaFBvc2l0aW9uICYmIChmb3JtYXRbY2FyZXRMZWZ0Qm91bmRdICE9PSAnIycgfHwgISgwLCBfdXRpbHMuY2hhcklzTnVtYmVyKSh2YWx1ZVtjYXJldExlZnRCb3VuZF0pKSkge1xuICAgICAgICBjYXJldExlZnRCb3VuZCAtPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ29Ub0xlZnQgPSAhKDAsIF91dGlscy5jaGFySXNOdW1iZXIpKHZhbHVlW2NhcmV0UmlnaHRCb3VkXSkgfHwgZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY2FyZXRQb3MgIT09IGZpcnN0SGFzaFBvc2l0aW9uIHx8IGNhcmV0UG9zIC0gY2FyZXRMZWZ0Qm91bmQgPCBjYXJldFJpZ2h0Qm91ZCAtIGNhcmV0UG9zO1xuXG4gICAgICByZXR1cm4gZ29Ub0xlZnQgPyBjYXJldExlZnRCb3VuZCArIDEgOiBjYXJldFJpZ2h0Qm91ZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDYXJldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2FyZXRQb3NpdGlvbihpbnB1dFZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSwgY2FyZXRQb3MpIHtcbiAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDtcblxuICAgICAgdmFyIHN0YXRlVmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIG51bVJlZ2V4ID0gdGhpcy5nZXROdW1iZXJSZWdleCh0cnVlKTtcbiAgICAgIHZhciBpbnB1dE51bWJlciA9IChpbnB1dFZhbHVlLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJyk7XG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gKGZvcm1hdHRlZFZhbHVlLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJyk7XG4gICAgICB2YXIgaiA9IHZvaWQgMCxcbiAgICAgICAgICBpID0gdm9pZCAwO1xuXG4gICAgICBqID0gMDtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGNhcmV0UG9zOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbnB1dENoYXIgPSBpbnB1dFZhbHVlW2ldIHx8ICcnO1xuICAgICAgICB2YXIgY3VycmVudEZvcm1hdENoYXIgPSBmb3JtYXR0ZWRWYWx1ZVtqXSB8fCAnJztcbiAgICAgICAgLy9ubyBuZWVkIHRvIGluY3JlYXNlIG5ldyBjdXJzb3IgcG9zaXRpb24gaWYgZm9ybWF0dGVkIHZhbHVlIGRvZXMgbm90IGhhdmUgdGhvc2UgY2hhcmFjdGVyc1xuICAgICAgICAvL2Nhc2UgaW5wdXRWYWx1ZSA9IDFhMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gIDEyM1xuICAgICAgICBpZiAoIWN1cnJlbnRJbnB1dENoYXIubWF0Y2gobnVtUmVnZXgpICYmIGN1cnJlbnRJbnB1dENoYXIgIT09IGN1cnJlbnRGb3JtYXRDaGFyKSBjb250aW51ZTtcblxuICAgICAgICAvL1doZW4gd2UgYXJlIHN0cmlwaW5nIG91dCBsZWFkaW5nIHplcm9zIG1haW50YWluIHRoZSBuZXcgY3Vyc29yIHBvc2l0aW9uXG4gICAgICAgIC8vQ2FzZSBpbnB1dFZhbHVlID0gMDAwMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gMjM7XG4gICAgICAgIGlmIChjdXJyZW50SW5wdXRDaGFyID09PSAnMCcgJiYgY3VycmVudEZvcm1hdENoYXIubWF0Y2gobnVtUmVnZXgpICYmIGN1cnJlbnRGb3JtYXRDaGFyICE9PSAnMCcgJiYgaW5wdXROdW1iZXIubGVuZ3RoICE9PSBmb3JtYXR0ZWROdW1iZXIubGVuZ3RoKSBjb250aW51ZTtcblxuICAgICAgICAvL3dlIGFyZSBub3QgdXNpbmcgY3VycmVudEZvcm1hdENoYXIgYmVjYXVzZSBqIGNhbiBjaGFuZ2UgaGVyZVxuICAgICAgICB3aGlsZSAoY3VycmVudElucHV0Q2hhciAhPT0gZm9ybWF0dGVkVmFsdWVbal0gJiYgaiA8IGZvcm1hdHRlZFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIGorKztcbiAgICAgICAgfWorKztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnICYmICFzdGF0ZVZhbHVlKSB7XG4gICAgICAgIC8vc2V0IGl0IHRvIHRoZSBtYXhpbXVtIHZhbHVlIHNvIGl0IGdvZXMgYWZ0ZXIgdGhlIGxhc3QgbnVtYmVyXG4gICAgICAgIGogPSBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIC8vY29ycmVjdCBjYXJldCBwb3NpdGlvbiBpZiBpdHMgb3V0c2lkZSBvZiBlZGl0YWJsZSBhcmVhXG4gICAgICBqID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbihmb3JtYXR0ZWRWYWx1ZSwgaik7XG5cbiAgICAgIHJldHVybiBqO1xuICAgIH1cbiAgICAvKiogY2FyZXQgc3BlY2lmaWMgbWV0aG9kcyBlbmRzICoqL1xuXG4gICAgLyoqIG1ldGhvZHMgdG8gcmVtb3ZlIGZvcm1hdHR0aW5nICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVQcmVmaXhBbmRTdWZmaXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVQcmVmaXhBbmRTdWZmaXgodmFsKSB7XG4gICAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3Byb3BzNC5mb3JtYXQsXG4gICAgICAgICAgcHJlZml4ID0gX3Byb3BzNC5wcmVmaXgsXG4gICAgICAgICAgc3VmZml4ID0gX3Byb3BzNC5zdWZmaXg7XG5cbiAgICAgIC8vcmVtb3ZlIHByZWZpeCBhbmQgc3VmZml4XG5cbiAgICAgIGlmICghZm9ybWF0ICYmIHZhbCkge1xuICAgICAgICB2YXIgaXNOZWdhdGl2ZSA9IHZhbFswXSA9PT0gJy0nO1xuXG4gICAgICAgIC8vcmVtb3ZlIG5lZ2F0aW9uIHNpZ25cbiAgICAgICAgaWYgKGlzTmVnYXRpdmUpIHZhbCA9IHZhbC5zdWJzdHJpbmcoMSwgdmFsLmxlbmd0aCk7XG5cbiAgICAgICAgLy9yZW1vdmUgcHJlZml4XG4gICAgICAgIHZhbCA9IHByZWZpeCAmJiB2YWwuaW5kZXhPZihwcmVmaXgpID09PSAwID8gdmFsLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoLCB2YWwubGVuZ3RoKSA6IHZhbDtcblxuICAgICAgICAvL3JlbW92ZSBzdWZmaXhcbiAgICAgICAgdmFyIHN1ZmZpeExhc3RJbmRleCA9IHZhbC5sYXN0SW5kZXhPZihzdWZmaXgpO1xuICAgICAgICB2YWwgPSBzdWZmaXggJiYgc3VmZml4TGFzdEluZGV4ICE9PSAtMSAmJiBzdWZmaXhMYXN0SW5kZXggPT09IHZhbC5sZW5ndGggLSBzdWZmaXgubGVuZ3RoID8gdmFsLnN1YnN0cmluZygwLCBzdWZmaXhMYXN0SW5kZXgpIDogdmFsO1xuXG4gICAgICAgIC8vYWRkIG5lZ2F0aW9uIHNpZ24gYmFja1xuICAgICAgICBpZiAoaXNOZWdhdGl2ZSkgdmFsID0gJy0nICsgdmFsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcodmFsKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIHZhciBmb3JtYXRBcnJheSA9IGZvcm1hdC5zcGxpdCgnIycpLmZpbHRlcihmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIgIT09ICcnO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgdmFyIG51bVN0ciA9ICcnO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbG4gPSBmb3JtYXRBcnJheS5sZW5ndGg7IGkgPD0gbG47IGkrKykge1xuICAgICAgICB2YXIgcGFydCA9IGZvcm1hdEFycmF5W2ldIHx8ICcnO1xuXG4gICAgICAgIC8vaWYgaSBpcyB0aGUgbGFzdCBmcmFnbWVudCB0YWtlIHRoZSBpbmRleCBvZiBlbmQgb2YgdGhlIHZhbHVlXG4gICAgICAgIC8vRm9yIGNhc2UgbGlrZSArMSAoOTExKSA5MTEgOTEgOTEgaGF2aW5nIHBhdHRlcm4gKzEgKCMjIykgIyMjICMjICMjXG4gICAgICAgIHZhciBpbmRleCA9IGkgPT09IGxuID8gdmFsLmxlbmd0aCA6IHZhbC5pbmRleE9mKHBhcnQsIHN0YXJ0KTtcblxuICAgICAgICAvKiBpbiBhbnkgY2FzZSBpZiB3ZSBkb24ndCBmaW5kIHRoZSBwYXR0ZXJuIHBhcnQgaW4gdGhlIHZhbHVlIGFzc3VtZSB0aGUgdmFsIGFzIG51bWVyaWMgc3RyaW5nXHJcbiAgICAgICAgVGhpcyB3aWxsIGJlIGFsc28gaW4gY2FzZSBpZiB1c2VyIGhhcyBzdGFydGVkIHR5cGluZywgaW4gYW55IG90aGVyIGNhc2UgaXQgd2lsbCBub3QgYmUgLTFcclxuICAgICAgICB1bmxlc3Mgd3JvbmcgcHJvcCB2YWx1ZSBpcyBwcm92aWRlZCAqL1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbnVtU3RyID0gdmFsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bVN0ciArPSB2YWwuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCk7XG4gICAgICAgICAgc3RhcnQgPSBpbmRleCArIHBhcnQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAobnVtU3RyLm1hdGNoKC9cXGQvZykgfHwgW10pLmpvaW4oJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUZvcm1hdHRpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nKHZhbCkge1xuICAgICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczUuZm9ybWF0LFxuICAgICAgICAgIHJlbW92ZUZvcm1hdHRpbmcgPSBfcHJvcHM1LnJlbW92ZUZvcm1hdHRpbmc7XG5cbiAgICAgIGlmICghdmFsKSByZXR1cm4gdmFsO1xuXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICB2YWwgPSB0aGlzLnJlbW92ZVByZWZpeEFuZFN1ZmZpeCh2YWwpO1xuICAgICAgICB2YWwgPSB0aGlzLmdldEZsb2F0U3RyaW5nKHZhbCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbCA9IHRoaXMucmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcodmFsKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbW92ZUZvcm1hdHRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy9jb25kaXRpb24gbmVlZCB0byBiZSBoYW5kbGVkIGlmIGZvcm1hdCBtZXRob2QgaXMgcHJvdmlkZSxcbiAgICAgICAgdmFsID0gcmVtb3ZlRm9ybWF0dGluZyh2YWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gKHZhbC5tYXRjaCgvXFxkL2cpIHx8IFtdKS5qb2luKCcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyBlbmQgKiovXG5cbiAgICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIHN0YXJ0ICoqKi9cbiAgICAvKipcclxuICAgICAqIEZvcm1hdCB3aGVuICMgYmFzZWQgc3RyaW5nIGlzIHByb3ZpZGVkXHJcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bVN0ciBOdW1lcmljIFN0cmluZ1xyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgZm9ybWF0dGVkIFZhbHVlXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0V2l0aFBhdHRlcm4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRXaXRoUGF0dGVybihudW1TdHIpIHtcbiAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDtcblxuICAgICAgdmFyIGhhc2hDb3VudCA9IDA7XG4gICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyQXJ5ID0gZm9ybWF0LnNwbGl0KCcnKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsbiA9IGZvcm1hdC5sZW5ndGg7IGkgPCBsbjsgaSsrKSB7XG4gICAgICAgIGlmIChmb3JtYXRbaV0gPT09ICcjJykge1xuICAgICAgICAgIGZvcm1hdHRlZE51bWJlckFyeVtpXSA9IG51bVN0cltoYXNoQ291bnRdIHx8IHRoaXMuZ2V0TWFza0F0SW5kZXgoaGFzaENvdW50KTtcbiAgICAgICAgICBoYXNoQ291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlZE51bWJlckFyeS5qb2luKCcnKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBGb3JtYXQgdGhlIGdpdmVuIHN0cmluZyBhY2NvcmRpbmcgdG8gdGhvdXNhbmQgc2VwYXJhdG9yIGFuZCB0aG91c2FuZCBzcGFjaW5nXHJcbiAgICAgKiBAcGFyYW0geyp9IGJlZm9yZURlY2ltYWwgXHJcbiAgICAgKiBAcGFyYW0geyp9IHRob3VzYW5kU2VwYXJhdG9yIFxyXG4gICAgICogQHBhcmFtIHsqfSB0aG91c2FuZFNwYWNpbmcgXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0VGhvdXNhbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRUaG91c2FuZChiZWZvcmVEZWNpbWFsLCB0aG91c2FuZFNlcGFyYXRvciwgdGhvdXNhbmRTcGFjaW5nKSB7XG4gICAgICB2YXIgZGlnaXRhbEdyb3VwID0gdm9pZCAwO1xuICAgICAgc3dpdGNoICh0aG91c2FuZFNwYWNpbmcpIHtcbiAgICAgICAgY2FzZSBfdXRpbHMudGhvdXNhbmRHcm91cFNwYWNpbmcudHdvOlxuICAgICAgICAgIGRpZ2l0YWxHcm91cCA9IC8oXFxkKSg/PShcXGR7Mn0pKyg/IVxcZCkpL2c7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgX3V0aWxzLnRob3VzYW5kR3JvdXBTcGFjaW5nLnR3b1NjYWxlZDpcbiAgICAgICAgICBkaWdpdGFsR3JvdXAgPSAvKFxcZCkoPz0oKChcXGR7Mn0pKykoXFxkezF9KSg/IVxcZCkpKS9nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIF91dGlscy50aG91c2FuZEdyb3VwU3BhY2luZy5mb3VyOlxuICAgICAgICAgIGRpZ2l0YWxHcm91cCA9IC8oXFxkKSg/PShcXGR7NH0pKyg/IVxcZCkpL2c7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZGlnaXRhbEdyb3VwID0gLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJlZm9yZURlY2ltYWwucmVwbGFjZShkaWdpdGFsR3JvdXAsICckMScgKyB0aG91c2FuZFNlcGFyYXRvcik7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBudW1TdHIgTnVtZXJpYyBzdHJpbmcvZmxvYXRTdHJpbmddIEl0IGFsd2F5cyBoYXZlIGRlY2ltYWxTZXBhcmF0b3IgYXMgLlxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBmb3JtYXR0ZWQgVmFsdWVcclxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXRBc051bWJlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdEFzTnVtYmVyKG51bVN0cikge1xuICAgICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlY2ltYWxTY2FsZSA9IF9wcm9wczYuZGVjaW1hbFNjYWxlLFxuICAgICAgICAgIGZpeGVkRGVjaW1hbFNjYWxlID0gX3Byb3BzNi5maXhlZERlY2ltYWxTY2FsZSxcbiAgICAgICAgICBwcmVmaXggPSBfcHJvcHM2LnByZWZpeCxcbiAgICAgICAgICBzdWZmaXggPSBfcHJvcHM2LnN1ZmZpeDtcblxuICAgICAgdmFyIF9nZXRTZXBhcmF0b3JzNCA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpLFxuICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yID0gX2dldFNlcGFyYXRvcnM0LnRob3VzYW5kU2VwYXJhdG9yLFxuICAgICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBfZ2V0U2VwYXJhdG9yczQuZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICB0aG91c2FuZFNwYWNpbmcgPSBfZ2V0U2VwYXJhdG9yczQudGhvdXNhbmRTcGFjaW5nO1xuXG4gICAgICB2YXIgaGFzRGVjaW1hbFNlcGFyYXRvciA9IG51bVN0ci5pbmRleE9mKCcuJykgIT09IC0xIHx8IGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZTtcblxuICAgICAgdmFyIF9zcGxpdERlY2ltYWwgPSB0aGlzLnNwbGl0RGVjaW1hbChudW1TdHIpLFxuICAgICAgICAgIGJlZm9yZURlY2ltYWwgPSBfc3BsaXREZWNpbWFsLmJlZm9yZURlY2ltYWwsXG4gICAgICAgICAgYWZ0ZXJEZWNpbWFsID0gX3NwbGl0RGVjaW1hbC5hZnRlckRlY2ltYWwsXG4gICAgICAgICAgYWRkTmVnYXRpb24gPSBfc3BsaXREZWNpbWFsLmFkZE5lZ2F0aW9uOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuXG4gICAgICAvL2FwcGx5IGRlY2ltYWwgcHJlY2lzaW9uIGlmIGl0cyBkZWZpbmVkXG5cblxuICAgICAgaWYgKGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkKSBhZnRlckRlY2ltYWwgPSAoMCwgX3V0aWxzLmxpbWl0VG9TY2FsZSkoYWZ0ZXJEZWNpbWFsLCBkZWNpbWFsU2NhbGUsIGZpeGVkRGVjaW1hbFNjYWxlKTtcblxuICAgICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICAgIGJlZm9yZURlY2ltYWwgPSB0aGlzLmZvcm1hdFRob3VzYW5kKGJlZm9yZURlY2ltYWwsIHRob3VzYW5kU2VwYXJhdG9yLCB0aG91c2FuZFNwYWNpbmcpO1xuICAgICAgfVxuXG4gICAgICAvL2FkZCBwcmVmaXggYW5kIHN1ZmZpeFxuICAgICAgaWYgKHByZWZpeCkgYmVmb3JlRGVjaW1hbCA9IHByZWZpeCArIGJlZm9yZURlY2ltYWw7XG4gICAgICBpZiAoc3VmZml4KSBhZnRlckRlY2ltYWwgPSBhZnRlckRlY2ltYWwgKyBzdWZmaXg7XG5cbiAgICAgIC8vcmVzdG9yZSBuZWdhdGlvbiBzaWduXG4gICAgICBpZiAoYWRkTmVnYXRpb24pIGJlZm9yZURlY2ltYWwgPSAnLScgKyBiZWZvcmVEZWNpbWFsO1xuXG4gICAgICBudW1TdHIgPSBiZWZvcmVEZWNpbWFsICsgKGhhc0RlY2ltYWxTZXBhcmF0b3IgJiYgZGVjaW1hbFNlcGFyYXRvciB8fCAnJykgKyBhZnRlckRlY2ltYWw7XG5cbiAgICAgIHJldHVybiBudW1TdHI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0TnVtU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0TnVtU3RyaW5nKCkge1xuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnJztcbiAgICAgIHZhciBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdDtcblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgZm9ybWF0dGVkVmFsdWUgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICctJyAmJiAhZm9ybWF0KSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gJy0nO1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0V2l0aFBhdHRlcm4oZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gZm9ybWF0KGZvcm1hdHRlZFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRBc051bWJlcihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXRWYWx1ZVByb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRWYWx1ZVByb3AoKSB7XG4gICAgICB2YXIgX3Byb3BzNyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9ybWF0ID0gX3Byb3BzNy5mb3JtYXQsXG4gICAgICAgICAgZGVjaW1hbFNjYWxlID0gX3Byb3BzNy5kZWNpbWFsU2NhbGUsXG4gICAgICAgICAgZml4ZWREZWNpbWFsU2NhbGUgPSBfcHJvcHM3LmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgICAgdmFyIF9wcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzOC52YWx1ZSxcbiAgICAgICAgICBpc051bWVyaWNTdHJpbmcgPSBfcHJvcHM4LmlzTnVtZXJpY1N0cmluZztcblxuICAgICAgLy8gaWYgdmFsdWUgaXMgbm90IGRlZmluZWQgcmV0dXJuIGVtcHR5IHN0cmluZ1xuXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICcnO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlzTnVtZXJpY1N0cmluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vcm91bmQgdGhlIG51bWJlciBiYXNlZCBvbiBkZWNpbWFsU2NhbGVcbiAgICAgIC8vZm9ybWF0IG9ubHkgaWYgbm9uIGZvcm1hdHRlZCB2YWx1ZSBpcyBwcm92aWRlZFxuICAgICAgaWYgKGlzTnVtZXJpY1N0cmluZyAmJiAhZm9ybWF0ICYmIHR5cGVvZiBkZWNpbWFsU2NhbGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhbHVlID0gKDAsIF91dGlscy5yb3VuZFRvUHJlY2lzaW9uKSh2YWx1ZSwgZGVjaW1hbFNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IGlzTnVtZXJpY1N0cmluZyA/IHRoaXMuZm9ybWF0TnVtU3RyaW5nKHZhbHVlKSA6IHRoaXMuZm9ybWF0SW5wdXQodmFsdWUpO1xuXG4gICAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0TmVnYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXROZWdhdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHRoaXMucHJvcHMuYWxsb3dOZWdhdGl2ZTtcblxuICAgICAgdmFyIG5lZ2F0aW9uUmVnZXggPSBuZXcgUmVnRXhwKCcoLSknKTtcbiAgICAgIHZhciBkb3VibGVOZWdhdGlvblJlZ2V4ID0gbmV3IFJlZ0V4cCgnKC0pKC4pKigtKScpO1xuXG4gICAgICAvLyBDaGVjayBudW1iZXIgaGFzICctJyB2YWx1ZVxuICAgICAgdmFyIGhhc05lZ2F0aW9uID0gbmVnYXRpb25SZWdleC50ZXN0KHZhbHVlKTtcblxuICAgICAgLy8gQ2hlY2sgbnVtYmVyIGhhcyAyIG9yIG1vcmUgJy0nIHZhbHVlc1xuICAgICAgdmFyIHJlbW92ZU5lZ2F0aW9uID0gZG91YmxlTmVnYXRpb25SZWdleC50ZXN0KHZhbHVlKTtcblxuICAgICAgLy9yZW1vdmUgbmVnYXRpb25cbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvLS9nLCAnJyk7XG5cbiAgICAgIGlmIChoYXNOZWdhdGlvbiAmJiAhcmVtb3ZlTmVnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZSkge1xuICAgICAgICB2YWx1ZSA9ICctJyArIHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9ybWF0SW5wdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXRJbnB1dCgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG4gICAgICB2YXIgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIC8vZm9ybWF0IG5lZ2F0aW9uIG9ubHkgaWYgd2UgYXJlIGZvcm1hdHRpbmcgYXMgbnVtYmVyXG5cbiAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXROZWdhdGlvbih2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vcmVtb3ZlIGZvcm1hdHRpbmcgZnJvbSBudW1iZXJcbiAgICAgIHZhbHVlID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0TnVtU3RyaW5nKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKioqIGZvcm1hdCBzcGVjaWZpYyBtZXRob2RzIGVuZCAqKiovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzQ2hhcmFjdGVyQUZvcm1hdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyQUZvcm1hdChjYXJldFBvcywgdmFsdWUpIHtcbiAgICAgIHZhciBfcHJvcHM5ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBmb3JtYXQgPSBfcHJvcHM5LmZvcm1hdCxcbiAgICAgICAgICBwcmVmaXggPSBfcHJvcHM5LnByZWZpeCxcbiAgICAgICAgICBzdWZmaXggPSBfcHJvcHM5LnN1ZmZpeCxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfcHJvcHM5LmRlY2ltYWxTY2FsZSxcbiAgICAgICAgICBmaXhlZERlY2ltYWxTY2FsZSA9IF9wcm9wczkuZml4ZWREZWNpbWFsU2NhbGU7XG5cbiAgICAgIHZhciBfZ2V0U2VwYXJhdG9yczUgPSB0aGlzLmdldFNlcGFyYXRvcnMoKSxcbiAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gX2dldFNlcGFyYXRvcnM1LmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAgIC8vY2hlY2sgd2l0aGluIGZvcm1hdCBwYXR0ZXJuXG5cblxuICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnICYmIGZvcm1hdFtjYXJldFBvc10gIT09ICcjJykgcmV0dXJuIHRydWU7XG5cbiAgICAgIC8vY2hlY2sgaW4gbnVtYmVyIGZvcm1hdFxuICAgICAgaWYgKCFmb3JtYXQgJiYgKGNhcmV0UG9zIDwgcHJlZml4Lmxlbmd0aCB8fCBjYXJldFBvcyA+PSB2YWx1ZS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoIHx8IGRlY2ltYWxTY2FsZSAmJiBmaXhlZERlY2ltYWxTY2FsZSAmJiB2YWx1ZVtjYXJldFBvc10gPT09IGRlY2ltYWxTZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2hlY2tJZkZvcm1hdEdvdERlbGV0ZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja0lmRm9ybWF0R290RGVsZXRlZChzdGFydCwgZW5kLCB2YWx1ZSkge1xuICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFyYWN0ZXJBRm9ybWF0KGksIHZhbHVlKSkgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIHdpbGwgY2hlY2sgaWYgYW55IGZvcm1hdHRpbmcgZ290IHJlbW92ZWQgYnkgdGhlIGRlbGV0ZSBvciBiYWNrc3BhY2UgYW5kIHJlc2V0IHRoZSB2YWx1ZVxyXG4gICAgICogSXQgd2lsbCBhbHNvIHdvcmsgYXMgZmFsbGJhY2sgaWYgYW5kcm9pZCBjaG9tZSBrZXlEb3duIGhhbmRsZXIgZG9lcyBub3Qgd29ya1xyXG4gICAgICoqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdjb3JyZWN0SW5wdXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvcnJlY3RJbnB1dFZhbHVlKGNhcmV0UG9zLCBsYXN0VmFsdWUsIHZhbHVlKSB7XG4gICAgICB2YXIgZm9ybWF0ID0gdGhpcy5wcm9wcy5mb3JtYXQ7XG5cbiAgICAgIHZhciBsYXN0TnVtU3RyID0gdGhpcy5zdGF0ZS5udW1Bc1N0cmluZyB8fCAnJztcblxuICAgICAgLy9kb24ndCBkbyBhbnlodGluZyBpZiBzb21ldGhpbmcgZ290IGFkZGVkLCBvciBpZiB2YWx1ZSBpcyBlbXB0eSBzdHJpbmcgKHdoZW4gd2hvbGUgaW5wdXQgaXMgY2xlYXJlZClcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gbGFzdFZhbHVlLmxlbmd0aCB8fCAhdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0ID0gY2FyZXRQb3M7XG4gICAgICB2YXIgbGFzdFZhbHVlUGFydHMgPSAoMCwgX3V0aWxzLnNwbGl0U3RyaW5nKShsYXN0VmFsdWUsIGNhcmV0UG9zKTtcbiAgICAgIHZhciBuZXdWYWx1ZVBhcnRzID0gKDAsIF91dGlscy5zcGxpdFN0cmluZykodmFsdWUsIGNhcmV0UG9zKTtcbiAgICAgIHZhciBkZWxldGVkSW5kZXggPSBsYXN0VmFsdWVQYXJ0c1sxXS5sYXN0SW5kZXhPZihuZXdWYWx1ZVBhcnRzWzFdKTtcbiAgICAgIHZhciBkaWZmID0gZGVsZXRlZEluZGV4ICE9PSAtMSA/IGxhc3RWYWx1ZVBhcnRzWzFdLnN1YnN0cmluZygwLCBkZWxldGVkSW5kZXgpIDogJyc7XG4gICAgICB2YXIgZW5kID0gc3RhcnQgKyBkaWZmLmxlbmd0aDtcblxuICAgICAgLy9pZiBmb3JtYXQgZ290IGRlbGV0ZWQgcmVzZXQgdGhlIHZhbHVlIHRvIGxhc3QgdmFsdWVcbiAgICAgIGlmICh0aGlzLmNoZWNrSWZGb3JtYXRHb3REZWxldGVkKHN0YXJ0LCBlbmQsIGxhc3RWYWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBsYXN0VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIC8vZm9yIG51bWJlcnMgY2hlY2sgaWYgYmVmb3JlRGVjaW1hbCBnb3QgZGVsZXRlZCBhbmQgdGhlcmUgaXMgbm90aGluZyBhZnRlciBkZWNpbWFsLFxuICAgICAgLy9jbGVhciBhbGwgbnVtYmVycyBpbiBzdWNoIGNhc2Ugd2hpbGUga2VlcGluZyB0aGUgLSBzaWduXG4gICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICB2YXIgbnVtZXJpY1N0cmluZyA9IHRoaXMucmVtb3ZlRm9ybWF0dGluZyh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIF9zcGxpdERlY2ltYWwyID0gdGhpcy5zcGxpdERlY2ltYWwobnVtZXJpY1N0cmluZyksXG4gICAgICAgICAgICBiZWZvcmVEZWNpbWFsID0gX3NwbGl0RGVjaW1hbDIuYmVmb3JlRGVjaW1hbCxcbiAgICAgICAgICAgIGFmdGVyRGVjaW1hbCA9IF9zcGxpdERlY2ltYWwyLmFmdGVyRGVjaW1hbCxcbiAgICAgICAgICAgIGFkZE5lZ2F0aW9uID0gX3NwbGl0RGVjaW1hbDIuYWRkTmVnYXRpb247IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG5cbiAgICAgICAgLy9jbGVhciBvbmx5IGlmIHNvbWV0aGluZyBnb3QgZGVsZXRlZFxuXG5cbiAgICAgICAgaWYgKG51bWVyaWNTdHJpbmcubGVuZ3RoIDwgbGFzdE51bVN0ci5sZW5ndGggJiYgYmVmb3JlRGVjaW1hbCA9PT0gJycgJiYgIXBhcnNlRmxvYXQoYWZ0ZXJEZWNpbWFsKSkge1xuICAgICAgICAgIHJldHVybiBhZGROZWdhdGlvbiA/ICctJyA6ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkNoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAgIGUucGVyc2lzdCgpO1xuICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGVsLnZhbHVlO1xuICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gcHJvcHMuaXNBbGxvd2VkO1xuXG4gICAgICB2YXIgbGFzdFZhbHVlID0gc3RhdGUudmFsdWUgfHwgJyc7XG5cbiAgICAgIC8qTWF4IG9mIHNlbGVjdGlvblN0YXJ0IGFuZCBzZWxlY3Rpb25FbmQgaXMgdGFrZW4gZm9yIHRoZSBwYXRjaCBvZiBwaXhlbCBhbmQgb3RoZXIgbW9iaWxlIGRldmljZSBjYXJldCBidWcqL1xuICAgICAgdmFyIGN1cnJlbnRDYXJldFBvc2l0aW9uID0gTWF0aC5tYXgoZWwuc2VsZWN0aW9uU3RhcnQsIGVsLnNlbGVjdGlvbkVuZCk7XG5cbiAgICAgIGlucHV0VmFsdWUgPSB0aGlzLmNvcnJlY3RJbnB1dFZhbHVlKGN1cnJlbnRDYXJldFBvc2l0aW9uLCBsYXN0VmFsdWUsIGlucHV0VmFsdWUpO1xuXG4gICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdElucHV0KGlucHV0VmFsdWUpIHx8ICcnO1xuICAgICAgdmFyIG51bUFzU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKGZvcm1hdHRlZFZhbHVlKTtcblxuICAgICAgdmFyIHZhbHVlT2JqID0ge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgIHZhbHVlOiBudW1Bc1N0cmluZyxcbiAgICAgICAgZmxvYXRWYWx1ZTogcGFyc2VGbG9hdChudW1Bc1N0cmluZylcbiAgICAgIH07XG5cbiAgICAgIGlmICghaXNBbGxvd2VkKHZhbHVlT2JqKSkge1xuICAgICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGxhc3RWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgLy9zZXQgdGhlIHZhbHVlIGltcGVyYXRpdmVseSwgdGhpcyBpcyByZXF1aXJlZCBmb3IgSUUgZml4XG4gICAgICBlbC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuXG4gICAgICAvL2dldCB0aGUgY2FyZXQgcG9zaXRpb25cbiAgICAgIHZhciBjYXJldFBvcyA9IHRoaXMuZ2V0Q2FyZXRQb3NpdGlvbihpbnB1dFZhbHVlLCBmb3JtYXR0ZWRWYWx1ZSwgY3VycmVudENhcmV0UG9zaXRpb24pO1xuXG4gICAgICAvL3NldCBjYXJldCBwb3NpdGlvblxuICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3MsIGZvcm1hdHRlZFZhbHVlKTtcblxuICAgICAgLy9jaGFuZ2UgdGhlIHN0YXRlXG4gICAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLCBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWVPYmopO1xuICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uQmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQmx1cihlKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgIHZhciBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyO1xuICAgICAgdmFyIG51bUFzU3RyaW5nID0gc3RhdGUubnVtQXNTdHJpbmc7XG5cbiAgICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gKDAsIF91dGlscy5maXhMZWFkaW5nWmVybykobnVtQXNTdHJpbmcpO1xuICAgICAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSB0aGlzLmZvcm1hdE51bVN0cmluZyhudW1Bc1N0cmluZyk7XG4gICAgICAgIHZhciB2YWx1ZU9iaiA9IHtcbiAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsXG4gICAgICAgICAgdmFsdWU6IG51bUFzU3RyaW5nLFxuICAgICAgICAgIGZsb2F0VmFsdWU6IHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpXG4gICAgICAgIH07XG5cbiAgICAgICAgLy9jaGFuZ2UgdGhlIHN0YXRlXG4gICAgICAgIGlmIChmb3JtYXR0ZWRWYWx1ZSAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICAgICAgLy8gdGhlIGV2ZW50IG5lZWRzIHRvIGJlIHBlcnNpc3RlZCBiZWNhdXNlIGl0cyBwcm9wZXJ0aWVzIGNhbiBiZSBhY2Nlc3NlZCBpbiBhbiBhc3luY2hyb25vdXMgd2F5XG4gICAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb3BzLm9uVmFsdWVDaGFuZ2UodmFsdWVPYmopO1xuICAgICAgICAgICAgb25CbHVyKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb25CbHVyKGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uS2V5RG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG4gICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgIHZhciBrZXkgPSBlLmtleTtcbiAgICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQsXG4gICAgICAgICAgdmFsdWUgPSBlbC52YWx1ZTtcbiAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuXG4gICAgICB2YXIgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gdm9pZCAwO1xuICAgICAgdmFyIF9wcm9wczEwID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWNpbWFsU2NhbGUgPSBfcHJvcHMxMC5kZWNpbWFsU2NhbGUsXG4gICAgICAgICAgZml4ZWREZWNpbWFsU2NhbGUgPSBfcHJvcHMxMC5maXhlZERlY2ltYWxTY2FsZSxcbiAgICAgICAgICBwcmVmaXggPSBfcHJvcHMxMC5wcmVmaXgsXG4gICAgICAgICAgc3VmZml4ID0gX3Byb3BzMTAuc3VmZml4LFxuICAgICAgICAgIGZvcm1hdCA9IF9wcm9wczEwLmZvcm1hdCxcbiAgICAgICAgICBvbktleURvd24gPSBfcHJvcHMxMC5vbktleURvd247XG5cbiAgICAgIHZhciBpZ25vcmVEZWNpbWFsU2VwYXJhdG9yID0gZGVjaW1hbFNjYWxlICE9PSB1bmRlZmluZWQgJiYgZml4ZWREZWNpbWFsU2NhbGU7XG4gICAgICB2YXIgbnVtUmVnZXggPSB0aGlzLmdldE51bWJlclJlZ2V4KGZhbHNlLCBpZ25vcmVEZWNpbWFsU2VwYXJhdG9yKTtcbiAgICAgIHZhciBuZWdhdGl2ZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnLScpO1xuICAgICAgdmFyIGlzUGF0dGVybkZvcm1hdCA9IHR5cGVvZiBmb3JtYXQgPT09ICdzdHJpbmcnO1xuXG4gICAgICAvL0hhbmRsZSBiYWNrc3BhY2UgYW5kIGRlbGV0ZSBhZ2FpbnN0IG5vbiBudW1lcmljYWwvZGVjaW1hbCBjaGFyYWN0ZXJzIG9yIGFycm93IGtleXNcbiAgICAgIGlmIChrZXkgPT09ICdBcnJvd0xlZnQnIHx8IGtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPSBzZWxlY3Rpb25TdGFydCArIDE7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC8vaWYgZXhwZWN0ZWRDYXJldFBvc2l0aW9uIGlzIG5vdCBzZXQgaXQgbWVhbnMgd2UgZG9uJ3Qgd2FudCB0byBIYW5kbGUga2V5RG93blxuICAgICAgLy9hbHNvIGlmIG11bHRpcGxlIGNoYXJhY3RlcnMgYXJlIHNlbGVjdGVkIGRvbid0IGhhbmRsZVxuICAgICAgaWYgKGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHNlbGVjdGlvblN0YXJ0ICE9PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdDYXJldFBvc2l0aW9uID0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgICAgdmFyIGxlZnRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5pbmRleE9mKCcjJykgOiBwcmVmaXgubGVuZ3RoO1xuICAgICAgdmFyIHJpZ2h0Qm91bmQgPSBpc1BhdHRlcm5Gb3JtYXQgPyBmb3JtYXQubGFzdEluZGV4T2YoJyMnKSArIDEgOiB2YWx1ZS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoO1xuXG4gICAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0ga2V5ID09PSAnQXJyb3dMZWZ0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICAgIG5ld0NhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBleHBlY3RlZENhcmV0UG9zaXRpb24sIGRpcmVjdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0RlbGV0ZScgJiYgIW51bVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkgJiYgIW5lZ2F0aXZlUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgICB3aGlsZSAoIW51bVJlZ2V4LnRlc3QodmFsdWVbbmV3Q2FyZXRQb3NpdGlvbl0pICYmIG5ld0NhcmV0UG9zaXRpb24gPCByaWdodEJvdW5kKSB7XG4gICAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0JhY2tzcGFjZScgJiYgIW51bVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkgJiYgIW5lZ2F0aXZlUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgICB3aGlsZSAoIW51bVJlZ2V4LnRlc3QodmFsdWVbbmV3Q2FyZXRQb3NpdGlvbiAtIDFdKSAmJiBuZXdDYXJldFBvc2l0aW9uID4gbGVmdEJvdW5kKSB7XG4gICAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbi0tO1xuICAgICAgICB9XG4gICAgICAgIG5ld0NhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBuZXdDYXJldFBvc2l0aW9uLCAnbGVmdCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3Q2FyZXRQb3NpdGlvbiAhPT0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uIHx8IGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA8IGxlZnRCb3VuZCB8fCBleHBlY3RlZENhcmV0UG9zaXRpb24gPiByaWdodEJvdW5kKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICAvKiBOT1RFOiB0aGlzIGlzIGp1c3QgcmVxdWlyZWQgZm9yIHVuaXQgdGVzdCBhcyB3ZSBuZWVkIHRvIGdldCB0aGUgbmV3Q2FyZXRQb3NpdGlvbixcclxuICAgICAgICAgICAgICBSZW1vdmUgdGhpcyB3aGVuIHlvdSBmaW5kIGRpZmZlcmVudCBzb2x1dGlvbiAqL1xuICAgICAgaWYgKGUuaXNVbml0VGVzdFJ1bikge1xuICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBuZXdDYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xuICAgIH1cblxuICAgIC8qKiByZXF1aXJlZCB0byBoYW5kbGUgdGhlIGNhcmV0IHBvc2l0aW9uIHdoZW4gY2xpY2sgYW55d2hlcmUgd2l0aGluIHRoZSBpbnB1dCAqKi9cblxuICB9LCB7XG4gICAga2V5OiAnb25Nb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Nb3VzZVVwKGUpIHtcbiAgICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgc2VsZWN0aW9uRW5kID0gZWwuc2VsZWN0aW9uRW5kLFxuICAgICAgICAgIHZhbHVlID0gZWwudmFsdWU7XG5cblxuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0ID09PSBzZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgdmFyIGNhcmV0UG9zdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgaWYgKGNhcmV0UG9zdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvc3Rpb24sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLm9uTW91c2VVcChlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gV29ya2Fyb3VuZCBDaHJvbWUgYW5kIFNhZmFyaSBidWcgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzc5MzI4XG4gICAgICAvLyAob25Gb2N1cyBldmVudCB0YXJnZXQgc2VsZWN0aW9uU3RhcnQgaXMgYWx3YXlzIDAgYmVmb3JlIHNldFRpbWVvdXQpXG4gICAgICBlLnBlcnNpc3QoKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQsXG4gICAgICAgICAgICB2YWx1ZSA9IGVsLnZhbHVlO1xuXG5cbiAgICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSBfdGhpczIuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIHNlbGVjdGlvblN0YXJ0KTtcbiAgICAgICAgaWYgKGNhcmV0UG9zaXRpb24gIT09IHNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgX3RoaXMyLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvc2l0aW9uLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIucHJvcHMub25Gb2N1cyhlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMxMSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdHlwZSA9IF9wcm9wczExLnR5cGUsXG4gICAgICAgICAgZGlzcGxheVR5cGUgPSBfcHJvcHMxMS5kaXNwbGF5VHlwZSxcbiAgICAgICAgICBjdXN0b21JbnB1dCA9IF9wcm9wczExLmN1c3RvbUlucHV0LFxuICAgICAgICAgIHJlbmRlclRleHQgPSBfcHJvcHMxMS5yZW5kZXJUZXh0O1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcblxuXG4gICAgICB2YXIgb3RoZXJQcm9wcyA9ICgwLCBfdXRpbHMub21pdCkodGhpcy5wcm9wcywgcHJvcFR5cGVzKTtcblxuICAgICAgdmFyIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICBvbktleURvd246IHRoaXMub25LZXlEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogdGhpcy5vbkJsdXJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGlzcGxheVR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICByZXR1cm4gcmVuZGVyVGV4dCA/IHJlbmRlclRleHQodmFsdWUpIHx8IG51bGwgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgb3RoZXJQcm9wcyxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjdXN0b21JbnB1dCkge1xuICAgICAgICB2YXIgQ3VzdG9tSW5wdXQgPSBjdXN0b21JbnB1dDtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEN1c3RvbUlucHV0LCBpbnB1dFByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIGlucHV0UHJvcHMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDdXJyZW5jeUZvcm1hdDtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkN1cnJlbmN5Rm9ybWF0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbkN1cnJlbmN5Rm9ybWF0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxubW9kdWxlLmV4cG9ydHMgPSBDdXJyZW5jeUZvcm1hdDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vb3AgPSBub29wO1xuZXhwb3J0cy5yZXR1cm5UcnVlID0gcmV0dXJuVHJ1ZTtcbmV4cG9ydHMuY2hhcklzTnVtYmVyID0gY2hhcklzTnVtYmVyO1xuZXhwb3J0cy5lc2NhcGVSZWdFeHAgPSBlc2NhcGVSZWdFeHA7XG5leHBvcnRzLmZpeExlYWRpbmdaZXJvID0gZml4TGVhZGluZ1plcm87XG5leHBvcnRzLnNwbGl0U3RyaW5nID0gc3BsaXRTdHJpbmc7XG5leHBvcnRzLmxpbWl0VG9TY2FsZSA9IGxpbWl0VG9TY2FsZTtcbmV4cG9ydHMucm91bmRUb1ByZWNpc2lvbiA9IHJvdW5kVG9QcmVjaXNpb247XG5leHBvcnRzLm9taXQgPSBvbWl0O1xuZXhwb3J0cy5zZXRDYXJldFBvc2l0aW9uID0gc2V0Q2FyZXRQb3NpdGlvbjtcblxuXG4vLyBiYXNpYyBub29wIGZ1bmN0aW9uXG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjaGFySXNOdW1iZXIoY2hhcikge1xuICByZXR1cm4gISEoY2hhciB8fCAnJykubWF0Y2goL1xcZC8pO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiBmaXhMZWFkaW5nWmVybyhudW1TdHIpIHtcbiAgaWYgKCFudW1TdHIpIHJldHVybiBudW1TdHI7XG4gIHZhciBpc05lZ2F0aXZlID0gbnVtU3RyWzBdID09PSAnLSc7XG4gIGlmIChpc05lZ2F0aXZlKSBudW1TdHIgPSBudW1TdHIuc3Vic3RyaW5nKDEsIG51bVN0ci5sZW5ndGgpO1xuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXS5yZXBsYWNlKC9eMCsvLCAnJykgfHwgJzAnO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcGFydHNbMV0gfHwgJyc7XG5cbiAgcmV0dXJuICcnICsgKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBiZWZvcmVEZWNpbWFsICsgKGFmdGVyRGVjaW1hbCA/ICcuJyArIGFmdGVyRGVjaW1hbCA6ICcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRTdHJpbmcoc3RyLCBpbmRleCkge1xuICByZXR1cm4gW3N0ci5zdWJzdHJpbmcoMCwgaW5kZXgpLCBzdHIuc3Vic3RyaW5nKGluZGV4KV07XG59XG5cbi8qKlxyXG4gKiBsaW1pdCBkZWNpbWFsIG51bWJlcnMgdG8gZ2l2ZW4gc2NhbGVcclxuICogTm90IHVzZWQgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xyXG4gKi9cbmZ1bmN0aW9uIGxpbWl0VG9TY2FsZShudW1TdHIsIHNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSkge1xuICB2YXIgc3RyID0gJyc7XG4gIHZhciBmaWxsZXIgPSBmaXhlZERlY2ltYWxTY2FsZSA/ICcwJyA6ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8PSBzY2FsZSAtIDE7IGkrKykge1xuICAgIHN0ciArPSBudW1TdHJbaV0gfHwgZmlsbGVyO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCBpcyByZXF1aXJlZCB0byByb3VuZCBwcm9wIHZhbHVlIHRvIGdpdmVuIHNjYWxlLlxyXG4gKiBOb3QgdXNlZCAucm91bmQgb3IgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xyXG4gKi9cbmZ1bmN0aW9uIHJvdW5kVG9QcmVjaXNpb24obnVtU3RyLCBzY2FsZSwgZml4ZWREZWNpbWFsU2NhbGUpIHtcbiAgdmFyIG51bWJlclBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gIHZhciByb3VuZGVkRGVjaW1hbFBhcnRzID0gcGFyc2VGbG9hdCgnMC4nICsgKG51bWJlclBhcnRzWzFdIHx8ICcwJykpLnRvRml4ZWQoc2NhbGUpLnNwbGl0KCcuJyk7XG4gIHZhciBpbnRQYXJ0ID0gbnVtYmVyUGFydHNbMF0uc3BsaXQoJycpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKHJvdW5kZWRTdHIsIGN1cnJlbnQsIGlkeCkge1xuICAgIGlmIChyb3VuZGVkU3RyLmxlbmd0aCA+IGlkeCkge1xuICAgICAgcmV0dXJuIChOdW1iZXIocm91bmRlZFN0clswXSkgKyBOdW1iZXIoY3VycmVudCkpLnRvU3RyaW5nKCkgKyByb3VuZGVkU3RyLnN1YnN0cmluZygxLCByb3VuZGVkU3RyLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50ICsgcm91bmRlZFN0cjtcbiAgfSwgcm91bmRlZERlY2ltYWxQYXJ0c1swXSk7XG5cbiAgdmFyIGRlY2ltYWxQYXJ0ID0gbGltaXRUb1NjYWxlKHJvdW5kZWREZWNpbWFsUGFydHNbMV0gfHwgJycsIChudW1iZXJQYXJ0c1sxXSB8fCAnJykubGVuZ3RoLCBmaXhlZERlY2ltYWxTY2FsZSk7XG5cbiAgcmV0dXJuIGludFBhcnQgKyAoZGVjaW1hbFBhcnQgPyAnLicgKyBkZWNpbWFsUGFydCA6ICcnKTtcbn1cblxuZnVuY3Rpb24gb21pdChvYmosIGtleU1hcHMpIHtcbiAgdmFyIGZpbHRlcmVkT2JqID0ge307XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFrZXlNYXBzW2tleV0pIGZpbHRlcmVkT2JqW2tleV0gPSBvYmpba2V5XTtcbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZE9iajtcbn1cblxuLyoqIHNldCB0aGUgY2FyZXQgcG9zaXRvbiBpbiBhbiBpbnB1dCBmaWVsZCAqKi9cbmZ1bmN0aW9uIHNldENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zKSB7XG4gIGVsLnZhbHVlID0gZWwudmFsdWU7XG4gIC8vIF4gdGhpcyBpcyB1c2VkIHRvIG5vdCBvbmx5IGdldCBcImZvY3VzXCIsIGJ1dFxuICAvLyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZSBpdCBldmVyeXRoaW5nIC1zZWxlY3RlZC1cbiAgLy8gKGl0IGNhdXNlcyBhbiBpc3N1ZSBpbiBjaHJvbWUsIGFuZCBoYXZpbmcgaXQgZG9lc24ndCBodXJ0IGFueSBvdGhlciBicm93c2VyKVxuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBpZiAoZWwuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLm1vdmUoJ2NoYXJhY3RlcicsIGNhcmV0UG9zKTtcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIChlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCBhZGRlZCBmb3IgRmlyZWZveCBidWcpXG4gICAgaWYgKGVsLnNlbGVjdGlvblN0YXJ0IHx8IGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwKSB7XG4gICAgICBlbC5mb2N1cygpO1xuICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhaWwgY2l0eSwgZm9ydHVuYXRlbHkgdGhpcyBuZXZlciBoYXBwZW5zIChhcyBmYXIgYXMgSSd2ZSB0ZXN0ZWQpIDopXG4gICAgZWwuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxudmFyIHRob3VzYW5kR3JvdXBTcGFjaW5nID0gZXhwb3J0cy50aG91c2FuZEdyb3VwU3BhY2luZyA9IHtcbiAgdHdvOiAnMicsXG4gIHR3b1NjYWxlZDogJzJzJyxcbiAgdGhyZWU6ICczJyxcbiAgZm91cjogJzQnXG59OyJdLCJzb3VyY2VSb290IjoiIn0=
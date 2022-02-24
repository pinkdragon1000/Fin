(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*********************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true);
    exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);"]);
    exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap);"]);
    exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Inter&display=swap);"]); // Module

    exports.push([module.i, "\n\n/* You can add global styles to this file, and also import other style files */\n:root {\n    --fin-black: rgba(26, 26, 26, 1);\n    --fin-black-transparent: rgba(26, 26, 26, 0.5);\n    --fin-white: rgba(255, 255, 255, 1);\n    --fin-blue-1: rgba(3, 100, 255, 1);\n    --fin-blue-2: rgba(48, 98, 178, 1);\n    --fin-gradient: linear-gradient(25deg, rgba(233, 64, 87, 1), rgba(242, 113, 33, 1));\n    --fin-neutral-1: rgba(117, 117, 117, 1);\n    --fin-neutral-2: rgba(148, 148, 148, 1);\n    --fin-neutral-3: rgba(172, 172, 172, 1);\n    --fin-neutral-3-transparent: rgba(172, 172, 172, 0.2);\n    --fin-neutral-3-transparent-2: rgba(172, 172, 172, 0.6);\n    --fin-neutral-4: rgba(205, 205, 205, 1);\n    --fin-neutral-5: rgba(233, 233, 233, 1);\n    --fin-neutral-6: rgba(245, 245, 245, 1);\n}\n::-webkit-input-placeholder {\n    font-style: italic;\n    color: var(--fin-neutral-3);\n}\nhtml {\n    min-width: 39.6875rem;\n}\nbody {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: var(--fin-white);\n    font-family: Inter, sans-serif;\n    color: var(--fin-black);\n}\nh1,\nh2,\nh3,\nh5,\np {\n    margin: 0.5rem 0;\n}\nh1 {\n    font-size: 4rem;\n}\nh2 {\n    font-size: 1.75rem;\n}\nh3 {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\nh4 {\n    font-size: 1.375rem;\n    margin: 0.25rem 0 1.75rem 0;\n    font-weight: 100;\n}\nh5 {\n    font-size: 1.25rem;\n}\np {\n    font-size: 1.125rem;\n    color: var(--fin-neutral-1);\n    font-weight: 400;\n}\na,\na:hover {\n    text-decoration: none;\n    color: var(--fin-blue-2);\n}\nselect {\n    width: 1.2rem;\n    height: 1.2rem;\n    margin-top: 0.3rem;\n}\nselect:focus {\n    outline: none;\n    box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n}\n.float-right {\n    float: right;\n}\nbutton {\n    margin: 0.375rem;\n    color: var(--fin-white);\n    word-wrap: break-word;\n    white-space: normal;\n    cursor: pointer;\n    border: none;\n    padding: 0.5rem 0;\n    font-size: 1rem;\n    border-radius: 0.625rem;\n    letter-spacing: 0.094rem;\n    min-width: 8rem;\n}\nbutton:hover {\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\nbutton:focus {\n    outline: none;\n    box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n}\n.primary {\n    background: var(--fin-gradient);\n    padding: 1rem 2.5rem;\n    text-transform: uppercase;\n}\n.primary:hover {\n    box-shadow: 0.125rem 0.188rem 0.313rem 0.063rem var(--fin-blue-1-transparent);\n}\n.secondary {\n    background-color: var(--fin-white);\n    border: 0.063rem var(--fin-neutral-4) solid;\n    color: var(--fin-neutral-2);\n    padding: 0.75rem 1rem;\n    min-width: 12rem;\n}\n.secondary:hover {\n    box-shadow: 0.063rem 0.125rem 0.5rem 0.063rem var(--fin-neutral-3-transparent);\n}\n.tertiary {\n    color: var(--fin-black);\n    padding: 0.75rem 0rem;\n    text-transform: uppercase;\n}\n.tertiary:hover {\n    background-color: var(--fin-neutral-3-transparent);\n}\n.btn-help {\n    position: fixed;\n    width: 3.75rem;\n    height: 3.75rem;\n    bottom: 3.75rem;\n    right: 3.75rem;\n    min-width: 0rem;\n    border-radius: 3.125rem;\n    background: var(--fin-gradient);\n    box-shadow: 0.125rem 0.125rem 0.1875rem var(--fin-neutral-2);\n    font-size: 2rem;\n    text-shadow: 0.05rem 0.05rem var(--fin-neutral-1);\n}\nhr {\n    color: var(--fin-neutral-5);\n    border: 0.031rem solid;\n    margin: 1.375rem 0;\n}\nform {\n    display: contents;\n}\n.column {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n}\n.column:not(:last-child) {\n    padding-right: 2rem;\n}\n.row {\n    display: flex;\n    flex-direction: row;\n}\n.center {\n    align-items: center;\n}\n.pagetitle {\n    background: var(--fin-gradient);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n}\n.error {\n    background-color: #e94057;\n    padding: 2rem;\n    border-radius: 2rem;\n    color: var(--fin-white);\n}", "", {
      "version": 3,
      "sources": ["styles.css"],
      "names": [],
      "mappings": ";;AAAA,8EAA8E;AAK9E;IACI,gCAAgC;IAChC,8CAA8C;IAC9C,mCAAmC;IACnC,kCAAkC;IAClC,kCAAkC;IAClC,mFAAmF;IACnF,uCAAuC;IACvC,uCAAuC;IACvC,uCAAuC;IACvC,qDAAqD;IACrD,uDAAuD;IACvD,uCAAuC;IACvC,uCAAuC;IACvC,uCAAuC;AAC3C;AAEA;IACI,kBAAkB;IAClB,2BAA2B;AAC/B;AAEA;IACI,qBAAqB;AACzB;AAEA;IACI,SAAS;IACT,mCAAmC;IACnC,kCAAkC;IAClC,8BAA8B;IAC9B,uBAAuB;AAC3B;AAEA;;;;;IAKI,gBAAgB;AACpB;AAEA;IACI,eAAe;AACnB;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;AACpB;AAEA;IACI,kBAAkB;AACtB;AAEA;IACI,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;AACpB;AAEA;;IAEI,qBAAqB;IACrB,wBAAwB;AAC5B;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;AAEA;IACI,aAAa;IACb,gDAAgD;AACpD;AAEA;IACI,YAAY;AAChB;AAEA;IACI,gBAAgB;IAChB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;AACnB;AAEA;IACI,qIAAqI;AACzI;AAEA;IACI,aAAa;IACb,gDAAgD;AACpD;AAEA;IACI,+BAA+B;IAC/B,oBAAoB;IACpB,yBAAyB;AAC7B;AAEA;IACI,6EAA6E;AACjF;AAEA;IACI,kCAAkC;IAClC,2CAA2C;IAC3C,2BAA2B;IAC3B,qBAAqB;IACrB,gBAAgB;AACpB;AAEA;IACI,8EAA8E;AAClF;AAEA;IACI,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;AAC7B;AAEA;IACI,kDAAkD;AACtD;AAEA;IACI,eAAe;IACf,cAAc;IACd,eAAe;IACf,eAAe;IACf,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,+BAA+B;IAC/B,4DAA4D;IAC5D,eAAe;IACf,iDAAiD;AACrD;AAEA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;AACtB;AAEA;IACI,iBAAiB;AACrB;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;AAEA;IACI,mBAAmB;AACvB;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;AAEA;IACI,mBAAmB;AACvB;AAEA;IACI,+BAA+B;IAC/B,oCAAoC;IACpC,6BAA6B;AACjC;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B",
      "file": "styles.css",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n\n@import url(\"https://fonts.googleapis.com/css2?family=Courgette&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Inter&display=swap\");\n:root {\n    --fin-black: rgba(26, 26, 26, 1);\n    --fin-black-transparent: rgba(26, 26, 26, 0.5);\n    --fin-white: rgba(255, 255, 255, 1);\n    --fin-blue-1: rgba(3, 100, 255, 1);\n    --fin-blue-2: rgba(48, 98, 178, 1);\n    --fin-gradient: linear-gradient(25deg, rgba(233, 64, 87, 1), rgba(242, 113, 33, 1));\n    --fin-neutral-1: rgba(117, 117, 117, 1);\n    --fin-neutral-2: rgba(148, 148, 148, 1);\n    --fin-neutral-3: rgba(172, 172, 172, 1);\n    --fin-neutral-3-transparent: rgba(172, 172, 172, 0.2);\n    --fin-neutral-3-transparent-2: rgba(172, 172, 172, 0.6);\n    --fin-neutral-4: rgba(205, 205, 205, 1);\n    --fin-neutral-5: rgba(233, 233, 233, 1);\n    --fin-neutral-6: rgba(245, 245, 245, 1);\n}\n\n::-webkit-input-placeholder {\n    font-style: italic;\n    color: var(--fin-neutral-3);\n}\n\nhtml {\n    min-width: 39.6875rem;\n}\n\nbody {\n    margin: 0;\n    -webkit-font-smoothing: antialiased;\n    background-color: var(--fin-white);\n    font-family: Inter, sans-serif;\n    color: var(--fin-black);\n}\n\nh1,\nh2,\nh3,\nh5,\np {\n    margin: 0.5rem 0;\n}\n\nh1 {\n    font-size: 4rem;\n}\n\nh2 {\n    font-size: 1.75rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n    font-weight: 400;\n}\n\nh4 {\n    font-size: 1.375rem;\n    margin: 0.25rem 0 1.75rem 0;\n    font-weight: 100;\n}\n\nh5 {\n    font-size: 1.25rem;\n}\n\np {\n    font-size: 1.125rem;\n    color: var(--fin-neutral-1);\n    font-weight: 400;\n}\n\na,\na:hover {\n    text-decoration: none;\n    color: var(--fin-blue-2);\n}\n\nselect {\n    width: 1.2rem;\n    height: 1.2rem;\n    margin-top: 0.3rem;\n}\n\nselect:focus {\n    outline: none;\n    box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n}\n\n.float-right {\n    float: right;\n}\n\nbutton {\n    margin: 0.375rem;\n    color: var(--fin-white);\n    word-wrap: break-word;\n    white-space: normal;\n    cursor: pointer;\n    border: none;\n    padding: 0.5rem 0;\n    font-size: 1rem;\n    border-radius: 0.625rem;\n    letter-spacing: 0.094rem;\n    min-width: 8rem;\n}\n\nbutton:hover {\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\nbutton:focus {\n    outline: none;\n    box-shadow: 0rem 0rem 0.313rem var(--fin-blue-1);\n}\n\n.primary {\n    background: var(--fin-gradient);\n    padding: 1rem 2.5rem;\n    text-transform: uppercase;\n}\n\n.primary:hover {\n    box-shadow: 0.125rem 0.188rem 0.313rem 0.063rem var(--fin-blue-1-transparent);\n}\n\n.secondary {\n    background-color: var(--fin-white);\n    border: 0.063rem var(--fin-neutral-4) solid;\n    color: var(--fin-neutral-2);\n    padding: 0.75rem 1rem;\n    min-width: 12rem;\n}\n\n.secondary:hover {\n    box-shadow: 0.063rem 0.125rem 0.5rem 0.063rem var(--fin-neutral-3-transparent);\n}\n\n.tertiary {\n    color: var(--fin-black);\n    padding: 0.75rem 0rem;\n    text-transform: uppercase;\n}\n\n.tertiary:hover {\n    background-color: var(--fin-neutral-3-transparent);\n}\n\n.btn-help {\n    position: fixed;\n    width: 3.75rem;\n    height: 3.75rem;\n    bottom: 3.75rem;\n    right: 3.75rem;\n    min-width: 0rem;\n    border-radius: 3.125rem;\n    background: var(--fin-gradient);\n    box-shadow: 0.125rem 0.125rem 0.1875rem var(--fin-neutral-2);\n    font-size: 2rem;\n    text-shadow: 0.05rem 0.05rem var(--fin-neutral-1);\n}\n\nhr {\n    color: var(--fin-neutral-5);\n    border: 0.031rem solid;\n    margin: 1.375rem 0;\n}\n\nform {\n    display: contents;\n}\n\n.column {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem;\n}\n\n.column:not(:last-child) {\n    padding-right: 2rem;\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n}\n\n.center {\n    align-items: center;\n}\n\n.pagetitle {\n    background: var(--fin-gradient);\n    -webkit-text-fill-color: transparent;\n    -webkit-background-clip: text;\n}\n\n.error {\n    background-color: #e94057;\n    padding: 2rem;\n    border-radius: 2rem;\n    color: var(--fin-white);\n}"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sitarobinson/Desktop/Projects/Fin/angularfrontend/src/styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map
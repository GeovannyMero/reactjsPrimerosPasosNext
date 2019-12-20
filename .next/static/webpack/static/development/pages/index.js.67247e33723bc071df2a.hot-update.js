webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/components/MyLayout */ "./pages/components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\jeffe\\source\\repos\\REACT\\primerReact\\pages\\index.js";




 // const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );
// function Blog () {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello"/>
//                 <PostLink title="World"/>
//             </ul>
//         </Layout>
//     );
// }
//  const Index = props => (
//      <Layout>
//          <h1>Batman Tv Shows</h1>
//          <ul>
//              {props.shows.map(show => (
//                  <li key={show.id}>
//                      <Link href='/p/[i]' as="{`/p/${show.id}}">
//                          <a>{show.name}</a>
//                      </Link>
//                  </li>
//              ))}
//          </ul>
//      </Layout>
//  );
//  Index.getInitialProps = async function(){
//          const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//          const data = await res.json();
//          console.log(`Show data fetched. Count: ${data.length}`);
//         return {
//             shows: data.map(entry => entry.show)
//         };
// }

function getPosts() {
  return [{
    id: 'hello-next',
    title: 'hello next.js'
  }, {
    id: 'hello-next',
    title: 'hello next.js2'
  }];
}

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2273004811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2273004811",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-2273004811",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2273004811",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2273004811",
    __self: this
  }, "h1.jsx-2273004811,a.jsx-2273004811{font-family:'Arial';}ul.jsx-2273004811{padding:0;}li.jsx-2273004811{list-style:none;margin:5px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamVmZmVcXHNvdXJjZVxccmVwb3NcXFJFQUNUXFxwcmltZXJSZWFjdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFZ0IsQUFJeUMsQUFJekIsQUFFcUIsVUFGcEIsTUFHaUIsSUFOakIsU0FPQSIsImZpbGUiOiJDOlxcVXNlcnNcXGplZmZlXFxzb3VyY2VcXHJlcG9zXFxSRUFDVFxccHJpbWVyUmVhY3RcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vcGFnZXMvY29tcG9uZW50cy9NeUxheW91dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5cclxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXHJcbi8vICAgICA8bGk+XHJcbi8vICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XHJcbi8vICAgICAgICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XHJcbi8vICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgPC9saT5cclxuLy8gKTtcclxuLy8gZnVuY3Rpb24gQmxvZyAoKSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuLy8gICAgICAgICAgICAgPHVsPlxyXG4vLyAgICAgICAgICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiSGVsbG9cIi8+XHJcbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJXb3JsZFwiLz5cclxuLy8gICAgICAgICAgICAgPC91bD5cclxuLy8gICAgICAgICA8L0xheW91dD5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbi8vICBjb25zdCBJbmRleCA9IHByb3BzID0+IChcclxuLy8gICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgICA8aDE+QmF0bWFuIFR2IFNob3dzPC9oMT5cclxuLy8gICAgICAgICAgPHVsPlxyXG4vLyAgICAgICAgICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcclxuLy8gICAgICAgICAgICAgICAgICA8bGkga2V5PXtzaG93LmlkfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3AvW2ldJyBhcz1cIntgL3AvJHtzaG93LmlkfX1cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgIDwvTGF5b3V0PlxyXG4gICAgIFxyXG4vLyAgKTtcclxuXHJcbi8vICBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpe1xyXG4vLyAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcclxuLy8gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xyXG4vLyAgICAgICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgICAgIHNob3dzOiBkYXRhLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxyXG4vLyAgICAgICAgIH07XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGdldFBvc3RzKCl7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHsgaWQ6ICdoZWxsby1uZXh0JywgdGl0bGU6ICdoZWxsbyBuZXh0LmpzJ30sXHJcbiAgICAgICAgeyBpZDogJ2hlbGxvLW5leHQnLCB0aXRsZTogJ2hlbGxvIG5leHQuanMyJ31cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=C:\\Users\\jeffe\\source\\repos\\REACT\\primerReact\\pages\\index.js */"));
} //export default Index;

/***/ })

})
//# sourceMappingURL=index.js.67247e33723bc071df2a.hot-update.js.map
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

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/p/[id]",
    as: "/p/".concat(post.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, post.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pages_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2809046731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2809046731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-2809046731",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/p/[id]",
      as: "/p/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2809046731",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2809046731",
    __self: this
  }, "h1.jsx-2809046731,a.jsx-2809046731{font-family:'Arial';}ul.jsx-2809046731{padding:0;}li.jsx-2809046731{list-style:none;margin:5px 0;}a.jsx-2809046731{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2809046731:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamVmZmVcXHNvdXJjZVxccmVwb3NcXFJFQUNUXFxwcmltZXJSZWFjdFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFZ0IsQUFJeUMsQUFJekIsQUFFcUIsQUFJSyxBQUlULFVBVmhCLEVBV0EsSUFSaUIsSUFOakIsU0FPQSxxQkFHZSxXQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamVmZmVcXHNvdXJjZVxccmVwb3NcXFJFQUNUXFxwcmltZXJSZWFjdFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9wYWdlcy9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcclxuLy8gICAgIDxsaT5cclxuLy8gICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cclxuLy8gICAgICAgICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cclxuLy8gICAgICAgICA8L0xpbms+XHJcbi8vICAgICA8L2xpPlxyXG4vLyApO1xyXG4vLyBmdW5jdGlvbiBCbG9nICgpIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPExheW91dD5cclxuLy8gICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxyXG4vLyAgICAgICAgICAgICA8dWw+XHJcbi8vICAgICAgICAgICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJIZWxsb1wiLz5cclxuLy8gICAgICAgICAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIldvcmxkXCIvPlxyXG4vLyAgICAgICAgICAgICA8L3VsPlxyXG4vLyAgICAgICAgIDwvTGF5b3V0PlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuLy8gIGNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxyXG4vLyAgICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgIDxoMT5CYXRtYW4gVHYgU2hvd3M8L2gxPlxyXG4vLyAgICAgICAgICA8dWw+XHJcbi8vICAgICAgICAgICAgICB7cHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKFxyXG4vLyAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcC9baV0nIGFzPVwie2AvcC8ke3Nob3cuaWR9fVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Nob3cubmFtZX08L2E+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICAgKSl9XHJcbi8vICAgICAgICAgIDwvdWw+XHJcbi8vICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgXHJcbi8vICApO1xyXG5cclxuLy8gIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xyXG4vLyAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXHJcbi8vICAgICAgICAgfTtcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9zdHMoKXtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgeyBpZDogJ2hlbGxvLW5leHQnLCB0aXRsZTogJ2hlbGxvIG5leHQuanMnfSxcclxuICAgICAgICB7IGlkOiAnaGVsbG8tbmV4dCcsIHRpdGxlOiAnaGVsbG8gbmV4dC5qczInfVxyXG4gICAgXVxyXG59XHJcblxyXG5jb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9saT5cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3AvW2lkXVwiIGFzPXtgL3AvJHtwb3N0LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVse1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBJbmRleDsiXX0= */\n/*@ sourceURL=C:\\Users\\jeffe\\source\\repos\\REACT\\primerReact\\pages\\index.js */"));
} //export default Index;

/***/ })

})
//# sourceMappingURL=index.js.c5979c51d74d4939c20d.hot-update.js.map
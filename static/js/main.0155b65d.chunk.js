(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{14:function(n,e,t){},16:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),i=t(7),c=t.n(i),o=(t(14),t(2)),u=t(0),s=t(4),p=t.n(s),b=t(5),l=t(3),d=Object(a.createContext)(),f=function(n){var e=n.children,t="566d41db9d5f116fe1cf9972db7705d5",i=Object(a.useState)(!1),c=Object(l.a)(i,2),o=c[0],u=c[1],s=Object(a.useState)(!0),f=Object(l.a)(s,2),h=f[0],x=f[1],m=Object(a.useState)("Popular"),g=Object(l.a)(m,2),v=g[0],j=g[1],O=Object(a.useState)([]),w=Object(l.a)(O,2),k=w[0],y=w[1],M=Object(a.useState)(""),S=Object(l.a)(M,2),P=S[0],C=S[1],N=Object(a.useState)(1),E=Object(l.a)(N,2),L=E[0],z=E[1],A=Object(a.useState)([]),T=Object(l.a)(A,2),_=T[0],H=T[1],U=Object(a.useState)(!0),X=Object(l.a)(U,2),I=X[0],J=X[1],q=function(){var n=Object(b.a)(p.a.mark((function n(){var e,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(t,"&language=en-US&page=3"));case 2:return e=n.sent,n.next=5,e.json();case 5:a=n.sent,y(a);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=Object(b.a)(p.a.mark((function n(){var e,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(t,"&language=en-US&page=").concat(L));case 2:return e=n.sent,n.next=5,e.json();case 5:a=n.sent,""===P.trim()&&H(a);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),D=function(){var n=Object(b.a)(p.a.mark((function n(e){var a,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""!==P.trim()){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(t,"&language=en-US&query=").concat(P,"&page=").concat(L));case 5:return a=n.sent,n.next=8,a.json();case 8:r=n.sent,H(r),J(!1);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();Object(a.useEffect)((function(){q()}),[]),Object(a.useEffect)((function(){""===P.trim()&&J(!0),B()}),[P,L]),Object(a.useEffect)((function(){var n=setTimeout((function(){u(!1)}),1300);return function(){return clearTimeout(n)}}),[_,L]);return r.a.createElement(d.Provider,{value:{hiddenMenu:h,setHiddenMenu:x,activeLink:v,setActiveLink:j,popularMovies:k,search:P,setSearch:C,currentPage:L,setCurrentPage:z,movies:_,setMovies:H,getPopularMovies:q,getMovies:B,handleSearch:D,isLoading:o,setIsLoading:u,showPagination:I,setShowPagination:J,newPage:function(n){"next"===n?(z(L+1),u(!0)):"previous"===n&&1!==L&&z(L-1)}}},e)};function h(){var n=Object(o.a)(["\n  width: 100%;\n  max-width: 1300px;\n  margin: 0 auto;\n"]);return h=function(){return n},n}var x=Object(u.a)(h()),m=function(n){var e=n.children;return Object(u.b)("div",{css:x,className:"container"},e)};function g(){var n=Object(o.a)(["\n  font-size: 22px;\n  color: #cb6ad2;\n  font-weight: 900;\n  user-select: none;\n"]);return g=function(){return n},n}var v=Object(u.a)(g()),j=function(){return Object(u.b)("h2",{css:v},"MovieApp")};function O(){var n=Object(o.a)(["\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 22px;\n  margin-right: 24px;\n  font-weight: 700;\n  cursor: pointer;\n  user-select: none;\n  @media (max-width: 860px) {\n    font-size: 40px;\n  }\n"]);return O=function(){return n},n}var w=Object(u.a)(O()),k=function(n){var e=n.btnText,t=Object(a.useContext)(d),r=t.setHiddenMenu,i=t.activeLink,c=t.setActiveLink;return Object(u.b)("button",{onClick:function(){c(e),r(!0)},css:w,style:{color:i===e?"#f9a5ff":"#fff"}},e)};function y(){var n=Object(o.a)(["\n  padding-left: 80px;\n  @media (max-width: 860px) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 1;\n    min-height: 100vh;\n    background: rgba(0, 0, 0, 0.8);\n    padding-left: 0;\n    padding: 20px 50px;\n    width: 100%;\n    max-width: 340px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    transition: all 800ms ease-in-out;\n    &.hidden {\n      left: -600px;\n      opacity: 0;\n    }\n  }\n"]);return y=function(){return n},n}var M=Object(u.a)(y()),S=function(){var n=Object(a.useContext)(d).hiddenMenu;return Object(u.b)("div",{css:M,className:(n?"hidden":"")+" heroNavMenu"},Object(u.b)(k,{btnText:"Popular"}),Object(u.b)(k,{btnText:"All Movies"}))};function P(){var n=Object(o.a)(["\n  height: 40px;\n  min-height: 40px;\n  input {\n    text-transform: capitalize;\n    border: none;\n    outline: none;\n    border-radius: 50px;\n    border: 1px solid #2c2f39;\n    background: transparent;\n    padding: 10px 16px;\n    width: 260px;\n    color: #f9a5ff;\n    &::placeholder {\n      color: #f9a5ff;\n      letter-spacing: 1px;\n    }\n  }\n  @media (max-width: 860px) {\n    input {\n      width: 220px;\n    }\n  }\n"]);return P=function(){return n},n}var C=Object(u.a)(P()),N=function(){var n=Object(a.useContext)(d),e=n.search,t=n.setSearch,r=n.handleSearch,i=n.activeLink;return Object(u.b)("form",{css:C,onSubmit:r},"Popular"!==i&&Object(u.b)("input",{type:"text",placeholder:"Search for movies...",value:e,onChange:function(n){return t(n.target.value)}}))};function E(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 80px;\n  padding: 20px 0;\n  background: #212229;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    .wrapper {\n      display: flex;\n      align-items: center;\n    }\n    #burgerMenu {\n      color: #f9a5ff;\n      cursor: pointer;\n      display: none;\n    }\n  }\n  @media (max-width: 860px) {\n    .container {\n      #burgerMenu {\n        display: block;\n      }\n    }\n  }\n  @media (max-width: 1365px) {\n    .container {\n      max-width: 90%;\n    }\n  }\n"]);return E=function(){return n},n}var L=Object(u.a)(E()),z=function(){var n=Object(a.useContext)(d),e=n.hiddenMenu,t=n.setHiddenMenu;return Object(u.b)("nav",{css:L},Object(u.b)(m,null,Object(u.b)("div",{className:"wrapper"},Object(u.b)(j,null),Object(u.b)(S,null)),Object(u.b)(N,null),Object(u.b)("i",{id:"burgerMenu",className:e?"fas fa-bars":"fas fa-times",onClick:function(){return t(!e)}})))};function A(){var n=Object(o.a)(["\n  width: 100%;\n  .container {\n    &:nth-child(1) {\n      height: 81vh;\n      overflow-y: scroll;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      &::-webkit-scrollbar {\n        width: 0;\n      }\n      .error {\n        font-size: 38px;\n        color: red;\n        height: 32px;\n      }\n    }\n    img {\n      width: 100%;\n      max-width: 240px;\n      height: 360px;\n      margin: 10px 5px; \n      transition: 500ms transform;\n      &:hover{\n        transform: scale(1.02);\n      }\n    }\n  }\n  @media (max-width: 600px) {\n    .container {\n      img {\n        max-width: 100%;\n        height: 500px;\n      }\n    }\n  }\n  @media (min-width: 601px) and (max-width: 854px) {\n    .container {\n      img {\n        max-width: 48%;\n      }\n    }\n  }\n  @media (min-width: 855px) and (max-width: 1144px) {\n    .container {\n      img {\n        max-width: 31%;\n      }\n    }\n  }\n  @media (min-width: 1145px) and (max-width: 1365px) {\n    .container {\n      img {\n        max-width: 23.4%;\n      }\n    }\n  }\n"]);return A=function(){return n},n}var T=Object(u.a)(A()),_=function(){var n=Object(a.useContext)(d).popularMovies;return Object(u.b)("div",{css:T,className:"popularMovies"},Object(u.b)(m,null,n.results&&n.results.map((function(n,e){return Object(u.b)("img",{key:e,src:"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:"poster"})}))))};function H(){var n=Object(o.a)(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 10px;\n  background: #3498db;\n  border-radius: 5px;\n  animation: spinner 1.8s ease-in-out infinite;\n  &:before,\n  &:after {\n    position: absolute;\n    display: block;\n    content: "";\n    animation: spinner 1.8s ease-in-out infinite;\n    height: 10px;\n    border-radius: 5px;\n  }\n  &:before {\n    top: -20px;\n    left: 10px;\n    width: 40px;\n    background: #ef4836;\n  }\n  &:after {\n    bottom: -20px;\n    width: 35px;\n    background: #f5ab35;\n  }\n  @keyframes spinner {\n    0% {\n        transform: translateX(40px);\n    }\n    50% {\n        transform: translateX(-30px);\n    }\n    100% {\n        transform: translateX(40px);\n    }\n  }\n']);return H=function(){return n},n}var U=Object(u.a)(H()),X=function(){return Object(u.b)("div",{css:U,className:"loader"})};function I(){var n=Object(o.a)(["\n  width: 100%;\n  .container {\n    padding: 0px 2px;\n    &:nth-child(1) {\n      height: 68vh;\n      overflow-y: scroll;\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      &::-webkit-scrollbar {\n        width: 0;\n      }\n      .error {\n        font-size: 38px;\n        color: red;\n        height: 32px;\n      }\n    }\n    img {\n      width: 100%;\n      max-width: 240px;\n      height: 360px;\n      margin: 10px 0;\n      transition: 500ms transform;\n    } \n    img:hover{\n      transform: scale(1.02);\n    }\n  }\n  @media (max-width: 600px) {\n    .container {\n      img {\n        max-width: 100%;\n        height: 500px;\n      }\n    }\n  }\n  @media (min-width: 601px) and (max-width: 854px) {\n    .container {\n      img {\n        max-width: 48%;\n      }\n    }\n  }\n  @media (min-width: 855px) and (max-width: 1144px) {\n    .container {\n      img {\n        max-width: 31%;\n      }\n    }\n  }\n  @media (min-width: 1145px) and (max-width: 1365px) {\n    .container {\n      img {\n        max-width: 23.4%;\n      }\n    }\n  }\n"]);return I=function(){return n},n}var J=Object(u.a)(I()),q=function(){var n=Object(a.useContext)(d),e=n.movies,t=n.isLoading;return Object(u.b)("div",{css:J,className:"movies"},Object(u.b)(m,null,e.results&&0===e.results.length&&Object(u.b)("h1",{className:"error"},"Result not found"),t?Object(u.b)(X,null):e.results&&e.results.map((function(n,e){return Object(u.b)("img",{key:e,src:"https://image.tmdb.org/t/p/w400/".concat(n.poster_path),alt:"poster"})}))))};function B(){var n=Object(o.a)(["\n  width: 100%;\n  .container {\n    &:nth-child(1) {\n      height: 80px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      button {\n        border: none;\n        outline: none;\n        background: #32de57;\n        color: #fff;\n        font-size: 20px;\n        font-weight: 600;\n        border-radius: 4px;\n        width: 160px;\n        padding: 10px 0;\n        cursor: pointer;\n        user-select: none;\n        margin: 0 10px;\n        transition: background 500ms ease-in-out;\n        &:hover {\n          background: #259a3e;\n        }\n      }\n    }\n  }\n"]);return B=function(){return n},n}var D=Object(u.a)(B()),F=function(){var n=Object(a.useContext)(d),e=n.newPage,t=n.currentPage,i=n.showPagination;return Object(u.b)("div",{css:D,className:"moviesPagination"},i&&Object(u.b)(m,null,Object(u.b)(r.a.Fragment,null,Object(u.b)("button",{style:{cursor:1!==t?"pointer":"not-allowed",background:1!==t?"#32de57":"#303847"},onClick:function(){return e("previous")}},"Prev Page"),Object(u.b)("button",{onClick:function(){return e("next")}},"Next Page"))))};function R(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: calc(100vh - 80px);\n  display: flex; \n  > .container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n  @media (max-width: 1365px) {\n    > .container {\n      max-width: 90%;\n    }\n  }\n"]);return R=function(){return n},n}var G=Object(u.a)(R()),K=function(){var n=Object(a.useContext)(d).activeLink;return Object(u.b)("div",{css:G,className:"output"},"All Movies"===n&&Object(u.b)(m,null,Object(u.b)(q,null),Object(u.b)(F,null)),"Popular"===n&&Object(u.b)(m,null,Object(u.b)(_,null)))};function Q(){var n=Object(o.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: #1b1c22;\n"]);return Q=function(){return n},n}var V=Object(u.a)(Q()),W=function(){return Object(u.b)("section",{css:V,className:"hero"},Object(u.b)(z,null),Object(u.b)(K,null))},Y=function(){return r.a.createElement(f,null,r.a.createElement(W,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))},9:function(n,e,t){n.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.0155b65d.chunk.js.map
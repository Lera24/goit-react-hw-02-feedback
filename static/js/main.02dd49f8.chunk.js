(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,r,a,i,o,s,b=n(1),j=n.n(b),d=n(9),u=n.n(d),l=(n(10),n(11)),h=n(2),O=n(3),p=n(5),f=n(4),v=n(6),g=n(7),x=g.a.li(c||(c=Object(v.a)(["\n  margin-bottom: 5px;\n"]))),k=n(0),m=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(k.jsx)("div",{children:Object(k.jsxs)("ul",{children:[Object(k.jsx)(x,{children:Object(k.jsxs)("span",{children:["Good: ",t]})}),Object(k.jsx)(x,{children:Object(k.jsxs)("span",{children:["Neutral: ",n]})}),Object(k.jsx)(x,{children:Object(k.jsxs)("span",{children:["Bad: ",c]})}),Object(k.jsx)(x,{children:Object(k.jsxs)("span",{children:["Total: ",r]})}),Object(k.jsx)(x,{children:Object(k.jsxs)("span",{children:["Positive feedback: ",a]})})]})})}}]),n}(b.Component),y=g.a.button(r||(r=Object(v.a)(["\n  background-color: inherit;\n  border: 1px solid rgb(133, 133, 133);\n  border-radius: 20px;\n  &:hover {\n    cursor: pointer;\n    background-color: rgb(173, 216, 230);\n    border-color: rgb(173, 216, 230);\n  }\n"]))),F=g.a.ul(a||(a=Object(v.a)(["\n  display: flex;\n"]))),P=g.a.li(i||(i=Object(v.a)(["\n  margin-right: 10px;\n"]))),C=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(F,{children:this.props.options.map((function(t){return Object(k.jsx)(P,{children:Object(k.jsx)(y,{type:"button",name:t,onClick:e.props.onLeaveFeedback,children:t})},t)}))})}}]),n}(b.Component),w=g.a.h1(o||(o=Object(v.a)(["\n  font-size: 24px;\n  font-weight: normal;\n"]))),S=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(k.jsxs)("div",{children:[Object(k.jsx)(w,{children:t}),n]})}}]),n}(b.Component),T=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(k.jsx)("p",{children:this.props.title})}}]),n}(b.Component),N=g.a.div(s||(s=Object(v.a)(["\n  padding-left: 20px;\n"]))),L=(n(22),function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.addingScore=function(t){var n=t.target.name;e.setState((function(e){return Object(l.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=t.neutral,r=t.bad,a=Number.parseInt(100*n/(n+c+r));return isNaN(a)?0:"".concat(a," %")},e}return Object(O.a)(n,[{key:"render",value:function(){var e=Object.keys(this.state);return Object(k.jsxs)(N,{children:[Object(k.jsx)(S,{title:"Please leave feedback",children:Object(k.jsx)(C,{options:e,onLeaveFeedback:this.addingScore})}),Object(k.jsx)(S,{title:"Statistics",children:0===this.countTotalFeedback()?Object(k.jsx)(T,{title:"No feedback given"}):Object(k.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(b.Component)),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};u.a.render(Object(k.jsx)(j.a.StrictMode,{children:Object(k.jsx)(L,{})}),document.getElementById("root")),B()}},[[23,1,2]]]);
//# sourceMappingURL=main.02dd49f8.chunk.js.map
(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(A,t,e){A.exports={list:"Statistics_list__2wKzm",item:"Statistics_item__3HBB3"}},,,,function(A,t,e){A.exports={title:"Section_title__2DxtX",container:"Section_container__1zmu0"}},function(A,t,e){A.exports={header:"Header_header__wMXek",img:"Header_img__3u6Rt"}},,function(A,t,e){A.exports={message:"Notification_message__XTG3m",blink:"Notification_blink__1xn2v"}},function(A,t,e){A.exports={btn:"FeedbackOptions_btn__3x01L"}},function(A,t,e){A.exports={Container:"Container_Container__14ZGj"}},,,,,function(A,t,e){},,,,function(A,t,e){"use strict";e.r(t);var n=e(1),a=e.n(n),c=e(8),r=e.n(c),i=(e(16),e(3)),d=e(9),s=e.n(d),b=e(0),l=function(A){var t=A.message;return Object(b.jsx)("p",{className:s.a.message,children:t})},u=e(2),f=e.n(u),o=function(A){var t=A.good,e=A.neutral,n=A.bad,a=A.total,c=A.percentage;return Object(b.jsxs)(b.Fragment,{children:[a>0&&Object(b.jsxs)("ul",{className:f.a.list,children:[Object(b.jsxs)("li",{className:f.a.item,children:["Goog: ",t]}),Object(b.jsxs)("li",{className:f.a.item,children:["Neutral: ",e]}),Object(b.jsxs)("li",{className:f.a.item,children:["Bad: ",n]}),Object(b.jsxs)("li",{className:f.a.item,children:["Total: ",a]}),Object(b.jsxs)("li",{className:f.a.item,children:["Positive feedback: ",c,"%"]})]}),0===a&&Object(b.jsx)(l,{message:"No feedback given"})]})},v=e(5),O=e.n(v),z=e(10),x=e.n(z),E=function(A){var t=A.options,e=A.onLeaveFeedback;return t.map((function(A){return function(A){var t=A.mark,e=A.onLeaveFeedback;return Object(b.jsx)("button",{className:x.a.btn,type:"button","data-mark":t,onClick:e,children:t},t)}({mark:A,onLeaveFeedback:e})}))};E.propTypes={options:O.a.array.isRequired,onLeaveFeedback:O.a.func.isRequired};var V=E,g=e(6),X=e.n(g),I=function(A){var t=A.title,e=A.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h2",{className:X.a.title,children:[" ",t]}),Object(b.jsxs)("div",{className:X.a.container,children:[e," "]})]})},H=e(7),B=e.n(H),j=function(){return Object(b.jsx)("div",{className:B.a.header,children:Object(b.jsx)("img",{src:"data:image/png;base64,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IjQ09LXXXrPqUv3ss8/69++vNQkJCYmLi9OGk5OTn3/+eafTadJ23bp1JtMTGhraokWL7OzsSZMm/fvf/66rqzPpyul0Jicne+tKUZTw8PDWrVsPHDjw2Wef3bt3r0lXUsCXTl1dXV5eXuvWrbUm4eHh0dHR2nDXrl3/+c9/mjeXmjPPPZ06deqxxx6Lj493+4tsNttNN9302WefWXXgt+bGQWlp6ahRo7Sp7Nu374oVK6qqqlRVra+v/+mnn3Jzc7VRHTt2PHXqlFVnQn5+/v333y/T9OWXX7Zq4e69996bPn16ixYt5Bx88sknF/3HzJkz9ZFvuDbv379/3rx5d955pyzr0qXLIp1XX311zJgxISFibys/P99oQnxVWlq6aNGiiRMn6r+E+o9bsGDBk08+mZiYqI0aP368eYcvvfSSVnnrrbdu3LixpqZGVdXz588//fTT2vvDhw+vra311vzChQue0zNgwIC5c+fOmzdvypQp2dnZ8v02bdr861//8taVtjimTZumz+jo6Oinnnpq/vz5c+bMGT9+fJs2bbT3Q0JCJk+eXF1dbdJbwJeOw+G4++67tU+fMGHCkSNH6uvrVVXdt2+f9r6iKDNmzDDpQdPMee5m4cKFWiTl5OSsWLGiqKiovr7+7NmzH374oVx777vvvosXL1r15IdmxcHZs2d79eqlTdmYMWM8w8/hcPTp00crGDFihJdujL388staw7CwsP3791uVG1i1apVcXb799lv9qJqamn79+mmjTFY+l8uVlZWlleXm5noWvPLKK9rYd955x6gDvz3xxBNymj3HbtmyRVvFf//73xu1FjZs2KDtoN1+++3amq03duxYrX/z77BGPz3Hjh3Tj9q9e/ewYcPk2Ly8PO/dqKqqrlixQhbPmjVLP6q2tnbmzJly7H333edyubz3JARq6cyaNUsre/HFF91GORyObt26aRtEhYWFXjpQAzvPVVWdNGmSVj916lTP3pxO5wMPPKAV9OnT5+zZs1668VvT46C2tvbGG2/UpmnYsGHeYm/27Nlajc1mu3z5smGNoWeeeUauHw8//LBVuYGCggLZg1scqKr67rvvaqMuXbrkpQNVVdXx48drZYYrXE1NTWxsrKIob775plFrv+Xn58tpNiy47bbbFEUZPXq04VjNQw89pPWwZs0az7Hvv/++NnbKlClGrRuR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",className:B.a.img,alt:"cafe espresso logo"})})},P=["good","neutral","bad"],m=e(11),q=e.n(m),p=function(A){var t=A.children;return Object(b.jsxs)("div",{className:q.a.Container,children:[t," "]})};function w(){var A=Object(n.useState)(0),t=Object(i.a)(A,2),e=t[0],a=t[1],c=Object(n.useState)(0),r=Object(i.a)(c,2),d=r[0],s=r[1],l=Object(n.useState)(0),u=Object(i.a)(l,2),f=u[0],v=u[1],O=function(){return e+d+f},z=O(),x=Math.round(e/O()*100);return Object(b.jsxs)(p,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(I,{title:"Please leave feedback",children:Object(b.jsx)(V,{options:P,onLeaveFeedback:function(A){var t=A.target.dataset.mark;switch(console.log(t),t){case"good":a((function(A){return A+1}));break;case"neutral":s((function(A){return A+1}));break;case"bad":v((function(A){return A+1}));break;default:return}}})}),Object(b.jsx)(I,{title:"Statistic",children:Object(b.jsx)(o,{good:e,neutral:d,bad:f,total:z,percentage:x})})]})}r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.20f33255.chunk.js.map
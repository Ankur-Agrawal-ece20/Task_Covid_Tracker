(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(16),o=n.n(a),i=(n(21),n(4)),s=(n(22),n(6),n(0)),d=function(){return Object(s.jsx)("div",{id:"Header",class:"header",children:Object(s.jsx)("h1",{children:"Covid Tracker"})})},l=function(e){return Object(s.jsxs)("tr",{id:e.country.replaceAll(" ",""),children:[Object(s.jsx)("td",{children:e.country}),Object(s.jsx)("td",{children:e.data})]})},u=n(3),j=n.n(u),h=function(e){return Object(s.jsxs)("div",{class:"main-body",children:[Object(s.jsxs)("div",{id:"selectcnt",children:[Object(s.jsx)("div",{}),Object(s.jsxs)("select",{id:"cntry",children:[Object(s.jsx)("option",{value:"Default",children:"Choose Country"}),0===e.country.length?Object(s.jsx)("option",{children:"Waiting!"}):e.country.map((function(e,t){return Object(s.jsx)("option",{children:e},"cntry"+String(t))}))]}),Object(s.jsx)("button",{onClick:function(){!function(){if("Default"!==document.getElementById("cntry").value){var e,t,n,c=document.getElementById("date").value,r=new Date;if("T"===c){var a=document.getElementById("cntry");if(null==a)return;var o=a.value.replaceAll(" ",""),i=document.getElementById(o),s=i.style.backgroundColor;return i.style.backgroundColor="white",i.style.animation="glow 4s 1",i.style.backgroundColor=s,void i.scrollIntoView()}"Y"===c?(r.setDate(r.getDate()-1),e=String(r.getDate()).padStart(2,"0"),t=String(r.getMonth()+1).padStart(2,"0"),n=r.getFullYear(),c=n+"-"+t+"-"+e):(e=String(r.getDate()).padStart(2,"0"),t=String(r.getMonth()+1).padStart(2,"0"),n=r.getFullYear(),c=n-1+"-"+t+"-"+e);var d={method:"GET",url:"https://covid-193.p.rapidapi.com/history",params:{country:document.getElementById("cntry").value.toLowerCase(),day:c},headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"7bbbf7ef36msh496831d8995bb5cp167ac0jsn1214f1d375f4"}};j.a.request(d).then((function(e){var t=e.data.response[e.data.response.length-1],n=document.getElementById("type").innerHTML.toLowerCase();alert(t.country+" : "+t.cases[n]+" "+n+" cases on "+c+"!")})).catch((function(e){console.error(e)}))}else alert("Please choose a country!")}()},children:"Find"}),Object(s.jsx)("div",{})]}),Object(s.jsxs)("div",{id:"extras",children:[Object(s.jsxs)("select",{id:"date",children:[Object(s.jsx)("option",{value:"T",children:"Today"}),Object(s.jsx)("option",{value:"Y",children:"Yesterday"}),Object(s.jsx)("option",{value:"L",children:"Last Year"})]}),Object(s.jsxs)("select",{onChange:function(t){e.update(t.target.value)},children:[Object(s.jsx)("option",{value:"Active",children:"Active"}),Object(s.jsx)("option",{value:"Critical",children:"Critical"}),Object(s.jsx)("option",{value:"New",children:"New"}),Object(s.jsx)("option",{value:"Recovered",children:"Recovered"}),Object(s.jsx)("option",{value:"Total",children:"Total"})]})]}),Object(s.jsxs)("table",{id:"Table",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Countries"}),Object(s.jsx)("th",{id:"type",children:"Active"})]}),0===e.data.length?Object(s.jsx)("h4",{children:"Waiting!"}):e.data.map((function(e,t){return Object(s.jsx)(l,{country:e.country,data:e.data},"cntryno"+String(t))}))]})]})};var p=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),l=o[0],u=o[1],p=Object(c.useState)([]),b=Object(i.a)(p,2),v=b[0],y=b[1];return Object(c.useEffect)((function(){j.a.request({method:"GET",url:"https://covid-193.p.rapidapi.com/statistics",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"7bbbf7ef36msh496831d8995bb5cp167ac0jsn1214f1d375f4"}}).then((function(e){r(e.data.response);for(var t=[],c=[],a=0;a<e.data.response.length;a++)t.push({country:e.data.response[a].country,data:e.data.response[a].cases.active}),c.push(n[a].country);c.sort(),y(c),u(t)})).catch((function(e){console.error(e)}))}),[n]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{}),Object(s.jsx)(h,{data:l,country:v,update:function(e){for(var t=[],c=0;c<n.length;c++)t.push({country:n[c].country,data:n[c].cases[e.toLowerCase()]?n[c].cases[e.toLowerCase()]:"NA"});u(t),document.getElementById("type").innerHTML=e}}),Object(s.jsx)("button",{id:"topbtn",onClick:function(){document.getElementById("Header").scrollIntoView()},children:"Top \u219f"})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),b()},6:function(e,t,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.e9dca994.chunk.js.map
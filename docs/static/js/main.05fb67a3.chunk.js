(this["webpackJsonpcotizacion-escuela-app"]=this["webpackJsonpcotizacion-escuela-app"]||[]).push([[0],{28:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c,r,o,a,i,s,l,j,d,b,u,h=t(0),O=t(7),x=t.n(O),m=(t(28),t(8)),p=t(2),g=t(3),f=t(6),v=t(13),k=t(15),y=t(11),w=t.n(y),C="[cotizacion] A\xf1adir",E=t(49),z=t(48),N=t(1),S=g.a.h1(c||(c=Object(p.a)(["\n\n    text-align: center;\n    width: 95%;\n    margin: 0 auto;\n"]))),_=g.a.h3(r||(r=Object(p.a)(["\n    text-align: center;\n    width: 95%;\n    margin: 1rem auto;\n    font-size: 2rem;\n"]))),D=g.a.p(o||(o=Object(p.a)(["\n    font-size: 1.2rem;\n    text-align: center;\n    font-weight: bold;\n"]))),I=g.a.span(a||(a=Object(p.a)(["\n    font-size: 1rem;\n    text-align: center;\n    font-weight: lighter;\n"]))),q=function(){var e=Object(m.c)((function(e){return e.cotizacion})).costo,n=Object(m.c)((function(e){return e.cotizacion})).info,t=n.nombre,c=n.edad,r=n.semestre,o=n.ingles,a=n.deporte,i=n.promedio;return Object(N.jsxs)("div",{children:[Object(N.jsx)(S,{children:"Resumen:"}),Object(N.jsxs)(D,{children:["Nombre: ",Object(N.jsx)(I,{children:t})]}),Object(N.jsxs)(D,{children:["Edad: ",Object(N.jsx)(I,{children:c})]}),Object(N.jsxs)(D,{children:["Semestre: ",Object(N.jsx)(I,{children:r})]}),Object(N.jsxs)(D,{children:["Ingl\xe9s: ",Object(N.jsx)(I,{children:o})]}),Object(N.jsxs)(D,{children:["Deporte: ",Object(N.jsx)(I,{children:a})]}),Object(N.jsxs)(D,{children:["Promedio: ",Object(N.jsx)(I,{children:i})]}),Object(N.jsx)(E.a,{component:"h3",className:"resultado",children:Object(N.jsx)(z.a,{classNames:"resultado",timeout:{enter:500,exit:500},children:Object(N.jsxs)(_,{children:["Costo: ",Object(N.jsx)("span",{children:e})]})},e)})]})},B=function(){return Object(N.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",margin:"2rem 0"},children:Object(N.jsxs)("div",{class:"sk-chase",children:[Object(N.jsx)("div",{class:"sk-chase-dot"}),Object(N.jsx)("div",{class:"sk-chase-dot"}),Object(N.jsx)("div",{class:"sk-chase-dot"}),Object(N.jsx)("div",{class:"sk-chase-dot"}),Object(N.jsx)("div",{class:"sk-chase-dot"}),Object(N.jsx)("div",{class:"sk-chase-dot"})]})})},R=g.a.div(i||(i=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 1rem;\n"]))),T=g.a.select(s||(s=Object(p.a)(["\n    flex: 0 0 80%;\n    -webkit-appearance: none;\n    padding: 0.3rem;\n    border: 1px solid gray;\n    outline: none;\n    font-size: 1.1rem;\n\n"]))),A=g.a.input(l||(l=Object(p.a)(["\n    flex: 0 0 80%;\n    padding: 0.3rem;\n    border: 1px solid gray;\n    outline: none;\n    font-size: 1.1rem;\n    color: black;\n    &::placeholder{\n        color: black;\n    }\n"]))),P=g.a.button(j||(j=Object(p.a)(["\n    display: block;\n    width: 95%;\n    background-color: #001d3d;\n    padding: 1rem 0;\n    border: none;\n    margin: 1rem auto;\n    font-size: 1.2rem;\n    color: white;\n    &:hover{\n        background-color: green;\n        cursor: pointer;\n    }\n"]))),X=g.a.input(d||(d=Object(p.a)(["\n    margin-left: 1rem;\n"]))),L=function(){var e=Object(m.b)(),n=Object(m.c)((function(e){return e.cotizacion})).costo,t=Object(h.useState)(!1),c=Object(v.a)(t,2),r=c[0],o=c[1],a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(h.useState)(e),t=Object(v.a)(n,2),c=t[0],r=t[1];return[c,function(e){r(Object(f.a)(Object(f.a)({},c),{},Object(k.a)({},e.target.name,e.target.value)))},function(){r(e)}]}({nombre:"",edad:"",semestre:"",ingles:"",deporte:"",promedio:""}),i=Object(v.a)(a,3),s=i[0],l=i[1],j=(i[2],function(){return d.length<2?(w.a.fire({title:"Coloca tu Nombre Completo",icon:"error"}),!1):b.length<2?(w.a.fire({title:"Coloca tu Edad",icon:"error"}),!1):""===u?(w.a.fire({title:"Coloca tu Semestre al que ingresas",icon:"error"}),!1):""===x?(w.a.fire({title:"Coloca un Deporte",icon:"error"}),!1):""!==p||(w.a.fire({title:"Coloca tu Promedio Anterior",icon:"error"}),!1)}),d=s.nombre,b=s.edad,u=s.semestre,O=s.ingles,x=s.deporte,p=s.promedio;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),j()){var t=function(e){var n;switch(e){case"primero":n=1800;break;case"segundo":n=2200;break;case"tercero":n=2400;break;case"cuarto":n=2700;break;case"quinto":n=3100;break;case"sexto":n=3400}return n}(u)+function(e){var n;switch(e){case"futbol":n=300;break;case"basquetbol":n=500;break;case"besibol":n=200;break;case"lucha":n=600}return n}(x)+function(e){return"Excelnte"===e?-500:0}(p)+function(e){return"agregar"===e?700:0}(O);o(!0),setTimeout((function(){var n;e((n={info:Object(f.a)({},s),costo:t},{type:C,payload:n})),o(!1)}),2e3)}},children:[Object(N.jsxs)(R,{children:[Object(N.jsx)("label",{children:"Nombre"}),Object(N.jsx)(A,{type:"text",placeholder:"Ingresa tu Nombre",name:"nombre",value:d,onChange:l})]}),Object(N.jsxs)(R,{children:[Object(N.jsx)("label",{children:"Edad"}),Object(N.jsx)(A,{type:"number",min:14,max:25,placeholder:"Ingresa tu Edad",name:"edad",value:b,onChange:l})]}),Object(N.jsxs)(R,{children:[Object(N.jsx)("label",{children:"Semestre"}),Object(N.jsxs)(T,{name:"semestre",value:u,onChange:l,children:[Object(N.jsx)("option",{value:"",children:"Seleccione..."}),Object(N.jsx)("option",{value:"primero",children:"1\xb0"}),Object(N.jsx)("option",{value:"segundo",children:"2\xb0"}),Object(N.jsx)("option",{value:"tercero",children:"2\xb0"}),Object(N.jsx)("option",{value:"cuarto",children:"4\xb0"}),Object(N.jsx)("option",{value:"quinto",children:"5\xb0"}),Object(N.jsx)("option",{value:"sexto",children:"6\xb0"})]})]}),Object(N.jsxs)(R,{children:[Object(N.jsx)("label",{children:"Ingl\xe9s"}),Object(N.jsxs)("div",{children:[Object(N.jsx)(X,{type:"radio",name:"ingles",value:"agregar",checked:"agregar"===O,onChange:l}),"Agregar",Object(N.jsx)(X,{type:"radio",name:"ingles",value:"No agregar",checked:"No agregar"===O,onChange:l}),"No Agregar"]})]}),Object(N.jsxs)(R,{children:[Object(N.jsx)("label",{children:"Deporte"}),Object(N.jsxs)(T,{name:"deporte",value:x,onChange:l,children:[Object(N.jsx)("option",{value:"",children:"Seleccione..."}),Object(N.jsx)("option",{value:"futbol",children:"Futbol"}),Object(N.jsx)("option",{value:"basquetbol",children:"Basquetbol"}),Object(N.jsx)("option",{value:"besibol",children:"Besibol"}),Object(N.jsx)("option",{value:"lucha",children:"Lucha"})]})]}),Object(N.jsxs)(R,{children:[Object(N.jsx)("label",{children:"Promedio"}),Object(N.jsxs)("div",{children:[Object(N.jsx)(X,{type:"radio",name:"promedio",value:"Excelnte",checked:"Excelnte"===p,onChange:l}),"Excelente",Object(N.jsx)(X,{type:"radio",name:"promedio",value:"Bueno",checked:"Bueno"===p,onChange:l}),"Bueno",Object(N.jsx)(X,{type:"radio",name:"promedio",value:"Regular",checked:"Regular"===p,onChange:l}),"Regular"]})]}),Object(N.jsx)(P,{type:"submit",children:"Cotizar"})]}),r&&Object(N.jsx)(B,{}),!r&&n>0&&Object(N.jsx)(q,{})]})},F=g.a.h1(b||(b=Object(p.a)(["\n    text-align: center;\n    background-color: #001d3d;\n    color: white;\n    padding: 1rem 0;\n"]))),J=g.a.div(u||(u=Object(p.a)(["\n    width: 600px;\n    margin: 0 auto;\n"]))),U=function(){return Object(N.jsxs)(J,{children:[Object(N.jsx)(F,{children:"Cotiza tu Inscripci\xf3n a la Prepa 92O"}),Object(N.jsx)("div",{style:{padding:"1rem 3rem",backgroundColor:"white"},children:Object(N.jsx)(L,{})})]})},V=t(18),G={info:{},costo:0},H=Object(V.a)({cotizacion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C:return Object(f.a)(Object(f.a)({},e),{},{info:n.payload.info,costo:n.payload.costo});default:return e}}}),K=Object(V.b)(H,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),M=function(){return Object(N.jsx)(m.a,{store:K,children:Object(N.jsx)(U,{})})};x.a.render(Object(N.jsx)(M,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.05fb67a3.chunk.js.map
(this["webpackJsonpmrvn.in"]=this["webpackJsonpmrvn.in"]||[]).push([[0],{112:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a(0),r=a.n(i),c=a(30),o=a.n(c),s=(a(112),a(33)),l=a(23),d=Object(i.createContext)(),b=function(e){var t=e.reducer,a=e.initialState,r=e.children;return Object(n.jsx)(d.Provider,{value:Object(i.useReducer)(t,a),children:r})},j=a(100),h=a.n(j),p=a(101);function u(){var e=document.body.scrollHeight,t=window,a=t.innerWidth,n=t.innerHeight;return{height:e||n,width:a}}var f=function(){var e=Object(i.useContext)(d),t=Object(s.a)(e,1)[0].darkMode,a=function(){var e=Object(i.useState)({height:0,width:0}),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(i.useEffect)((function(){n(u())}),[]),Object(i.useEffect)((function(){var e=Object(p.debounce)(300,(function(){n(u())}));return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),r=a.height,c=a.width;return Object(n.jsx)(h.a,{style:{backgroundColor:t,position:"absolute"},height:r,width:c,params:{particles:{number:{value:60,density:{enable:!0,value_area:1500}},line_linked:{enable:!0,opacity:.03},move:{speed:.3},size:{value:1.5},opacity:{anim:{enable:!0,speed:1,opacity_min:.1}}},interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})},g=a(105),m=a(382),x=a(392),O=a(390),v=a(356),y=a(103),w=a(389),S=a(384),k=a(385),C=a(386),F=a(387),I=a(388),M=a.p+"static/media/marv.8f0d7231.jpg",E=Object(m.a)((function(e){return{media:{height:0,paddingTop:"90%"}}})),N=function(){var e=E();return Object(n.jsx)(v.a,{children:Object(n.jsxs)(S.a,{container:!0,spacing:3,style:{padding:24},children:[Object(n.jsxs)(S.a,{item:!0,sm:12,md:6,children:[Object(n.jsx)(k.a,{children:Object(n.jsx)(C.a,{className:e.media,image:M,title:"Marvin Caragay"})}),Object(n.jsxs)(F.a,{style:{padding:0,paddingTop:16},children:[Object(n.jsx)(I.a,{display:"inline",variant:"h3",style:{color:"#fff",fontWeight:"bold"},children:"Hello,"}),"\xa0",Object(n.jsx)(I.a,{display:"inline",variant:"h4",style:{color:"#fff",fontWeight:"bold"},children:"I'm Marvin Caragay."}),Object(n.jsx)(I.a,{variant:"h6",component:"h3",style:{color:"#FFFFFF8C",fontWeight:"lighter"},children:"(Software Engineer)"})]})]}),Object(n.jsxs)(S.a,{item:!0,sm:12,md:6,style:{color:"#FFFFFF8C",fontWeight:"lighter"},children:[Object(n.jsx)(I.a,{paragraph:!0,children:"After developing Lost & Found system and User Request Form while working as IT Specialist in the Hospitality industry for several years. My desire to pursue my passion for software development is unbearable to ignore."}),Object(n.jsx)(I.a,{paragraph:!0,children:"In February 2019, I left the unhappy life I was in to focus solely on growing and honing my programming skills. My passion for development is incomparable. Every day I wake up excited to code and sometimes frustrated after realizing why my code does not work. I love every aspect of turning ideas into software products and find each step of the way exciting."}),Object(n.jsx)(I.a,{paragraph:!0,children:"Besides coding, I like watching bastketball and tennis, working out in the gym, visiting friends, and playing online games."}),Object(n.jsxs)(I.a,{paragraph:!0,variant:"subtitle2",children:[Object(n.jsx)("b",{style:{color:"#fff"},children:"Frontend:"})," JavaScript ES6+, React, React Native, Redux, TypeScript, HTML, CSS, jQuery, Babel, Webpack, Material-UI, Styled-Components, Bootstrap"]}),Object(n.jsxs)(I.a,{paragraph:!0,variant:"subtitle2",children:[Object(n.jsx)("b",{style:{color:"#fff"},children:"Backend:"})," Node, Express, MySQL, MongoDB, PostgreSQL, Docker, GraphQL, Redis, Nginx, AWS (EC2, S3)"]}),Object(n.jsxs)(I.a,{paragraph:!0,variant:"subtitle2",children:[Object(n.jsx)("b",{style:{color:"#fff"},children:"Familliar:"})," gile(scrum), npm, Cassandra, Linux, Git, Mocha/Chai, Jest/Enzyme, Next.js, New Relic, Loader.io, Jmeter"]})]})]})})},R=Object(m.a)((function(e){return{root:{position:"relative",display:"flex",height:"100vh",alignItems:"center",padding:e.spacing(6),boxSizing:"border-box"},gridContainer:{height:"100vh"},leftContainer:{flex:3,display:"flex",justifyContent:"flex-end",alignItems:"center"},rightContainer:{flex:9,padding:e.spacing(2)},highlightBorder:{transition:"border 0.5s",border:"1px solid #24272c","&:hover":{border:"1px solid #9e9e9e"}}}}));function B(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function L(e){var t=e.children,a=e.value,i=e.index,r=Object(g.a)(e,["children","value","index"]);return Object(n.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:a!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},r),{},{children:a===i&&t}))}var T=function(){var e=R(),t=r.a.useState(0),a=Object(s.a)(t,2),i=a[0],c=a[1],o=Object(y.a)(),d=Object(w.a)(o.breakpoints.up("md"));return Object(n.jsxs)("div",{className:e.root,style:{flexDirection:d?"row":"column"},children:[Object(n.jsx)("div",{className:e.leftContainer,children:Object(n.jsx)(v.a,{className:"".concat(e.highlightBorder),children:Object(n.jsxs)(x.a,{orientation:d?"vertical":"horizontal",value:i,onChange:function(e,t){return c(t)},"aria-label":"simple tabs",children:[Object(n.jsx)(O.a,Object(l.a)({label:"Home"},B(0))),Object(n.jsx)(O.a,Object(l.a)({label:"Experience"},B(1))),Object(n.jsx)(O.a,Object(l.a)({label:"Project"},B(2))),Object(n.jsx)(O.a,Object(l.a)({label:"Resume"},B(3)))]})})}),Object(n.jsxs)("div",{className:e.rightContainer,children:[Object(n.jsx)(L,{value:i,index:0,children:Object(n.jsx)(N,{})}),Object(n.jsx)(L,{value:i,index:1,children:"Item Two"}),Object(n.jsx)(L,{value:i,index:2,children:"Item Three"})]})]})};var z=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{}),Object(n.jsx)(T,{})]})},W=a(391),H=a(104),D=Object(H.a)({typography:{fontFamily:["Roboto","sans-serif","-apple-system","BlinkMacSystemFont",'"Segoe UI"'].join(",")},overrides:{PrivateTabIndicator:{colorSecondary:{display:"none"}},MuiTab:{textColorInherit:{fontSize:12,opacity:.3,color:"#fff"}},MuiPaper:{root:{backgroundColor:"inherit"}}}});o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(b,{initialState:{darkMode:"#24272c"},reducer:function(e,t){switch(t.type){case"DARKMODE":return Object(l.a)(Object(l.a)({},e),{},{darkMode:t.payload?"#24272c":"#fff"});default:return e}},children:Object(n.jsx)(W.a,{theme:D,children:Object(n.jsx)(z,{})})})}),document.getElementById("root"))}},[[354,1,2]]]);
//# sourceMappingURL=main.b974c4f0.chunk.js.map
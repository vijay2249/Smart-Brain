(this["webpackJsonpsmart-brain"]=this["webpackJsonpsmart-brain"]||[]).push([[0],{328:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){},333:function(e,t,n){},335:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(3),i=n.n(a),s=n(45),o=n.n(s),c=(n(95),n(82)),u=n(83),l=n(89),j=n(88),d=n(48),h=n.n(d),b=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(r.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(r.jsx)("p",{onClick:function(){return t("login")},className:"f3 link dim black underline pa3 pointer",style:{zindex:1,background:"none"},children:"Sign Out"})}):null},m=n(84),p=n.n(m),g=n.p+"static/media/SmartBrainFrontend.a89f0fda.png",f={height:200,width:200,background:"linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)"},x=function(){return Object(r.jsx)("div",{className:"ma4 mt0",children:Object(r.jsx)(p.a,{className:"Tilt br2 shadow-2",options:{max:30},style:f,children:Object(r.jsx)("div",{className:"Tilt-inner",children:Object(r.jsx)("img",{src:g,alt:"Brain Logo",style:{height:"200px",width:"200px"}})})})})},O=(n(328),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"f3 typing-effect center",children:"Welcome to Magic Brain, Brain that detects human faces in a picture"}),Object(r.jsx)("div",{className:"center",children:Object(r.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(r.jsx)("input",{className:"f4 pa2 w-70 center z-index-one",type:"text",onChange:t}),Object(r.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),v=function(e){var t=e.displayUser,n=e.entries,a=t||"Marshmello",i=a===t?"your current entries are: ".concat(n):"Login to see your entries";return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"white f3",children:Object(r.jsx)("i",{className:"f1",children:"Hi ".concat(a)})}),Object(r.jsx)("div",{className:"white f2",children:Object(r.jsx)("i",{children:i})})]})},w=n(14),y=n(23),C=n(24),S=n(15),N=n(16);function k(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 5%;\n"]);return k=function(){return e},e}function I(){var e=Object(S.a)(["\n  cursor:pointer;\n  margin: auto;\n  font-size: 15px;\n  content: 'Forgot Password';\n  opacity: 0.6;\n  text-decoration: underline;\n  color: white;\n"]);return I=function(){return e},e}function R(){var e=Object(S.a)(["\n  margin: 5% 15%;\n  font-size: 25px;\n  font-weight: 300%;\n  transition: transform 400ms ease;\n  &:hover{\n    text-decoration: underline;\n    transform: scale(1.07);\n    transition: transform 400ms ease;\n  }\n"]);return R=function(){return e},e}function D(){var e=Object(S.a)(["\n  color:white;\n  opacity: 0.7;\n  height: 3px;\n  width: 90%;\n  background: white;\n  border-radius: 5px;\n  position:relative;\n  margin:auto;\n"]);return D=function(){return e},e}function E(){var e=Object(S.a)(["\n  margin: auto;\n  width: 70%;\n  border-radius: 5px;\n  font-size: 25px;\n  margin-bottom: 5%;\n  border: none;\n  background: transparent;\n  border-bottom: 2px solid #1161EE;\n  &:focus{\n    outline:none;\n    background: transparent;\n  }\n  &[type=submit]{\n    color: #fff;\n    background-color: #1161EE;\n    cursor: pointer;\n    border-radius: 10px;\n    width: 40%;\n  }\n  &[name=confirmPassword]{\n    margin-bottom: 2%;\n  }\n"]);return E=function(){return e},e}function P(){var e=Object(S.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  border-radius: 13px;\n  border-bottom: 3px solid gray;\n  box-shadow: 0 0 0 2px gray;\n"]);return P=function(){return e},e}function U(){var e=Object(S.a)(["\nfont-size:20px;\ntext-align:left;\nmargin-left: 15%;\nmargin-top: 5px;\n"]);return U=function(){return e},e}var B=N.a.label(U()),z=N.a.nav(P()),F=N.a.input(E()),q=N.a.hr(D()),A=N.a.a(R()),L=N.a.p(I()),_=N.a.div(k());function H(){var e=Object(S.a)(["\n  margin: 0;\n  margin-bottom: 5px;\n  // color: rgba(255,0,0,0.7);\n"]);return H=function(){return e},e}var J=N.a.h4(H()),T=function(){return Object(r.jsx)(J,{children:"Enter correct credentials"})},M=function(){return Object(r.jsx)(J,{children:"Password Fields values must match"})},Z=function(){return Object(r.jsx)(J,{children:"User Already exists with these credentials, enter new credentials to register"})},W=function(){return Object(r.jsxs)(J,{children:["Please use strong password ( ",Object(r.jsx)("a",{href:"https://support.google.com/accounts/answer/32040?hl=en",children:"learn here "}),")"]})},G=function(e){var t=e.toHome,n=e.userData,i=e.ChangeRoute,s=Object(a.useState)(!0),o=Object(w.a)(s,2),c=o[0],u=o[1],l=Object(a.useState)({email:"",password:""}),j=Object(w.a)(l,2),d=j[0],h=j[1],b=function(e){var t=e.target,n=t.name,r=t.value;h(Object(C.a)(Object(C.a)({},d),{},Object(y.a)({},n,r))),!1===c&&u(!0)};return Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)(B,{children:"Email"}),Object(r.jsx)(F,{type:"email",onChange:b,name:"email",value:d.email,required:!0}),Object(r.jsx)(B,{children:"Password"}),Object(r.jsx)(F,{type:"password",onChange:b,name:"password",value:d.password,required:!0}),!c&&Object(r.jsx)(T,{}),Object(r.jsx)(F,{onClick:function(e){var r=d.email,a=d.password;""===r||""===a?alert("Please enter details"):fetch("https://secure-fjord-78328.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({signInData:d})}).then((function(e){return e.json()})).then((function(e){"error"!==e?(n(e),t("home")):u(!1)})),e.preventDefault()},type:"submit",value:"SignIn"}),Object(r.jsx)(q,{}),Object(r.jsxs)(_,{children:[Object(r.jsx)(L,{children:"Forgot Password "}),Object(r.jsx)(L,{name:"register",onClick:i,children:"SignUp"})]})]})},K=function(e){var t=e.toHome,n=e.userData,i=e.ChangeRoute,s=new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"),o=Object(a.useState)(!0),c=Object(w.a)(o,2),u=c[0],l=c[1],j=Object(a.useState)(!0),d=Object(w.a)(j,2),h=d[0],b=d[1],m=Object(a.useState)(!0),p=Object(w.a)(m,2),g=p[0],f=p[1],x=Object(a.useState)({username:"",email:"",password:"",confirmPassword:""}),O=Object(w.a)(x,2),v=O[0],S=O[1],N=function(e){var t=e.target,n=t.name,r=t.value;S(Object(C.a)(Object(C.a)({},v),{},Object(y.a)({},n,r))),!1===g&&f(!0),!1===u&&l(!0),!1===h&&b(!0)};return Object(r.jsxs)("div",{className:"register",children:[Object(r.jsx)(B,{children:"UserName"}),Object(r.jsx)(F,{name:"username",type:"text",onChange:N,value:v.username,required:!0}),Object(r.jsx)(B,{children:"Email"}),Object(r.jsx)(F,{name:"email",type:"email",onChange:N,value:v.email,required:!0}),Object(r.jsx)(B,{children:"Password"}),Object(r.jsx)(F,{name:"password",type:"password",onChange:N,value:v.password,required:!0}),Object(r.jsx)(B,{children:"Confirm Password"}),Object(r.jsx)(F,{name:"confirmPassword",type:"password",onChange:N,value:v.confirmPassword,required:!0}),!h&&Object(r.jsx)(M,{}),!g&&Object(r.jsx)(Z,{}),!u&&Object(r.jsx)(W,{}),Object(r.jsx)(F,{onClick:function(){var e=v.email,r=v.username,a=v.password,i=v.confirmPassword;""===a||""===i||""===r||""===e?alert("All fields are required"):a===i?s.test(a)?fetch("https://secure-fjord-78328.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({registerData:v})}).then((function(e){return e.json()})).then((function(e){"error"!==e?(n(e),t("home")):f(!1)})):l(!1):b(!1)},type:"submit",value:"Register"}),Object(r.jsx)(q,{}),Object(r.jsxs)(_,{children:["Already a member",Object(r.jsx)("a",{href:"#register",name:"login",onClick:i,children:"Login"})]})]})},Q=(n(331),function(e){var t=e.onRouteChange,n=e.updateUIuser,i=Object(a.useState)("login"),s=Object(w.a)(i,2),o=s[0],c=s[1],u=function(e){var t=e.target.name;c(t)},l=function(e){"home"===e&&t("home")};return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"Card",children:Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)(z,{className:"navBar",children:[Object(r.jsx)(A,{href:"#login",name:"login",onClick:u,className:"SignIn",children:"SignIn"}),Object(r.jsx)(A,{href:"#register",name:"register",onClick:u,className:"SignUp",children:"SignUp"})]}),"login"===o?Object(r.jsx)(G,{ChangeRoute:u,toHome:l,userData:n}):Object(r.jsx)(K,{ChangeRoute:u,toHome:l,userData:n})]})})})}),V=(n(332),function(e){for(var t=e.input,n=e.regions,a=e.height,i=e.width,s=[],o={},c=0;c<n.length;c++){var u=n[c].region_info.bounding_box;o={leftCol:u.left_col*i,topRow:u.top_row*a,rightCol:(1-u.right_col)*i,bottomRow:(1-u.bottom_row)*a},s.push(o)}var l=function(e){return Object(r.jsx)("div",{className:"face-box",style:{top:e.box.topRow,right:e.box.rightCol,bottom:e.box.bottomRow,left:e.box.leftCol}})};return Object(r.jsx)("div",{className:"center ma",children:Object(r.jsxs)("div",{className:"absolute mt2",children:[Object(r.jsx)("img",{id:"inputImage",alt:"",src:t,width:"auto",height:"500px"}),s.map((function(e,t){return Object(r.jsx)(l,{box:e,i:t},t)}))]})})}),X=(n(333),{particles:{number:{value:50},size:{value:3}}}),Y={input:"",regions:{},height:"",width:"",route:"login",isSignedIn:!1,userData:{username:"",email:"",entries:0}},$=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).updateUIuser=function(t){e.setState({userData:{username:t.username,email:t.email,entries:t.entries}})},e.CalculateFaceLocation=function(t){var n=t.regions,r=document.getElementById("inputImage"),a=Number(r.width),i=Number(r.height);e.setState({regions:n,height:i,width:a})},e.onInputChange=function(t){return e.setState({input:t.target.value,regions:{}})},e.onButtonSubmit=function(){fetch("https://secure-fjord-78328.herokuapp.com/images",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageURL:e.state.input,username:e.state.userData.username})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.userData,{entries:t[0]})),"error"!==t[1]?e.CalculateFaceLocation(t[1]):alert("Enter image url that contains human faces")})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):(e.setState(Y),e.setState({isSignedIn:!1})),e.setState({route:t})},e.state=Y,e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,n=e.route,a=e.input,i=e.regions,s=e.height,o=e.width,c=e.userData;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h.a,{className:"particles",params:X}),Object(r.jsx)(b,{onRouteChange:this.onRouteChange,isSignedIn:t}),"home"===n?Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{}),Object(r.jsx)(v,{displayUser:c.username,entries:c.entries}),Object(r.jsx)(O,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(r.jsx)(V,{input:a,regions:i,height:s,width:o})]}):Object(r.jsx)(Q,{onRouteChange:this.onRouteChange,updateUIuser:this.updateUIuser})]})}}]),n}(a.Component);n(334);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)($,{})}),document.getElementById("root"))},95:function(e,t,n){}},[[335,1,2]]]);
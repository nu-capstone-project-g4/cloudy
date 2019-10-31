(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),o=(a(81),a(82),a(11)),i=a(23),c=a(8),m=a(22),u=a(69),d=a(16);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=a(87),b={isAuthenticated:!1,user:{},loading:!1},v={},g=Object(m.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return h({},e,{isAuthenticated:!f(t.payload),user:t.payload});case"USER_LOADING":return h({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}}}),w=[u.a],E=Object(m.e)(g,{},Object(m.d)(m.a.apply(void 0,w))),y=a(32),O=a.n(y),j=a(13),N=a.n(j),k=function(e){e?N.a.defaults.headers.common.Authorization=e:delete N.a.defaults.headers.common.Authorization},C=function(e){return{type:"SET_CURRENT_USER",payload:e}},x=function(){return function(e){localStorage.removeItem("jwtToken"),k(!1),e(C({}))}},S=a(75),P=Object(c.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(S.a)(e,["component","auth"]);return r.a.createElement(i.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/login"})}}))})),F=a(5),R=a(6),D=a(9),T=a(7),A=a(10),L=(a(107),a(20)),U=a.n(L),B=function(e){function t(e){var a;return Object(F.a)(this,t),(a=Object(D.a)(this,Object(T.a)(t).call(this,e))).checkMimeType=function(e){for(var t=e.target.files,n="",r=["text/javascript"],s=function(e){r.every((function(a){return function(e,a){return t[a].type!==e||(n=t[a].type+" ",!1)}(a,e)}))},l=0;l<t.length;l++)s(l);return"uploading not supported"===(n+="uploading not supported")||(e.target.value=null,a.setState({errors:n}),!1)},a.onFileChangeHandler=function(e){a.checkMimeType(e)&&a.setState({selectedFiles:e.target.files,errors:""})},a.onUploadClickHandler=function(e){a.setState({errors:""});for(var t=new FormData,n=0;n<a.state.selectedFiles.length;n++)t.append("file",a.state.selectedFiles[n]);""!==a.state.selectedFiles?N.a.post("/api/files/upload",t,{onUploadProgress:function(e){var t=e.loaded/e.total*100;100===t&&(U.a.toast({html:"Upload complete.",displayLength:2e3}),a.setState({selectedFiles:""}),a.fileInputRef.value="",setTimeout((function(){return window.location.reload()}),2050)),a.setState({loaded:t})}}):a.setState({errors:"No files selected."})},a.state={selectedFiles:"",errors:"",loaded:0},a}return Object(A.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"files"},r.a.createElement("input",{type:"file",multiple:!0,onChange:this.onFileChangeHandler,ref:function(t){return e.fileInputRef=t}})),r.a.createElement("center",null,r.a.createElement("div",{className:"progress",style:{width:0===this.state.loaded?"0%":100===this.state.loaded?"0%":"70%"}},r.a.createElement("div",{className:"determinate blue lighten-1",style:{width:this.state.loaded+"%"}})),r.a.createElement("button",{type:"button",style:{width:"80%",height:50},className:"btn waves-effect waves-light green",onClick:this.onUploadClickHandler},"Upload Files"),r.a.createElement("p",{className:"red-text"},this.state.errors)))}}]),t}(n.Component),I=a(44),M=a.n(I),_=a(71),z=a(74),q=a(72),G=a.n(q),H=a(33),W=a(73);function Y(e){var t=r.a.createElement("button",{className:"material-icons-outlined btn-flat",onClick:function(t){return e.onClick(t,e.name)}},"create");return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.modified),r.a.createElement("td",null,e.size),r.a.createElement("td",{className:"center"},r.a.createElement("button",{className:"material-icons-outlined btn-flat",onClick:function(t){return e.onClick(t,e.name)}},"download"),r.a.createElement("button",{className:"material-icons-outlined btn-flat",onClick:function(t){return e.onClick(t,e.name)}},"delete"),r.a.createElement(H.Modal,{options:{onOpenStart:e.onChange},header:"Rename File",trigger:t,actions:r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn-flat waves-light waves-effect",onClick:function(t){return e.onClick(t,e.name)},id:"do-rename"},"Rename"),r.a.createElement("button",{className:"btn-flat modal-close waves-light waves-effect"},"Close"))},r.a.createElement("div",{style:{padding:"10px 0px"}},r.a.createElement("div",{className:"input-field"},r.a.createElement("i",{className:"material-icons prefix"},"file_copy"),r.a.createElement("input",{id:"fileName",type:"text",onChange:e.onChange}),r.a.createElement("label",{htmlFor:"fileName"},"Rename ",e.name))))))}var V=function(e){function t(){var e;return Object(F.a)(this,t),(e=Object(D.a)(this,Object(T.a)(t).call(this))).handleActionClick=function(t,a){"download"===t.target.innerText&&e.downloadFile(t,a),"delete"===t.target.innerText&&e.deleteFile(a),"do-rename"===t.target.id&&(""!==e.state.newName?e.renameFile(a):U.a.toast({html:"No file name specified.",displayLength:1e3}))},e.downloadFile=function(){var e=Object(_.a)(M.a.mark((function e(t,a){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("/api/files/get/"+a).then((function(e){G()(e.data,a)})).catch((function(e){U.a.toast({html:e})}));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),e.onChange=function(t){Object(W.isUndefined)(t.target)?e.setState({newName:""}):e.setState({newName:t.target.value})},e.state={files:[],newName:""},e}return Object(A.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.post("/api/files/list").then((function(t){if(t.data.length>0){var a=t.data;a.forEach((function(t,n){a[n].size=e.formatBytes(a[n].size);var r=new Date(a[n].modified);a[n].modified=r.toString().substring(0,21)})),e.setState({files:a})}})).catch((function(e){return console.log(e)}))}},{key:"formatBytes",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 B";var a=1024,n=t<0?0:t,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],s=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,s)).toFixed(n))+" "+r[s]}},{key:"deleteFile",value:function(e){var t=this;N.a.delete("/api/files/delete/"+e).then((function(a){"deleted"===a.data&&(U.a.toast({html:"Deleted file.",displayLength:1e3}),t.state.files.forEach((function(a,n){if(a.name===e){var r=t.state.files.splice(0);r.splice(n,1),t.setState({files:r})}})))})).catch((function(e){U.a.toast({html:e})}))}},{key:"renameFile",value:function(e){N.a.post("/api/files/rename/"+e,{newName:this.state.newName}).then((function(e){"renamed"===e.data&&(U.a.toast({html:"Renamed file.",displayLength:1e3}),setTimeout((function(){return window.location.reload()}),1050))})).catch((function(e){U.a.toast({html:e,displayLength:1e3})}))}},{key:"render",value:function(){var e=this,t=this.state.files.map((function(t){var a=[];return a.push(r.a.createElement(Y,{key:t.name+t.size,name:t.name,modified:t.modified,size:t.size,onClick:e.handleActionClick,onChange:e.onChange})),a}));return r.a.createElement(z.a,{leaveAnimation:"elevator",appearAnimation:"elevator"},r.a.createElement("table",{className:"highlight"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"grey-text text-darken-2"},r.a.createElement("th",{style:{}},"Name"),r.a.createElement("th",{style:{}},"Last Modified"),r.a.createElement("th",{style:{width:"10%"}},"File Size"),r.a.createElement("th",{style:{width:"15%"},className:"center"},"Actions"))),r.a.createElement("tbody",null,t)))}}]),t}(n.Component),J=function(e){function t(){return Object(F.a)(this,t),Object(D.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement(K,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement(V,null))))}}]),t}(n.Component);function K(){var e=r.a.createElement("button",{className:"btn-large waves-effect waves-light blue accent-3"},r.a.createElement("i",{className:"material-icons",style:{fontSize:18,verticalAlign:"top"}},"cloud_upload"),r.a.createElement("span",{style:{paddingLeft:8,verticalAlign:"top"}},"Upload"));return r.a.createElement(H.Modal,{header:"Select files to Upload",trigger:e,actions:r.a.createElement("button",{className:"btn-flat modal-close waves-light waves-effect"},"Close")},r.a.createElement(B,null))}var Z=Object(c.b)((function(e){return{auth:e.auth}}))(J),$=a(2),Q=a.n($);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var te=function(e){function t(){var e;return Object(F.a)(this,t),(e=Object(D.a)(this,Object(T.a)(t).call(this))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e.state={},e}return Object(A.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement(o.b,{to:"/",style:{fontFamily:"monospace"},className:"brand-logo center waves-effect black-text"},r.a.createElement("i",{className:"material-icons"},"cloud"),"CLOUDY"),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"hide-on-large-only btn-flat waves-effect",onClick:this.onLogoutClick,style:ee({verticalAlign:"top",paddingBottom:50},this.props.auth.isAuthenticated?{}:{display:"none"})},r.a.createElement("i",{className:"material-icons"},"logout")),r.a.createElement("button",{style:ee({width:"110px",borderRadius:"3px",letterSpacing:"1.2px",marginTop:"0.5rem"},this.props.auth.isAuthenticated?{}:{display:"none"}),onClick:this.onLogoutClick,className:"right btn waves-effect hide-on-med-and-down waves-light hoverable blue accent-3"},"Logout"))))))}}]),t}(n.Component),ae=Object(c.b)((function(e){return{auth:e.auth,logoutUser:Q.a.func.isRequired}}),{logoutUser:x})(te),ne=function(e){function t(){var e;return Object(F.a)(this,t),(e=Object(D.a)(this,Object(T.a)(t).call(this))).state={},e}return Object(A.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"75vh"},className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Cloud Storage")," for the online"," ",r.a.createElement("span",{style:{fontFamily:"monospace"}},"generation")),r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Cloudy is a secure cloud storage platform, where you can store, share and work on all your files.",r.a.createElement("br",null),"You can access them on any device, anywhere you go!"),r.a.createElement("br",null),r.a.createElement("div",{className:"col s6"},r.a.createElement(o.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register")),r.a.createElement("div",{className:"col s6"},r.a.createElement(o.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect hoverable white black-text"},"Log In")))))}}]),t}(n.Component),re=Object(c.b)((function(e){return{auth:e.auth}}))(ne),se=a(3),le=a.n(se),oe=a(15),ie=a.n(oe);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue=function(e){function t(){var e;return Object(F.a)(this,t),(e=Object(D.a)(this,Object(T.a)(t).call(this))).onChange=function(t){var a,n=e.validateInput(t.target.id,t.target.value);e.setState((a={},Object(d.a)(a,t.target.id,t.target.value),Object(d.a)(a,"errors",n),a))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2},n=e.validateInput();e.setState({errors:n}),n=me({},n,{},e.state.errors),0===Object.entries(n).length&&e.props.registerUser(a,e.props.history)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(A.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"validateInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=me({},this.state.errors);return"email"===e&!ie.a.isEmail(t)?a.email="Invalid email address.":"email"===e&&delete a.email,"name"===e&ie.a.isEmpty(t)?a.name="Name field is required.":"name"===e&&delete a.name,"password"===e&!ie.a.isLength(t,{min:6,max:30})?(delete a.wrongpassword,a.password="Password must consist of 6 to 30 alphanumeric characters."):"password"===e&&(t!==this.state.password2?a.password2="Passwords do not match.":delete a.password2,delete a.password),"password2"===e&t!==this.state.password?a.password2="Passwords do not match.":"password2"===e&&delete a.password2,""===e&ie.a.isEmpty(this.state.name)&&(a.name="Name field is required."),""===e&ie.a.isEmpty(this.state.email)&&(a.email="Email field is required."),""===e&ie.a.isEmpty(this.state.password2)&&(a.password2="Confirm password field is required."),""===e&ie.a.isEmpty(this.state.password)&&(a.password="Password field is required."),a}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"2rem"},className:"row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement(o.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," your account"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:le()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,className:le()("",{invalid:e.email||e.emailnotfound}),error:e.email,id:"email",type:"email"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:le()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:le()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),de=Object(c.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){N.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(i.g)(ue));function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe=function(e){function t(){var e;return Object(F.a)(this,t),(e=Object(D.a)(this,Object(T.a)(t).call(this))).onChange=function(t){var a,n=e.validateInput(t.target.id,t.target.value);e.setState((a={},Object(d.a)(a,t.target.id,t.target.value),Object(d.a)(a,"errors",n),a))},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password},n=e.validateInput();e.setState({errors:n}),n=he({},n,{},e.state.errors),0===Object.entries(n).length&&e.props.loginUser(a)},e.state={email:"",password:"",errors:{}},e}return Object(A.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"validateInput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=he({},this.state.errors);return"email"===e&!ie.a.isEmail(t)?a.email="Invalid email address.":"email"===e&&delete a.email,"password"===e&!ie.a.isLength(t,{min:6,max:30})?(delete a.wrongpassword,a.password="Password must consist of 6 to 30 alphanumeric characters."):"password"===e&&delete a.password,""===e&ie.a.isEmpty(this.state.email)&&(a.email="Email field is required."),""===e&ie.a.isEmpty(this.state.password)&&(a.password="Password field is required."),a}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"2rem"},className:"row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement(o.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12"},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," to"," ",r.a.createElement("span",{style:{fontFamily:"monospace"},className:"brand-logo black-text"},r.a.createElement("i",{className:"material-icons"},"cloud"),r.a.createElement("span",{style:{fontFamily:"Verdana"}}," "),"CLOUDY")),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:le()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:le()("",{invalid:e.password||e.wrongpassword})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.wrongpassword)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Login"))))))}}]),t}(n.Component),be=Object(c.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){N.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),k(a);var n=O()(a);t(C(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}}})(fe),ve=function(){if(localStorage.jwtToken){console.log("checkToken()");var e=localStorage.jwtToken;k(e);var t=O()(e);E.dispatch(C(t));var a=Date.now()/1e3;t.exp<a&&(E.dispatch(x()),window.location.href="./login")}};var ge=function(){return ve(),r.a.createElement(c.a,{store:E},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ae,null),r.a.createElement(i.b,{exact:!0,path:"/",component:re}),r.a.createElement(i.b,{exact:!0,path:"/register",component:de}),r.a.createElement(i.b,{exact:!0,path:"/login",component:be}),r.a.createElement(i.d,null,r.a.createElement(P,{exact:!0,path:"/dashboard",component:Z})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},76:function(e,t,a){e.exports=a(218)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.d0b5e22c.chunk.js.map
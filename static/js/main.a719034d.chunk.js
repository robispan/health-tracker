(this["webpackJsonphealth-tracker"]=this["webpackJsonphealth-tracker"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/Logo.11bb0a76.png"},33:function(e,t,a){e.exports=a.p+"static/media/strava.18940f2a.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/runkeeper.3e08acc1.jpg"},35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),s=(a(40),a(2)),l=a.n(s),u=a(7),i=a(13),p=a(10),h=a(8),d=a.n(h),m=Object(n.createContext)(),v=Object(n.createContext)(),f=a(30),E=a.n(f),g=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-inner"},r.a.createElement(i.b,{to:"".concat("/health-tracker","/"),className:"navbar-logo"},r.a.createElement("img",{src:E.a,className:"hide-mobile",alt:"logo"})),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{exact:!0,activeClassName:"active",to:"".concat("/health-tracker","/")},"Home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"".concat("/health-tracker","/dashboard"),activeClassName:"active"},"Dashboard")))))},b=Object(n.createContext)(),_=function(e){var t=e.imageUrl,a=e.connected,n=e.onConnect,c=e.onDisconnect,o=["connect-card-button"];return a&&o.push("connected"),r.a.createElement("div",{className:"connect-card"},r.a.createElement("div",{className:"connect-card-image",style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("a",{href:"#",onClick:a?c:n,className:o.join(" ")},a?"Disconnect":"Connect"))},k=a(33),O=a.n(k),D=a(34),x=a.n(D),C=function(e){var t=e.location,a=e.history,c=Object(n.useContext)(m).loading,o=Object(n.useContext)(v),s=o.stravaData,l=o.authStrava,u=o.clearStravaData,i=Object(n.useContext)(b),p=i.runKeeperData,h=i.authRunKeeper,d=i.clearRunKeeperData;return Object(n.useEffect)((function(){console.log("inside effect",document.referrer),alert("document.referrer",document.referrer),"?strava-redirect"===t.search&&a.push({pathname:"/strava-auth",search:"?"+document.referrer.split("?")[1]})})),c?"Loading ...":r.a.createElement("div",null,r.a.createElement("h2",{className:"center upper"},"Connect your apps"),r.a.createElement("div",{className:"grid"},r.a.createElement(_,{imageUrl:O.a,connected:null!==s,onConnect:l,onDisconnect:u}),r.a.createElement(_,{imageUrl:x.a,connected:null!==p,onConnect:h,onDisconnect:d})))},j=a(18),A=(a(64),function(e){var t=e.ratio,a=e.label;return r.a.createElement("div",{className:"metrics-card"},r.a.createElement("h3",{className:"metrics-card-title center"},a),t?r.a.createElement(j.a,{value:t,text:"".concat(t,"%"),background:!0,backgroundPadding:6,styles:Object(j.b)({backgroundColor:"#00b9bb",textColor:"#fff",pathColor:"#fff",trailColor:"transparent"})}):r.a.createElement("div",{className:"center"},"Connect trackers on homepage to see your progression!"))}),w=function(){var e=Object(n.useContext)(v).stravaData,t=Object(n.useContext)(b).runKeeperData,a=50,c=800,o=e&&e.weight?Math.round(100*a/e.weight):null,s=t&&t.activities&&t.activities[1]?Math.round(100*t.activities[1].calories/c):null;return r.a.createElement("div",null,r.a.createElement("h2",{className:"center upper"},"Dashboard"),r.a.createElement("div",{className:"grid"},r.a.createElement(A,{label:"Weight loss progression",ratio:o}),r.a.createElement(A,{label:"Calories burn progression",ratio:s})))},y=function(e){var t=e.location,a=e.history,r=Object(n.useContext)(v).getStravaData,c=Object(n.useContext)(m),o=c.setLoading,s=c.stopLoading;return Object(n.useEffect)((function(){var e=new URLSearchParams(t.search).get("code");function n(){return(n=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(),t.prev=1,t.next=4,d.a.post("https://www.strava.com/oauth/token?client_id=".concat("39862","&client_secret=").concat("8642e21daa28d666c41d9c7da7c85064424094c5","&code=").concat(e,"&grant_type=authorization_code"));case 4:n=t.sent,r(n.data.access_token),sessionStorage.setItem("_strava_rt",n.data.refresh_token),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("error fetching Strava outh tokens",t.t0);case 12:s(),a.push("/health-tracker");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()})),null},R=function(e){var t=e.history,a=Object(n.useContext)(b).getRunKeeperData;return Object(n.useEffect)((function(){a()})),t.push("/"),r.a.createElement("p",null,"Loading ...")},N=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"404 - page not found"))},S=(a(65),function(){var e=Object(n.useContext)(m),t=e.setLoading,a=e.stopLoading,c=Object(n.useContext)(v),o=c.stravaData,s=c.getStravaData;return Object(n.useEffect)((function(){var e=sessionStorage.getItem("_strava_rt");function n(){return(n=Object(u.a)(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(),n.prev=1,n.next=4,d.a.post("https://www.strava.com/oauth/token?client_id=".concat("39862","&client_secret=").concat("8642e21daa28d666c41d9c7da7c85064424094c5","&refresh_token=").concat(e,"&grant_type=refresh_token"));case 4:r=n.sent,sessionStorage.setItem("_strava_rt",r.data.refresh_token),s(r.data.access_token),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("error fetching Strava auth tokens");case 12:a();case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}e&&!o&&(!function(){n.apply(this,arguments)}(),sessionStorage.removeItem("_strava_rt"))}),[]),r.a.createElement(i.a,null,r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"".concat("/health-tracker","/"),component:C}),r.a.createElement(p.a,{exact:!0,path:"".concat("/health-tracker","/dashboard"),component:w}),r.a.createElement(p.a,{exact:!0,path:"".concat("/health-tracker","/strava-auth"),component:y}),r.a.createElement(p.a,{exact:!0,path:"".concat("/health-tracker","/runkeeper-auth"),component:R}),r.a.createElement(p.a,{component:N}))))}),L=a(12),T=a(9),K=function(e,t){switch(t.type){case"SET_LOADING":return Object(T.a)({},e,{loading:!0});case"STOP_LOADING":return Object(T.a)({},e,{loading:!1});default:return e}},I=function(e){var t=Object(n.useReducer)(K,{loading:!1}),a=Object(L.a)(t,2),c=a[0],o=a[1];return r.a.createElement(m.Provider,{value:{loading:c.loading,setLoading:function(){return o({type:"SET_LOADING"})},stopLoading:function(){return o({type:"STOP_LOADING"})}}},e.children)},P=function(e,t){switch(t.type){case"GET_STRAVA_DATA":return Object(T.a)({},e,{stravaData:t.payload});case"CLEAR_STRAVA_DATA":return Object(T.a)({},e,{stravaData:null});default:return e}},G=function(e){var t=Object(n.useContext)(m),a=t.setLoading,c=t.stopLoading,o=Object(n.useReducer)(P,{stravaData:null}),s=Object(L.a)(o,2),i=s[0],p=s[1],h=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,d.a.get("https://www.strava.com/api/v3/athlete",{headers:{Authorization:"Bearer ".concat(t)}});case 4:n=e.sent,p({type:"GET_STRAVA_DATA",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error fetching Strava athlete data",e.t0);case 11:c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{stravaData:i.stravaData,authStrava:function(){window.location.href="https://www.strava.com/oauth/authorize?client_id=".concat("39862","&redirect_uri=").concat("https://robispan.github.io/health-tracker","/strava-auth/&response_type=code&scope=profile:read_all")},getStravaData:h,clearStravaData:function(){sessionStorage.removeItem("_strava_rt"),p({type:"CLEAR_STRAVA_DATA"})}}},e.children)},U=function(e,t){switch(t.type){case"GET_RUNKEEPER_DATA":return Object(T.a)({},e,{runKeeperData:t.payload});case"CLEAR_RUNKEEPER_DATA":return Object(T.a)({},e,{runKeeperData:null});default:return e}},B=function(e){var t=Object(n.useContext)(m),a=t.setLoading,c=t.stopLoading,o=Object(n.useReducer)(U,{runKeeperData:null}),s=Object(L.a)(o,2),i=s[0],p=s[1],h=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,d.a.get("https://platform.gethealth.io/v1/health/user/devices/?access_token=".concat("C7C76647A2FAE440E3B806209B930763C2E1C7A2"));case 4:t=e.sent,n=t.data.devices.filter((function(e){return"runkeeper"===e.name}))[0],r=n.connect_url,window.location.href=r,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("error authorizing Runkeeper",e.t0);case 13:c();case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,d.a.get("https://platform.gethealth.io/v1/health/user/activities/?access_token=".concat("C7C76647A2FAE440E3B806209B930763C2E1C7A2"));case 4:t=e.sent,p({type:"GET_RUNKEEPER_DATA",payload:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error fetching Runkeeper data",e.t0);case 11:c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.Provider,{value:{runKeeperData:i.runKeeperData,authRunKeeper:h,getRunKeeperData:v,clearRunKeeperData:function(){p({type:"CLEAR_RUNKEEPER_DATA"})}}},e.children)};o.a.render(r.a.createElement(I,null,r.a.createElement(G,null,r.a.createElement(B,null,r.a.createElement(S,null)))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a719034d.chunk.js.map
(this.webpackJsonpreduxexample=this.webpackJsonpreduxexample||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(31),s=a.n(l),r=(a(75),a(76),a(7)),o=a(2),i=a(3),m=a(6),u=a(4),p=a(5),h=a(1),d=a(17),b=a(34),E=a(33),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={name:""},a.onChange=a.onChange.bind(Object(E.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",null,"Enter Handle :",c.a.createElement("input",{type:"text",name:"name",className:"form-control form-control",value:this.state.name,onChange:this.onChange}),c.a.createElement("br",null),c.a.createElement(h.b,{to:"/user/".concat(this.state.name,"/info")},c.a.createElement("button",{type:"submit",className:"btn btn-light"},"Submit")),c.a.createElement("br",null)))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={name:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchUser(e)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light justify-content-center nav-tabs"},c.a.createElement("ul",{className:"navbar-nav "},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user",className:"nav-link"}," ","<"," ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link active"}," Basic ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link"}," Rating History ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link"}," Submissions ")))),c.a.createElement("div",{style:{padding:"5rem"}},this.props.name," ",c.a.createElement("br",null),this.props.userexists&&c.a.createElement("div",null,c.a.createElement("img",{src:this.props.info.titlePhoto,alt:"Title",height:"100",width:"100"}),c.a.createElement("br",null),"Rank : ",this.props.info.rank," ",c.a.createElement("br",null),"Organisation: ",this.props.info.organisation," ",c.a.createElement("br",null),"Contribution: ",this.props.info.contribution," ",c.a.createElement("br",null),"Rating: ",this.props.info.rating," ",c.a.createElement("br",null),"Maxrank: ",this.props.info.maxRank," ",c.a.createElement("br",null),"MaxRating: ",this.props.info.maxRating," ",c.a.createElement("br",null),c.a.createElement("br",null))))}}]),t}(n.Component),g=Object(r.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,info:e.user.info,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),{fetchUser:function(e){return function(t){console.log("User fetched"),fetch("https://codeforces.com/api/user.info?handles="+e).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_USER",payload:e,userExists:1})})).catch((function(e){t({type:"FETCH_USER",payload:e,userExists:0})}))}}})(v),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return c.a.createElement("div",null,this.props.num,". Contest Name: ",this.props.item.contestName)}}]),t}(n.Component),O=a(67),j={showAllTooltips:!0,tooltips:{callbacks:{title:function(e,t){}}}},N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getdata=function(){var e=[],t=[];return a.props.data.map((function(a,n){return e.push(a),t.push(n),0})),{labels:a.props.labels,datasets:[{label:"Rating",backgroundColor:"rgba(65, 142, 200, 0.2)",borderColor:"rgba(65, 142, 200, 1)",borderWidth:1,data:e}]}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(O.a,{options:j,data:this.getdata}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getdata=function(){var e=[];return a.props.ratinghist.map((function(t,a){return e.push(t.oldRating),0})),console.log(e),e},a.getlabels=function(){var e=[];return a.props.ratinghist.map((function(t,a){return e.push(a),0})),console.log(e),e},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchRatingHist(e)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light nav-tabs"},c.a.createElement("ul",{className:"navbar-nav nav-fill mx-auto"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user",className:"nav-link"}," ","<"," ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link"}," Basic ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link active"}," Rating History ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link"}," Submissions ")))),c.a.createElement("div",{style:{padding:"5rem"}},c.a.createElement(N,{data:this.getdata(),labels:this.getlabels()}),this.props.ratinghist.map((function(e,t){return c.a.createElement(y,{key:t,item:e,num:t+1})}))))}}]),t}(n.Component),C=Object(r.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),{fetchRatingHist:function(e){return function(t){console.log("Rating History Fetched"),fetch("https://codeforces.com/api/user.rating?handle="+e).then((function(e){return e.json()})).then((function(a){return t({type:"FETCH_RATINGHIST",payload:a,name:e})}))}}})(k),x=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.username;this.props.fetchUSubmissions(e)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light nav-tabs"},c.a.createElement("ul",{className:"navbar-nav nav-fill mx-auto",id:"navid"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user",className:"nav-link"}," ","<"," ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/info"),className:"nav-link"}," Basic ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/ratinghistory"),className:"nav-link"}," Rating History ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user/".concat(this.props.name,"/submissions"),className:"nav-link active"}," Submissions ")))),c.a.createElement("div",{style:{padding:"5rem"}},this.props.name))}}]),t}(n.Component),S=Object(r.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,usersubmissions:e.user.usersubmissions}}),{fetchUSubmissions:function(e){return function(t){console.log("Submissions Fetched"),fetch("https://codeforces.com/api/user.status?handle="+e).then((function(e){return e.json()})).then((function(a){return t({type:"FETCH_USUBMISSIONS",payload:a,name:e})}))}}})(x),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).chartRef=c.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-1"}),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/user/",exact:!0,component:f}),c.a.createElement(d.a,{path:"/user/:username/info",exact:!0,component:g}),c.a.createElement(d.a,{path:"/user/:username/ratinghistory",exact:!0,component:C}),c.a.createElement(d.a,{path:"/user/:username/submissions",exact:!0,component:S})))))))}}]),t}(n.Component),T=Object(r.b)((function(e){return{userexists:e.user.userExists,name:e.user.name,info:e.user.info,ratinghist:e.user.ratinghist,usersubmissions:e.user.usersubmissions}}),null)(D),w=function(){return function(e){console.log("Contestss Fetched");var t=[];fetch("https://codeforces.com/api/contest.list").then((function(e){return e.json()})).then((function(a){var n=[],c=[],l=[],s=[],r=[],o=[],i=[],m=[];(t=a).result.map((function(e,t){return"BEFORE"===e.phase&&n.push(e),"CF"===e.type?r.push(e):"IOI"===e.type?o.push(e):"ICPC"===e.type&&i.push(e),e.name.includes("Div. 1")?c.push(e):e.name.includes("Div. 2")?l.push(e):e.name.includes("Div. 3")?s.push(e):m.push(e),0})),e({type:"FETCH_CONTESTS",payload:t.result,upcoming:n,div1list:c,div2list:l,div3list:s,ioilist:o,icpclist:i,cflist:r,globallist:m,count:{div1:c.length,div2:l.length,div3:s.length,ioi:o.length,icpc:i.length,cf:r.length,global:m.length,upcoming:n.length,total:t.result.length}})}))}},F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={time:"",timeleft:"",days:"",link:""},a.interval="",a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Date(1e3*this.props.item.startTimeSeconds);var a,n=(new Date).getTime()/1e3,c="https://codeforces.com/contest/"+this.props.item.id;this.props.item.startTimeSeconds>n&&(c=""),this.setState({time:(a=t,a.getMonth()+1+"/"+a.getDate()+"/"+(a.getYear()+1900)+" "+a.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!1})),link:c}),console.log("Contest Item Mounted"),1===this.props.type&&(this.interval=setInterval((function(){var t=(new Date).getTime()/1e3,a=e.props.item.startTimeSeconds-t,n=Math.floor(a/86400);a%=86400;var c=Math.floor(a/3600);a%=3600;var l=Math.floor(a/60);a%=60;var s=c+"h:"+l+"m:"+Math.floor(a)+"s",r="Days: "+n;n||(r="Today"),e.setState({timeleft:s,days:r})}),1e3))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this,t=this.props.type;return c.a.createElement("tr",null,c.a.createElement("td",null,this.props.num),c.a.createElement("td",null,this.state.time),c.a.createElement("td",null,c.a.createElement("a",{href:this.state.link},this.props.item.name)),function(){if(1===t)return c.a.createElement("td",null,e.state.days," ",c.a.createElement("br",null)," ",e.state.timeleft," ")}())}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests(),console.log("Upcoming is loaded")}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"),c.a.createElement("th",{scope:"col"},"Time Left"))),c.a.createElement("tbody",null,this.props.upcominglist.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:1})})))))}}]),t}(n.Component),R=Object(r.b)((function(e){return{fetched:e.contest.fetched,upcominglist:e.contest.upcominglist}}),{fetchContests:w})(I),M=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.Div1list.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),U=Object(r.b)((function(e){return{fetched:e.contest.fetched,Div1list:e.contest.div1list}}),{fetchContests:w})(M),H=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.Div2list.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),_=Object(r.b)((function(e){return{fetched:e.contest.fetched,Div2list:e.contest.div2list}}),{fetchContests:w})(H),A=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.Div3list.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),B=Object(r.b)((function(e){return{fetched:e.contest.fetched,Div3list:e.contest.div3list}}),{fetchContests:w})(A),G=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.Globallist.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),P=Object(r.b)((function(e){return{fetched:e.contest.fetched,Globallist:e.contest.globallist}}),{fetchContests:w})(G),L=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.CFLISTlist.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),W=Object(r.b)((function(e){return{fetched:e.contest.fetched,CFLISTlist:e.contest.cflist}}),{fetchContests:w})(L),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.Ioilistlist.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),K=Object(r.b)((function(e){return{fetched:e.contest.fetched,Ioilistlist:e.contest.ioilist}}),{fetchContests:w})(J),Y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Date"),c.a.createElement("th",{scope:"col"},"Name"))),c.a.createElement("tbody",null,this.props.Icpclistlist.map((function(e,t){return c.a.createElement(F,{key:t,item:e,num:t+1,type:0})})))))}}]),t}(n.Component),$=Object(r.b)((function(e){return{fetched:e.contest.fetched,Icpclistlist:e.contest.icpclist}}),{fetchContests:w})(Y),q=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Label"),c.a.createElement("th",{scope:"col"},"Count"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null," 1."),c.a.createElement("td",null,"Total "),c.a.createElement("td",null,this.props.counts.total)),c.a.createElement("tr",null,c.a.createElement("td",null,"2."),c.a.createElement("td",null,"Upcoming "),c.a.createElement("td",null,this.props.counts.upcoming)),c.a.createElement("tr",null,c.a.createElement("td",null,"3."),c.a.createElement("td",null,"Division 1 "),c.a.createElement("td",null,this.props.counts.div1)),c.a.createElement("tr",null,c.a.createElement("td",null,"4."),c.a.createElement("td",null,"Division 2 "),c.a.createElement("td",null,this.props.counts.div2)),c.a.createElement("tr",null,c.a.createElement("td",null,"5."),c.a.createElement("td",null,"Division 3 "),c.a.createElement("td",null,this.props.counts.div3)),c.a.createElement("tr",null,c.a.createElement("td",null,"6."),c.a.createElement("td",null,"Global "),c.a.createElement("td",null,this.props.counts.global)),c.a.createElement("tr",null,c.a.createElement("td",null,"7."),c.a.createElement("td",null,"Code Forces Format "),c.a.createElement("td",null,this.props.counts.cf)),c.a.createElement("tr",null,c.a.createElement("td",null,"8."),c.a.createElement("td",null,"IOI Format"),c.a.createElement("td",null,this.props.counts.ioi)),c.a.createElement("tr",null,c.a.createElement("td",null,"9."),c.a.createElement("td",null,"ICPC Format"),c.a.createElement("td",null,this.props.counts.icpc)))))}}]),t}(n.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){0===this.props.fetched&&this.props.fetchContests()}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light navbar-light justify-content-center nav-tabs"},c.a.createElement("ul",{className:"navbar-nav "},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/contests/",className:"nav-link"}," ","<"," ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/contests/upcoming/",className:"nav-link"}," Upcoming ")),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(h.b,{to:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Type"),c.a.createElement("div",{class:"dropdown-menu bg-light"},c.a.createElement(h.b,{to:"/contests/div1",className:"dropdown-item "}," Div 1 "),c.a.createElement(h.b,{to:"/contests/div2",className:"dropdown-item "}," Div 2 "),c.a.createElement(h.b,{to:"/contests/div3",className:"dropdown-item "}," Div 3 "),c.a.createElement(h.b,{to:"/contests/global",className:"dropdown-item "}," Global "))),c.a.createElement("li",{className:"nav-item dropdown"},c.a.createElement(h.b,{to:"#",className:"nav-link dropdown-toggle","data-toggle":"dropdown"},"Format"),c.a.createElement("div",{class:"dropdown-menu bg-light"},c.a.createElement(h.b,{to:"/contests/format/cf",className:"dropdown-item "}," CF "),c.a.createElement(h.b,{to:"/contests/format/ioi",className:"dropdown-item "}," IOI"),c.a.createElement(h.b,{to:"/contests/format/icpc",className:"dropdown-item "}," ICPC "))))),c.a.createElement("br",null),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/contests/",exact:!0,component:function(){return c.a.createElement(q,{counts:e.props.counts,style:{margin:"auto"}})}}),c.a.createElement(d.a,{path:"/contests/upcoming/",exact:!0,component:R}),c.a.createElement(d.a,{path:"/contests/div1/",exact:!0,component:U}),c.a.createElement(d.a,{path:"/contests/div2/",exact:!0,component:_}),c.a.createElement(d.a,{path:"/contests/div3/",exact:!0,component:B}),c.a.createElement(d.a,{path:"/contests/global/",exact:!0,component:P}),c.a.createElement(d.a,{path:"/contests/format/cf/",exact:!0,component:W}),c.a.createElement(d.a,{path:"/contests/format/ioi/",exact:!0,component:K}),c.a.createElement(d.a,{path:"/contests/format/icpc/",exact:!0,component:$}))))}}]),t}(n.Component),Q=Object(r.b)((function(e){return{fetched:e.contest.fetched,counts:e.contest.count}}),{fetchContests:w})(z),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).chartRef=c.a.createRef(),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-1"}),c.a.createElement("div",{className:"col-sm-10"},c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/contests/",component:Q}),c.a.createElement(d.a,{path:"/user/",component:T})))))))}}]),t}(n.Component),X=Object(r.b)(null,null)(V),Z=a(16),ee=a(69),te=a(19),ae={userExists:0,name:"",info:{contribution:"",lastOnlineTimeSeconds:"",rating:"",friendOfCount:"",titlePhoto:"",rank:"",handle:"-e",maxRating:"",avatar:"",registrationTimeSeconds:"",maxRank:""},ratinghist:[],usersubmissions:[{id:-1,contestId:-1,creationTimeSeconds:0,relativeTimeSeconds:0,problem:{contestId:0,index:"1",name:"",type:"",points:1,rating:1,tags:["-","-","-"]},author:{contestId:1,members:[{handle:""}],participantType:"PRACTICE",ghost:!1,startTimeSeconds:1},programmingLanguage:"GNU C++14",verdict:"OK",testset:"TESTS",passedTestCount:66,timeConsumedMillis:296,memoryConsumedBytes:1638400}]},ne={contestlist:[],upcominglist:[],div1list:[],div2list:[],div3list:[],globallist:[],cflist:[],icpclist:[],ioilist:[],fetched:0,count:{div1:0,div2:0,div3:0,ioi:0,icpc:0,cf:0,global:0,upcoming:0,total:0}},ce=Object(Z.c)({contest:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"FETCH_CONTESTS":return console.log(t.div1list),Object(te.a)({},e,{contestlist:t.payload.result,upcominglist:t.upcoming,div1list:t.div1list,div2list:t.div2list,div3list:t.div3list,globallist:t.globallist,cflist:t.cflist,icpclist:t.icpclist,ioilist:t.ioilist,fetched:1,count:t.count})}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){default:return e;case"FETCH_USER":return console.log(t.payload),t.payload.result?Object(te.a)({},e,{name:t.payload.result[0].handle,info:t.payload.result[0],userExists:t.userExists}):Object(te.a)({},e,{name:"User_Not_Found",userExists:t.userExists});case"FETCH_RATINGHIST":return console.log(t.payload.result),Object(te.a)({},e,{ratinghist:t.payload.result,name:t.name});case"FETCH_USUBMISSIONS":return console.log("Submissions"),console.log(t.payload.result),Object(te.a)({},e,{usersubmissions:t.payload.result,name:t.name})}}}),le=[ee.a],se=Object(Z.e)(ce,{},Object(Z.d)(Z.a.apply(void 0,le)));var re=function(){return c.a.createElement(r.a,{store:se},c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/contests",className:"nav-link"}," Contests ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(h.b,{to:"/user",className:"nav-link"}," Search ")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"https://github.com/pulkit1joshi/Codux-Profile"},"Git")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/"},"About"))))),c.a.createElement("div",{className:"container",style:{paddingBottom:"60px;"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 text-center"},c.a.createElement("h1",{className:"mt-5"},"Codux"),c.a.createElement("p",{className:"lead"},"Check your coding profile at ",c.a.createElement("img",{src:"https://sta.codeforces.com/s/70808/images/codeforces-logo-with-telegram.png",alt:"Codeforces",style:{width:"15%",height:"15%"}})),c.a.createElement("div",{className:"App"},c.a.createElement("hr",null),c.a.createElement(X,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(174)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.c12eb068.chunk.js.map
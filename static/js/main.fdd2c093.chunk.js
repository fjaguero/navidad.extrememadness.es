(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/blank.421c8c7b.jpg"},14:function(e,t,a){e.exports=a.p+"static/media/hat.4b30701c.png"},15:function(e,t,a){e.exports=a.p+"static/media/balls.a18463b3.png"},16:function(e,t,a){e.exports=a.p+"static/media/bell.e99fb3d6.png"},17:function(e,t,a){e.exports=a.p+"static/media/tree.05855794.png"},18:function(e,t,a){e.exports=a.p+"static/media/header.66bfc60d.png"},19:function(e,t,a){e.exports=a(41)},25:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),i=(a(25),a(27),a(29),a(1)),s=a(2),c=a(4),d=a(3),m=a(5),p=a(12),u=a.n(p),h=a(13),f=a.n(h),b=a(14),g=a.n(b),k=a(15),v=a.n(k),E=a(16),y=a.n(E),w=a(17),x=a.n(w),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"renderDecoration",value:function(e){return e>0&&e<.16?o.a.createElement("img",{className:"decoration balls",alt:"Balls",src:v.a}):e>.16&&e<.32?o.a.createElement("img",{className:"decoration hat",alt:"Hat",src:g.a}):o.a.createElement("img",{className:"decoration bell",alt:"Bell",src:y.a})}},{key:"render",value:function(){var e=this.props,t=e.date,a=e.image,n=e.winner,r=Math.random(),l=this.renderDecoration(r);return o.a.createElement("div",{className:"block col-xs col-xs-12 col-md-6"},o.a.createElement("div",{className:"block__date"},t),o.a.createElement("div",{className:"block__photo"},l,a?o.a.createElement("img",{className:"photo",src:a,alt:"Giveaway"}):o.a.createElement("img",{className:"photo",src:f.a,alt:"Giveaway coming soon..."}),r>.5&&o.a.createElement("img",{src:x.a,className:"tree",alt:"Tree"})),n&&o.a.createElement("div",{className:"block__winner"},"Regalado a ".concat(n)))}}]),t}(o.a.PureComponent),O=a(18),M=a.n(O),j={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,.4)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px",width:"600px",height:"320px",color:"#000",margin:"0 auto",textAlign:"center"}},C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={isErrored:!1,isModalOpen:!1,prizes:[{key:"2018-12-23",date:"Lunes 24"},{key:"2018-12-25",date:"Martes 25"},{key:"2018-12-26",date:"Mi\xe9rcoles 26"},{key:"2018-12-27",date:"Jueves 27"},{key:"2018-12-28",date:"Viernes 28"},{key:"2018-12-31",date:"Lunes 31"},{key:"2019-01-01",date:"Martes 1"},{key:"2019-01-02",date:"Mi\xe9rcoles 2"},{key:"2019-01-03",date:"Jueves 3"},{key:"2019-01-04",date:"Viernes 4"}]},a.openModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("http://localhost:3300/giveaway",{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log("prizes"),console.log(t),e.setState({prizes:t})})}},{key:"renderBlocks",value:function(){return this.state.prizes.map(function(e,t){return o.a.createElement(N,{index:t,key:e.key,date:e.date,image:e.image,winner:e.winner})})}},{key:"render",value:function(){var e=this.renderBlocks(),t=this.state.isErrored,a=o.a.createElement("div",{className:"blocks-wrapper"},o.a.createElement("div",{className:"row"},e),o.a.createElement("button",{className:"btn btn-info",onClick:this.openModal},"T\xe9rminos del sorteo"));return t&&(a=o.a.createElement("h2",null,"Ha ocurrido un error")),o.a.createElement("div",null,o.a.createElement("h1",{className:"title"},o.a.createElement("img",{src:M.a,alt:"Sorteo de Navidad"})),o.a.createElement("div",{className:"wrap container-fluid"},a),o.a.createElement(u.a,{style:j,isOpen:this.state.isModalOpen,onRequestClose:this.closeModal},o.a.createElement("h1",null,"T\xe9rminos del sorteo"),o.a.createElement("ul",{className:"list"},o.a.createElement("li",null,"Podr\xe1n participar los suscriptores y los patrons."),o.a.createElement("li",null,"Comenzar\xe1 el d\xeda 24 de diciembre y finalizar\xe1 el 4 de enero (a excepci\xf3n del fin de semana). Los premios se sortear\xe1n offline (d\xedas 31 y 1) y en streaming."),o.a.createElement("li",null,"El ganador de uno de los premios puede decidir no qued\xe1rselo, en ese caso se har\xe1 reroll."),o.a.createElement("li",null,"Los participantes podr\xe1n ganar un m\xe1ximo de un premio."),o.a.createElement("li",null,"Los premios f\xedsicos s\xf3lo se enviar\xe1n a nivel nacional.")),o.a.createElement("button",{onClick:this.closeModal},"Cerrar")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.fdd2c093.chunk.js.map
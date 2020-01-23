(this.webpackJsonpclimhub=this.webpackJsonpclimhub||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),i=(a(14),a(1)),o=a.n(i),l=a(2),m=a(3),u=a(5),h=a(4),d=a(6);a(16),a(17),a(18);var p=function(e){return r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.celsius?r.a.createElement("h1",{className:"py-2"},e.celsius,"\xb0"):null,function(e,t){if(e&&t)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0"))}(e.tempMin,e.tempMax),r.a.createElement("h4",{className:"py-3"},e.description)))},w=(a(19),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"error",value:function(){return r.a.createElement("div",{className:"col-12 py-2"},r.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",dismissible:"true",role:"alert"},"Please Enter City And Country",r.a.createElement("button",{type:"button",className:"close",onClick:this.props.hideAlert},r.a.createElement("span",null,"\xd7"))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.props.loadWeather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{type:"text",name:"city",autoComplete:"off",className:"form-control",placeholder:"City"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",name:"country",autoComplete:"off",className:"form-control",placeholder:"Country"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left"},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))),r.a.createElement("div",null,this.props.error?this.error():null))}}]),t}(r.a.Component)),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).hideAlert=function(t){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({error:!1});case 1:case"end":return t.stop()}}))},e.getWeather=function(t){var a,n,r,s,c,i;return o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(t.preventDefault(),r=null===(a=t.target.elements.city)||void 0===a?void 0:a.value,s=null===(n=t.target.elements.country)||void 0===n?void 0:n.value,!r||!s){l.next=14;break}return l.next=6,o.a.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(s,"&appid=").concat("b0524f26682bfdea40e0a4d3d2d08b4e")));case 6:return c=l.sent,l.next=9,o.a.awrap(c.json());case 9:i=l.sent,e.setState({city:"".concat(i.name,", ").concat(i.sys.country),celsius:e.calculateCelsius(i.main.temp),tempMax:e.calculateCelsius(i.main.temp_max),tempMin:e.calculateCelsius(i.main.temp_min),description:i.weather[0].description,error:!1}),e.getWeatherIcon(e.weatherIcon,i.weather[0].id),l.next=15;break;case 14:e.setState({error:!0});case 15:case"end":return l.stop()}}))},e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,tempMax:void 0,tempMin:void 0,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this.weatherIcon.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=231:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weatherIcon.Snow});break;case t>=700&&t<=781:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weatherIcon.Clouds});break;default:this.setState({icon:this.weatherIcon.Clouds})}}},{key:"calculateCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,{hideAlert:this.hideAlert,loadWeather:this.getWeather,error:this.state.error}),r.a.createElement(p,{city:this.state.city,country:this.state.country,celsius:this.state.celsius,tempMax:this.state.tempMax,tempMin:this.state.tempMin,description:this.state.description,weatherIcon:this.state.icon}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.8f388d56.chunk.js.map
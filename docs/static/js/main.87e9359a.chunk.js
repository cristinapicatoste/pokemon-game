(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],[,,,function(e,n,a){e.exports=a(13)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(2),o=a.n(c),i=(a(8),a(9),function(e){var n,a=e.id,t=e.name,c=e.type,o=e.exp,i="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((n=a)<=999?"00".concat(n).slice(-3):n,".png");return r.a.createElement("div",{className:"Pokecard-container"},r.a.createElement("h3",null,t),r.a.createElement("img",{className:"Pokecard-img",src:i,alt:t}),r.a.createElement("p",{className:"Pokecard-features"},"Type: ",c),r.a.createElement("p",{className:"Pokecard-features"},"Exp: ",o))}),l=(a(10),function(e){var n,a=e.isWinner,t=e.pokemon,c=e.exp;return n=a?r.a.createElement("h1",{className:"Pokedex-h1-winner"},"WINNER!"):r.a.createElement("h1",{className:"Pokedex-h1-loser"},"LOSER!"),r.a.createElement("div",null,r.a.createElement("p",null,"Total experience: ",r.a.createElement("strong",null,c)),n,r.a.createElement("div",{className:"Pokedex-container"},t.map((function(e){return r.a.createElement(i,{key:e.id,id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}),s=(a(11),function(e){for(var n=[],a=[].concat([{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]);n.length<a.length;){var t=Math.floor(Math.random()*a.length),c=a.splice(t,1)[0];n.push(c)}var o=n.reduce((function(e,n){return e+n.base_experience}),0),i=a.reduce((function(e,n){return e+n.base_experience}),0);return r.a.createElement("div",null,r.a.createElement("button",null,"Play again"),r.a.createElement("h2",null,"Player 1"),r.a.createElement(l,{pokemon:n,exp:o,isWinner:o>i}),r.a.createElement("h2",null,"Player 2"),r.a.createElement(l,{pokemon:a,exp:i,isWinner:i>o}))}),m=(a(12),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-h1"},"POKECARD GAME"),r.a.createElement(s,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.87e9359a.chunk.js.map
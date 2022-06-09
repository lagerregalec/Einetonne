!function(r){"use strict";r.fn.fitVids=function(e){var t,n,i={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(t=document.head||document.getElementsByTagName("head")[0],(n=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(n.childNodes[1])),e&&r.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var o=".fitvidsignore";i.ignore&&(o=o+", "+i.ignore);e=r(this).find(e.join(","));(e=(e=e.not("object object")).not(o)).each(function(){var e,t,n=r(this);0<n.parents(o).length||"embed"===this.tagName.toLowerCase()&&n.parent("object").length||n.parent(".fluid-width-video-wrapper").length||(n.css("height")||n.css("width")||!isNaN(n.attr("height"))&&!isNaN(n.attr("width"))||(n.attr("height",9),n.attr("width",16)),e=("object"===this.tagName.toLowerCase()||n.attr("height")&&!isNaN(parseInt(n.attr("height"),10))?parseInt(n.attr("height"),10):n.height())/(isNaN(parseInt(n.attr("width"),10))?n.width():parseInt(n.attr("width"),10)),n.attr("name")||(t="fitvid"+r.fn.fitVids._count,n.attr("name",t),r.fn.fitVids._count++),n.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),n.removeAttr("height").removeAttr("width"))})})},r.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(t,n){var o,i,r,s,a,d,c,l=n.querySelector("link[rel=next]");function p(){if(404===this.status)return t.removeEventListener("scroll",u),void t.removeEventListener("resize",h);this.response.querySelectorAll("article.post-card").forEach(function(e){o.appendChild(n.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?l.href=e.href:(t.removeEventListener("scroll",u),t.removeEventListener("resize",h)),c=n.documentElement.scrollHeight,s=r=!1}function e(){var e;s||(a+d<=c-i?r=!1:(s=!0,(e=new t.XMLHttpRequest).responseType="document",e.addEventListener("load",p),e.open("GET",l.href),e.send(null)))}function m(){r||t.requestAnimationFrame(e),r=!0}function u(){a=t.scrollY,m()}function h(){d=t.innerHeight,c=n.documentElement.scrollHeight,m()}!l||(o=n.querySelector(".post-feed"))&&(s=r=!(i=300),a=t.scrollY,d=t.innerHeight,c=n.documentElement.scrollHeight,t.addEventListener("scroll",u,{passive:!0}),t.addEventListener("resize",h),m())}(window,document);let addedGeoJSON,config={minZoom:1,maxZoom:18,maxBoundsViscosity:.9};const map=L.map("map",config);var bigIcon=L.icon({iconUrl:"/assets/containerIcon.svg",iconSize:[100,100],iconAnchor:[50,50],popupAnchor:[0,-5]}),smallIcon=L.icon({iconUrl:"/assets/smallIcon.svg",iconSize:[10,10],iconAnchor:[5,5],popupAnchor:[0,-5]}),popup=L.popup();function onZoomend(e,t){18<=map.getZoom()?addedGeoJSON.eachLayer(function(e){e.setIcon(bigIcon)}):addedGeoJSON.eachLayer(function(e){e.setIcon(smallIcon)})}L.tileLayer("https://api.mapbox.com/styles/v1/anikolov/cl1c3uy3k001s14s9lr4p3kvp/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5pa29sb3YiLCJhIjoiY2wxYzNraGFjMDF2ODNnbjFwN2FoenI2eiJ9.v5X2PYctWmudRI_xdVGb8w",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map),fetch("https://raw.githubusercontent.com/lagerregalec/Einetonne/main/assets/data/containers.json").then(function(e){return e.json()}).then(function(e){addedGeoJSON=L.geoJSON(e,{pointToLayer:function(e,t){return L.marker(t,{icon:smallIcon})},onEachFeature:function(e,t){"Point"===e.geometry.type&&t.bindPopup(e.properties.gefaess_art)}}).addTo(map),map.fitBounds(addedGeoJSON.getBounds(),{padding:[20,20]}),map.setMinZoom(map.getZoom()),map.setMaxBounds(addedGeoJSON.getBounds().pad(.1)),map.on("zoomend",onZoomend)});const editable=document.querySelector(".changing-text"),words=["CO2","Biomasse","Tonnen","Kompost","Menschen","Biogas","Wertstoffe","Ressourcen","Lebensmittel","Erde","Zukunft"],animationTimeInms=100,delayInms=2e3;function close(t){editable.textContent=words[t%words.length];const n=setInterval(function(){const e=editable.textContent;e||(clearInterval(n),setTimeout(function(){open(++t)},100)),editable.textContent=e.slice(0,-1)},animationTimeInms)}function open(e){const t=words[e%words.length];let n=1;editable.textContent="";const o=setInterval(function(){editable.textContent.length===t.length&&(clearInterval(o),setTimeout(function(){close(e)},delayInms)),editable.textContent=t.slice(0,n++)},animationTimeInms)}function writeWords(){open(0)}writeWords();
//# sourceMappingURL=casper.js.map
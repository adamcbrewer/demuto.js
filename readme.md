# demuto.js
### Changing your styles for the worse

Qick-toggling of Modernizr class-names appended to the &lt;html&gt; tag.
This should be used to test progressive enhanced CSS during development.

Drag the following to your bookmarks toolbar.
<a href='javascript:(function(e){var t=this,n=e.M||!1,r=document.documentElement;if(!n)return!1;var i=function(){document.addEventListener("click",function(e){if(e.target.hasAttribute("data-test")){var n=e.target,r=n.dataset.pass,i=n.dataset.test;t.toggle(i,r,n)}})};this.off={};this.list=[];this.init=function(){var e,t=document.createDocumentFragment(),r=document.createElement("div");for(e in n){if(typeof n[e]=="function"||typeof n[e]=="array"||typeof n[e]=="object"||!e.indexOf("_"))continue;var s=this.makeToggle(e,n[e]);t.appendChild(s)}r.setAttribute("class","demuto");r.appendChild(t);document.body.appendChild(r);i()};this.makeToggle=function(e,t){if(typeof name=="string"){var n=document.createElement("button");n.innerHTML=e;n.setAttribute("data-test",e);n.setAttribute("data-pass",t);n.setAttribute("data-status","on");n.className="demuto-btn";return n}return!1};this.toggle=function(e,t,n){var i={names:r.className,list:r.classList},s=0,o=!1;if(this.off[e]===undefined){this.off[e]=t;e:for(s;s<i.list.length;s++){o=i.list[s];if(o===e){r.className=r.className.replace(e,"");n.setAttribute("data-status","off");break e}}}else{r.className=r.className.trim()+" "+e;n.setAttribute("data-status","on");delete this.off[e]}};this.init();return this})({M:Modernizr});'>demuto.js</a>

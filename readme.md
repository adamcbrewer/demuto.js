# demuto.js
### Changing your styles for the worse!

This tool is to give a much easier way to toggle the Modernizr classes appended to the ```html``` element.
It's primarily for ensuring progressive enhancment or gracefully degrading styles during development.

Just inlude the following script and create a new instance:

```
var demuto = new Demuto({
    M: Modernizr
}).init();
```

Otherwise, a bookmarklet might be a better option to not clutter your code-base:

```js
// create a bookmark with the following code
javascript:(function(){ var Demuto=function(e){var t=this,n=e.M||false,r=document.documentElement;if(!n)return false;var i=function(){document.addEventListener("click",function(e){if(e.target.hasAttribute("data-test")){var n=e.target,r=n.dataset["pass"],i=n.dataset["test"];t.toggle(i,r,n)}})};this.off={};this.list=[];this.init=function(){var e,t=document.createDocumentFragment(),r=document.createElement("div");for(e in n){if(typeof n[e]==="function"||typeof n[e]==="array"||typeof n[e]==="object"||!e.indexOf("_"))continue;var s=this.makeToggle(e,n[e]);t.appendChild(s)}r.setAttribute("class","demuto");r.appendChild(t);document.body.appendChild(r);this.styles();i()};this.makeToggle=function(e,t){if(typeof name=="string"){var n=document.createElement("button");n.innerHTML=e;n.setAttribute("data-test",e);n.setAttribute("data-pass",t);n.setAttribute("data-status","on");n.className="demuto-btn";return n}return false};this.toggle=function(e,t,n){var i={names:r.className,list:r.classList},s=0,o=false;if(this.off[e]===undefined){this.off[e]=t;e:for(s;s<i.list.length;s++){o=i.list[s];if(o===e){r.className=r.className.replace(e,"");n.setAttribute("data-status","off");break e}}}else{r.className=r.className.trim()+" "+e;n.setAttribute("data-status","on");delete this.off[e]}};this.styles=function(){var e=document.createElement("style"),t=document.getElementsByTagName("head")[0],n="";n+=".demuto { position: fixed; top: 0; left: 0; z-index: 10000; padding: 1em; }";n+=".demuto-btn { border: 1px solid #ccc; padding: 0.2em 0.6em; background-color: papayawhip; margin: 0.2em 0.4em; cursor: pointer; float: left; clear: left; }";n+=".demuto-btn:hover, .demuto-btn[data-pass=false], .demuto-btn[data-status=off] { background-color: lightblue; border-color: steelblue; }";e.type="text/css";if(e.styleSheet){e.styleSheet.cssText=n}else{e.appendChild(document.createTextNode(n))}t.appendChild(e)};return this};(new Demuto({M:Modernizr})).init() })();
```

Have a lovely day!

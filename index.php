<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="author" content="Adam Brewer">

	<title>Demuto.js</title>

	<link href="assets/css/core.css" rel="stylesheet">
	<script src="assets/js/libs/modernizr-2.6.2.custom.js"></script>

</head>
<body>

	<div class="wrapper">

		<header class="header">
			<h1 class="title">demuto.js</h1>
			<h3>Changing your styles for the worse</h3>
		</header>

		<article>
			<p>
				Qick-toggling of Modernizr class-names appended to the &lt;html&gt; tag.
				This should be used to test progressive enhanced CSS during development.<br />
				<br />
				Alternatively, save this bookmarklet for any site that uses Modernizr.<br />
				<br />
				<a class="bookmarklet" href='javascript:(function(e){var t=this,n=e.M||!1,r=document.documentElement;if(!n)return!1;var i=function(){document.addEventListener("click",function(e){if(e.target.hasAttribute("data-test")){var n=e.target,r=n.dataset.pass,i=n.dataset.test;t.toggle(i,r,n)}})};this.off={};this.list=[];this.init=function(){var e,t=document.createDocumentFragment(),r=document.createElement("div");for(e in n){if(typeof n[e]=="function"||typeof n[e]=="array"||typeof n[e]=="object"||!e.indexOf("_"))continue;var s=this.makeToggle(e,n[e]);t.appendChild(s)}r.setAttribute("class","demuto");r.appendChild(t);document.body.appendChild(r);this.styles();i()};this.makeToggle=function(e,t){if(typeof name=="string"){var n=document.createElement("button");n.innerHTML=e;n.setAttribute("data-test",e);n.setAttribute("data-pass",t);n.setAttribute("data-status","on");n.className="demuto-btn";return n}return!1};this.toggle=function(e,t,n){var i={names:r.className,list:r.classList},s=0,o=!1;if(this.off[e]===undefined){this.off[e]=t;e:for(s;s<i.list.length;s++){o=i.list[s];if(o===e){r.className=r.className.replace(e,"");n.setAttribute("data-status","off");break e}}}else{r.className=r.className.trim()+" "+e;n.setAttribute("data-status","on");delete this.off[e]}};this.styles=function(){console.log("here");var e=document.createElement("style"),t=document.getElementsByTagName("head")[0],n="";n+=".demuto { position: fixed; top: 0; left: 0; z-index: 10000; padding: 1em; }";n+=".demuto-btn { border: 1px solid #ccc; padding: 0.2em 0.6em; background-color: papayawhip; margin: 0.2em 0.4em; cursor: pointer; float: left; clear: left; }";n+=".demuto-btn:hover, .demuto-btn[data-pass=false], .demuto-btn[data-status=off] { background-color: lightblue; border-color: steelblue; }";e.type="text/css";e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n));t.appendChild(e)};this.init();return this})({M:Modernizr});'>demuto.js</a>
			</p>
		</article>

		<article>
			<h4>Etymology</h4>
			<p>From <em>dē</em> + <em>mūtō</em> ("change, alter").</p>
			<h4>Verb</h4>
			<p>Change or alter for the worse, make worse.</p>
			<br />
			<a target="_blank" href="http://en.wiktionary.org/wiki/demuto">Reference: wiktionary.org</a>
		</article>


		<div class="test">
			your Gucci element
		</div>

	</div>

	<script src="assets/js/script.js" async defer></script>

</body>
</html>

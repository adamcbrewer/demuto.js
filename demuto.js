/**
 * Demuto - changing your styles for the worse.
 *
 * Qick-toggling of the Modernizr class-names appended to the <html> tag.
 *
 * This should be used to test progressive enhanced CSS during development.
 * No dependencies, although usage in a modern browser is recommended.
 *
 */
var Demuto = function (args) {


	// Private vars and stuff
	// =========================
	//
	var demuto = this,
		M = args.M || false,
		html = document.documentElement;

	if (!M) return false;


	// Private functions
	// =========================
	//
	var _createEvents = function () {
		document.addEventListener('click', function (evt) {
			if (evt.target.hasAttribute('data-test')) {
				var target = evt.target,
					pass = target.dataset['pass'],
					test = target.dataset['test'];

				demuto.toggle(test, pass, target);

			}
		});
	};


	// Public domain
	// =========================
	//

	// object/list of toggled class names
	this.off = {};

	// Our list of button elements
	this.list = [];


	/**
	 * Setup logic
	 *
	 */
	this.init = function () {
		var test,
			frag = document.createDocumentFragment(),
			container = document.createElement('div');

		for (test in M) {
			if (typeof M[test] === 'function' || typeof M[test] === 'array' || typeof M[test] === 'object' || !test.indexOf('_')) continue;
			var button = this.makeToggle(test, M[test]);
			frag.appendChild(button);
		}
		container.setAttribute('class', 'demuto');
		container.appendChild(frag);
		document.body.appendChild(container);

		this.styles();

		_createEvents();

	};


	/**
	 * Making toggle buttons here
	 *
	 */
	this.makeToggle = function (test, pass) {
		if (typeof name == 'string') {
			var btn = document.createElement('button');
			btn.innerHTML = test;
			btn.setAttribute('data-test', test);
			btn.setAttribute('data-pass', pass);
			btn.setAttribute('data-status', 'on'); // default
			btn.className = 'demuto-btn';
			return btn;
		}
		return false;
	};


	/**
	 * Handles all the JS required to add/remove classes
	 * from the <html> element as well as controlling states
	 * on each of the buttons
	 *
	 */
	this.toggle = function (test, pass, button) {

		var htmlClass = {
				names: html.className,
				list: html.classList
			},
			i = 0,
			choice = false;

		if (this.off[test] === undefined) {
			this.off[test] = pass;

			loopList:
			for (i; i < htmlClass.list.length; i++) {
				choice = htmlClass.list[i];
				if (choice === test) {
					html.className = html.className.replace(test, '');
					button.setAttribute('data-status', 'off');
					break loopList;
				}
			}

		} else {

			html.className = html.className.trim() + ' ' + test;
			button.setAttribute('data-status', 'on');
			delete this.off[test];

		}

	};


	/**
	 * Inject Gucci styles
	 *
	 */
	this.styles = function () {
		console.log('here');
		var style = document.createElement('style'),
			head = document.getElementsByTagName('head')[0],
			css = "";

		css += ".demuto { position: fixed; top: 0; left: 0; z-index: 10000; padding: 1em; }";
		css += ".demuto-btn { border: 1px solid #ccc; padding: 0.2em 0.6em; background-color: papayawhip; margin: 0.2em 0.4em; cursor: pointer; float: left; clear: left; }";
		css += ".demuto-btn:hover, .demuto-btn[data-pass=false], .demuto-btn[data-status=off] { background-color: lightblue; border-color: steelblue; }";

		style.type = "text/css";
		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);

	};

	return this;

};

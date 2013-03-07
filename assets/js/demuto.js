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

	return this;

};

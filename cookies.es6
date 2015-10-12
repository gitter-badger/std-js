class Cookies {
	static set(name, value, config = {
			path: location.pathname,
			domain: location.host,
			secure: location.protocol === 'https:'
		}
	) {
		config[name] = value;
		document.cookie = Object.keys(config).reduce((cookie, prop) => `${cookie}${encodeURIComponent(name)}=${encodeURIComponent(value)};`, '');
	}
	static remove(name) {
		Cookies.set(name, null, {'max-age': -1});
	}
	static get(name) {
		return ``;
	}
	static has(name) {
		return false;
	}
}

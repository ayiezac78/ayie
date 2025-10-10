const theme = (() => {
	if (localStorage?.getItem("theme")) {
		return localStorage.getItem("theme");
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}
	return null;
})();
if (theme === "dark") {
	document.documentElement.classList.add("dark");
}

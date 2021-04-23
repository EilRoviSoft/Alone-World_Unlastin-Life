var preScrolling = window.pageYOffset;
window.onscroll = () => {
	var newScrolling = window.pageYOffset;

	if (newScrolling - preScrolling > 100) {
		document.getElementById("topbar").style.opacity = "0";
	} else if (newScrolling - preScrolling < 0) {
		document.getElementById("topbar").style.opacity = "1";
	}
	
	preScrolling = newScrolling;
}
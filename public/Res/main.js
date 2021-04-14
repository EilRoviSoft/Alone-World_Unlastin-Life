var isOpenSideBar = false;
var previousState = "Info";

function onSideBarButtonClick() {
	if (isOpenSideBar) {
		document.getElementById("SideBar").style.width = "0px";
		document.getElementById("TopBar").style.marginLeft = "0px";

		isOpenSideBar = false;
	} else {
		document.getElementById("SideBar").style.width = "200px";
		document.getElementById("TopBar").style.marginLeft = "200px";

		isOpenSideBar = true;
	}
}

function onUpButtonClick() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
}

function openState(currentState) {
	document.getElementById(previousState).style.display = "none";
	document.getElementById(currentState).style.display = "block";
	previousState = currentState;
}

window.onscroll = function () {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 100) {
		document.getElementById("UpButton").style.opacity = 1;
	} else {
		document.getElementById("UpButton").style.opacity = 0;
	}
}
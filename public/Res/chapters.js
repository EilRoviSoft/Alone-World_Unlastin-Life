/*var isOpen = false;

function openContents() {
	if (isOpen) {
		document.getElementById("SideBar").style.display = "0%";
		//alert("off!");

		isOpen = false;
	} else {
		document.getElementById("SideBar").style.width = "30%";
		//alert("on!");

		isOpen = true;
	}
}*/

var preOffset = window.pageYOffset;

window.onscroll = function() {
	var nowOffset = window.pageYOffset;
	if (nowOffset > preOffset) {
		document.getElementById("TopBar").style.opacity = 0;
	} else {
		document.getElementById("TopBar").style.opacity = 1;
	}

	preOffset = nowOffset;
}
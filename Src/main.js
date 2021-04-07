let isOpen = false;

function doNavigationLogic() {
	if (isOpen) {
		document.getElementById("SideBar").style.width = "0px";
		document.getElementById("main").style.marginLeft = "0px";
		isOpen = false;
	} else {
		document.getElementById("SideBar").style.width = "250px";
		document.getElementById("main").style.marginLeft = "250px";
		isOpen = true;
	}
}
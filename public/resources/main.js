var preState = "Info";

function setState(nowState) {
    document.getElementById(preState).style.display = "none";
    document.getElementById('R' + preState).classList.replace("sector-table__active", "sector-table__basic");

    document.getElementById(nowState).style.display = "block";
    document.getElementById('R' + nowState).classList.replace("sector-table__basic", "sector-table__active");

    preState = nowState;
}
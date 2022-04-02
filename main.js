document.getElementById("icon-menu").addEventListener("click", showMenu)
document.getElementById("dropdown-icon-menu").addEventListener("click", showMenu)

function showMenu(){
    document.getElementById("dropdown-menu").classList.toggle('show-dropdown-menu');
}
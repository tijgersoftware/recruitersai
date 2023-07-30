function ResponsiveNavMenu() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
        console.log("adding responsive")
        x.className += " responsive";
    } else {
        console.log("adding topnac")
        x.className = "topnav";
    }
}


  
function toggleDropdownMenu(menuId) {
    console.log("toggle drop down")
    console.log(menuId)
    
    const menu = document.getElementById(menuId);
    console.log(menu.className)
    if (menu.className === "menu" ||menu.className === "menu visible" ) {
        console.log("adding invisible")
        menu.className = "menu";
        menu.className += " invisible";
    } else {
        console.log("adding visible")
        menu.className = "menu";
        menu.className += " visible";
    }
  }




  
  

  
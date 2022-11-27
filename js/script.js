/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 

  // animation of searchbar
  var BASICBUTTONDIV = document.getElementById("BasicButtonDiv");
  var ADVANCEDBUTTONDIV=document.getElementById("AdvancedButtonDiv");
  var ADVANCEDINPUTSEARCHDIV=document.getElementById("AdvancedInputSearchDiv");
  var advTab=document.getElementById("advTab");
  var BABody3=document.getElementById("body3");
  var inputInSearchbar=document.getElementById("BAFirstINPUT");
  ADVANCEDBUTTONDIV.addEventListener("click",()=>{
    BASICBUTTONDIV.style.opacity="0";
    BASICBUTTONDIV.style.borderLeft="none";
    ADVANCEDINPUTSEARCHDIV.style.width="670px";
    ADVANCEDINPUTSEARCHDIV.style.left="10px";
    ADVANCEDBUTTONDIV.style.right="10px";
    advTab.style.display="flex";
    BABody3.style.height="150px";
    inputInSearchbar.disabled=true;
    inputInSearchbar.style.backgroundColor="rgba(15, 39, 65, 0.315)";
  });

  // tab&tabcontent
  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

 
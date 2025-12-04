function ShowDropOff(){
    let pickUp = document.getElementById("pickUpLocation");
    let dropOff = document.getElementById("dropOffLocation");
    let chBox = document.getElementById("checkboxDropOff");
    if(chBox.checked){
        dropOff.style.display = "block";
        pickUp.placeholder = "Pickup Location";
        dropOff.required = true;
    }
    else{
        dropOff.style.display = "none";
        pickUp.placeholder = "Pickup&Drop-Off Location"
        dropOff.required = false;
    }
}
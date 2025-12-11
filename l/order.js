function ShowDropOff(){
    let pickUpLabel = document.getElementById("pickL");
    let dropOffInput = document.getElementById("dropOffLocation");
    let dropOffDiv = document.getElementById("dropoffDiv");
    let chBox = document.getElementById("checkboxDropOff");
    if(chBox.checked){
        dropOffDiv.style.display = "block";
        pickUpLabel.innerHTML = "Pickup Location";
        dropOffInput.required = true;
    }
    else{
        dropOffDiv.style.display = "none";
        pickUpLabel.innerHTML = "Pickup&Drop-Off Location"
        dropOffInput.required = false;
    }
}
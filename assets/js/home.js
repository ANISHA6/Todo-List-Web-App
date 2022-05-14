
// Function for deleting the list only from frontend
function delBoxes(){
    var boxes=document.getElementsByClassName('chk');
    var texts=document.getElementsByClassName('txt');
    for(var i=0;i<boxes.length;i++){
        box=boxes[i];
        txt=texts[i];
        if(box.checked){
            box.parentNode.removeChild(box);
            txt.parentNode.removeChild(txt);


        }
    }
}
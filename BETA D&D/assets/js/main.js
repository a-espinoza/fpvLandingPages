//DRAG AND DROP FEATURE
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// Color Changer
//  http://stackoverflow.com/questions/4146621/changing-colors-with-jquery-with-a-color-picker
$('#colourPicker').ColorPicker({
  onChange: function(hsb, hex, rgb){
    $("#full").css("background-color", '#' + hex);
  }
});

$('#colourPickerText').ColorPicker({
  onChange: function(hsb, hex, rgb){
    $("#textToBeChanged").css("color", '#' + hex);
  }
});


//http://jsfiddle.net/7jg4e/152/
$(document).ready(function(){
     $("#bg").change(function(){
        $("#header1").css("background-color",$("#bg").val());
    });
});

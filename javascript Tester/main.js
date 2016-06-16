// Copyright (c) 2016 masterpaper. All rights reserved.
var text=document.getElementById("js");
var js=document.getElementById("userScript")


$(document).ready(function(){
  $("#enter").click(function(){
    $("#userScript").append(text.value)
    window.location.reload()
    $("#p").append(text.value+"<br>")
  })
});
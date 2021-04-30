$(document).ready(function(){
    $(".minus").hide();
    // 1st
    $("#btn1").click(function(){
      $(this).hide();
      $("#btn01").show();
    
    });
    $("#btn01").click(function(){
      $("#btn01").hide();
      $("#btn1").show();
    });
    // 2nd
    $("#btn2").click(function(){
      $(this).hide();
      $("#btn02").show();
  });
    $("#btn02").click(function(){
      $("#btn02").hide();
      $("#btn2").show();
    });
    // 3rd
    $("#btn3").click(function(){
      $(this).hide();
      $("#btn03").show();
    
    });
    $("#btn03").click(function(){
      $("#btn03").hide();
      $("#btn3").show();
    });
  });
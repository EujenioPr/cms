$(document).ready(function() {
  $("#menu").click(function(){
    $("#curtain").toggleClass("rotated");
    // $("#menuAnchor").css("");
    $("#menuAnchor").toggleClass("clearsvg").toggleClass("menusvg");
    // setTimeout(function() {$("#menuAnchor").toggleClass("clearsvg");}, 0);
  });

  $("#sidebarAdd").click(function(){
    $("#sidebarUl").toggleClass("hidden");
    $("#sidebarAddSpan").toggle();
  });


// groups-transfer-inner
    $(function(){
      $(".groupTransferBtn").click(function(e) {
            $( $(this).find("a").attr('href') ).slideToggle("fast");
        });
    });
// end
});

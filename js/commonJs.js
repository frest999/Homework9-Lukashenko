$(document).ready(function () {
  $(".btn").first().click(function (e) {
    e.preventDefault();
    $(this).addClass("blue");
  });

  $("#remove").click(function (e) {
    e.preventDefault();
    $(this).removeClass("red");
  });

  $("#add-remove-class").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("blue");
  });

  $("#get-attr").on("click", function () {
    console.log($(this).attr("title"));
  });

  $("#set-attr").on("click", function () {
    $(this).attr({title:"SET-ATTR"});
  });

  $("#alert").on("click", function(){
   alert("Hello, this is important alert!!!");
  });

  $("#trigger").on("click", function () {
    $("#alert").trigger("click");
  });

  $("#clone").on("click", function () {
    $(this).clone().text("Cloned").insertAfter($("#clone"));
  });

  $("#closest").on("click", function () {
   console.log($(this).closest(".btn-block"));
  });

  $("#each-btn").on("click", function () {
    $(".btn").each(function (index) {
      console.log(index + ":" + $(this).text());
    })
  });


  $("#findme").on("click", function () {
    console.log($(this).offset());
  });

  $("#fade-in").on("click", function () {
    $("#fade-in-text").fadeIn();
  });

  $("#fade-out").on("click", function () {
    $("#fade-out-text").fadeOut();
  });

  $("#hide").on("click", function () {
    $("#hide-text").hide();
  });

  $("#show").on("click", function () {
    $("#show-text").show();
  });


  $("#dataAboutMe").on("click", function () {
    var attr = $(this).attr("title");
    var w =$(this).width();
    var h = $(this).height();
    var pos = $(this).offset();
    console.log(pos).log([h,w]);
  });

//______________________________________________________________

  $("#data").on("click", function () {
    $( ".text-data" ).data( "test", { first: "Hello "} );
    $( ".data-paste" ).text( $( ".text-data" ).data( "test" ).first );
  });
  $("#detach").on("click", function () {
    $(".author-text").detach();
  });

  $("#eq").on("click", function () {
    $(".eq-block").eq(2).addClass("eq-check");
  });

  $("#has-class").on("click", function () {
    $("#result1").append($(".first-p").hasClass("find-class").toString());
    $("#result2").append($(".second-p").hasClass("find-class").toString());
    $("#result3").append($(".third-p").hasClass("find-class").toString());
  });

  $("#html").on("click", function () {
    $(".html-block").html("<p><i>Lorem ipsum dolor sit amet</i></p>");
  });

  $(".index-word").on("click", function () {
    var index = $(".index-word").index(this)+1;
    $("#index-span").text("Word index number - " + index);
  });

  $("#prop").on("click", function () {
    var prop = $(this).prop("checked");
    $("#prop-result").text(prop);
  });

  $("#remove").on("click", function () {
    $("#delete-img").remove();
  });

  $("#removeAttr").on("click", function () {
    $(this).removeAttr("class");
  });

  $(window).on("resize", function () {
    $("body").css("background-color", "#c4c4c4");
  });

  $(window).on("scroll", function () {
    $("body").css("background-color", "#e4e4e4");
    $(".methods-block-bg").css("box-shadow", "0 0 10px rgba(0,0,0,0.5)");
  });

  $("#scrollTop").on("click", function () {
    $(window).scrollTop(0);
  });

  $("#slideUp").on("click", function () {
    $("#slideUpText").slideUp();
  });

  $("#slideDown").on("click", function () {
    $("#slideDownText").slideDown();
  });

  $("#slideToggle").on("click", function () {
    $("#slideToggleText").slideToggle();
  });

  $("#about").on("click", function () {
    $(this).each(function() {
      var att = $.map(this.attributes, function (attribute) {
        return attribute.name + ' = ' + attribute.value;
      });
    var offset = $(this).offset();
    var fr = $(this).siblings(this);
    console.log($( this ).width() + "," + $( this ).height() + "," + offset.left + "," + offset.top + ","
        + att + "," + $(this).parent().prop('tagName') + "," + fr + "," + $( this ).text());
    });
  });

  //________________________________________________

  $("input").on("change", function () {
    console.log($(this).val());
  });
  $("select").on("change", function () {
    console.log($(this).val());
  });

  $("input").on("keypress", function () {
    $(this).css("background-color", "rgba(39,255,115,0.2)");
  });

  $("#keydown").on("keydown", function (eventObject) {
    $(".press-inspect").text("Press the button: " + eventObject.which);
  });

  $("#keyup").on("keyup", function (eventObject) {
    $(".up-inspect").text("Clutch the button: " + eventObject.which);
  });

  $("#double-origin").keyup(function () {
    var dbl = $(this).val();
    $( "#double-copy" ).attr({
      value: dbl });
  });

  $( "#submit" ).on( "click", function( event ) {
    event.preventDefault();
    console.log($("#registration-form").submit().serialize());
  });
});





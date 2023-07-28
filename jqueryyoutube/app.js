$(document).ready(function () {
  // switch
  let btn_log = false;
  $(".switch").on("click", function () {
    btn_log = !btn_log;
    if (btn_log) {
      $(".switch span").html("ON");
      $(".fa-toggle-on").show();
      $(".fa-toggle-off").hide();
    } else {
      $(".switch span").html("OFF");
      $(".fa-toggle-on").hide();
      $(".fa-toggle-off").show();
    }
  });

  // for up
  $(".movers i:nth-child(1)").on("click", function () {
    let value = $("#circle").css("top");
    value = Number(value.slice(0, value.length - 2)) - 5;
    console.log(value);
    if (value >= 0 && btn_log) {
      value = value + "px";
      $("#circle").css("top", value);
    }
  });
  // for left
  $(".movers i:nth-child(2)").on("click", function () {
    let value = $("#circle").css("left");
    value = Number(value.slice(0, value.length - 2)) - 5;
    console.log(value);
    if (value >= 0 && btn_log) {
      value = value + "px";
      $("#circle").css("left", value);
    }
  });
  // for right
  $(".movers i:nth-child(3)").on("click", function () {
    let value = $("#circle").css("left");
    value = Number(value.slice(0, value.length - 2)) + 5;
    console.log(value);
    if (value >= 0 && btn_log) {
      value = value + "px";
      $("#circle").css("left", value);
    }
  });
  //for bottom
  $(".movers i:nth-child(4)").on("click", function () {
    let value = $("#circle").css("top");
    value = Number(value.slice(0, value.length - 2)) + 5;
    console.log(value);
    if (value >= 0 && btn_log) {
      value = value + "px";
      $("#circle").css("top", value);
    }
  });
});

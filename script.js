count = 0;
$('#reverse').click(function(event) {
  cm_contHTML = $('.cm_cont').html();
  in_contHTML = $('.in_cont').html();
  //alert(cm_contHTML);
 // alert(varin_contHTML);
  $('.cm_cont').html(in_contHTML);
  $('.in_cont').html(cm_contHTML);
  if(count == 0){
    $("#convert").attr({'onClick':'incm()'});
    count = 1
  }else{
    $("#convert").attr({'onClick':'cmin()'});
    count = 0
  }
});

function cmin(){
    //alert()
  var centimeters_inches =  $("#centimeters_inches").val()
  $("#inches_centimeters").val(centimeters_inches/2.54)
}
function incm(){
  var inches_centimeters =  $("#inches_centimeters").val()
  $("#centimeters_inches").val(inches_centimeters * 2.54)
}
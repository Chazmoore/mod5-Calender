
$(function () {

    
    $(".saveBtn").on("click", function() {
      
      var userInput = $(this).siblings(".description").val();
  
      
      var timeBlockId = $(this).parent().attr("id");
  
      
      localStorage.setItem(timeBlockId, userInput);
    });
  
    
    var currentHour = dayjs().hour();


    $(".time-block").each(function() {
      var timeBlockId = parseInt($(this).attr("id").split("-")[1]);
  
      $(this).removeClass("past present future");
  
      if (timeBlockId < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockId === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    
    $(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var userInput = localStorage.getItem(timeBlockId);
  
      if (userInput) {
        $(this).find(".description").val(userInput);
      }
    });
  
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
  
});

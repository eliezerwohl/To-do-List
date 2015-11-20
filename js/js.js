$(document).ready(function() {

 $(".btn-default").on("click", function(e) {
    e.preventDefault();

    var newWord, newRow, wordTd, deleteButton, checkBox, deleteTd, check;
    var isDuplicate = false;
    
    newWord = $("#newWord").val();

    $("td.word-td").each(function() {
      if($(this).text() === newWord) {
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate) {
      $(".alert").fadeIn(5000);
      return;
    }


        newRow = $("<tr>");
    wordTd = $("<td>").addClass("word-td").append(newWord);
    deleteButton = $("<button>").addClass("btn btn-danger").append("X");
    deleteTd = $("<td>").append(deleteButton);
    checkBox = $("<input type = 'checkbox'>").addClass("checkbox");
    check = $("<td>").append(checkBox);

    newRow.append(wordTd).append(deleteTd).append(check);

    $("tbody").append(newRow);
    $("#newWord").val("");
  });

  $("table").on("click", ".btn-danger", function() {
    $(this).parents("tr").remove();
  });

  $("#newWord").on("keydown", function() {
    $(".alert").slideUp();
  });


  $("table").on("click", ".checkbox", function() {
   prompt("you clicked it!")
  });

});
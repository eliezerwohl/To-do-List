$(document).ready(function() {
// upon the page being ready, it will preform the rest of the following
  $("btn-default").on("click", function(e){
    e.preventDefault();
//prevents the default action from happening when clicking the btn-default
    var newWord, newRow, deletButton, checkBox, deleteTd, check;
    var duplicate = false;


    newWord = $("#newWord").val()
    // the value of the id newWord, which is the id of the input 
    $("td.word-td").each(function(){ //looks for td with a class ofword-td, 
      if($(this).text() === newWord){
        isDuplicate = true;
        return;
      }
      });
    if(isDuplicate) {
      $("#something").fadeIn(2000);
      return;
    }
    if(newWord.length === 0) {
      $("#nothing").fadeIn(2000);
      return;
    };

    newRow = $("<tr>")
    wordTd = $("<td>").addClass("word-td").append(newWord); //td with a class of word-td. appeneded is newWOrd, whhich is a  var =$("#newWord").val()
    deleteButton = $("<button>").addClass("btn btn-danger").append("X");
    deleteTd = $ ("<td>").append(deleteTd);
    checkBox = $ ("<input type=checkbox>").addClass("checkbox");
    check = $("<td>").append(checkbox);

    newRow.append(wordTd).append(deletTd).append(check)  //still in what happens when teh button is clicked
    $('tbody').append(newRow);
    $("#newWord").val ("");

      });
    $("table").on("click", ".btn-danger", function() {
      $(this).parents("tr").remove();
    });

    $("#newWord").on("keydown", function() {
      $(".alert").slideUp();

});
    $("table").on("click", ".checkbox", function() {

  var checkSymbol = $(this).parent();
 $(this).closest('tr').find('td:first').addClass("line");
 
 
 $(this).remove();
 $(checkSymbol).append("<span class='glyphicon glyphicon-ok'>")

});
});
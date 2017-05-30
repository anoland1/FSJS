

//create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//cycle over each list item and create options in the select box
$("#menu a").each(function() {
  var $anchor = $(this);
  var $option = $("<option></option>");

  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected",true);
  }


  //option's value is the link
  $option.val($anchor.attr("href"));
  //option's text is page name
  $option.text($anchor.text());
  //append to select
  $select.append($option);
  });
//bind to selection
$select.change(function() {
  window.location = $select.val();
});

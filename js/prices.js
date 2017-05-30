//Select the input for the title for blog post.
var $titleInput = $("#title");

//Select the preview h1 tag
var $previewTitle = $("#titlePreview");

// Every second update the preview
var previewTimer = setInterval(updatePreview, 1000);

function updatePreview(){
  //Get the user's input
  var titleValue;
  //Set the user input as the preview title.
  $previewTitle.text(titleValue);
}

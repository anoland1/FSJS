
//////// ==== MENU ITEMS ==== /////////
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
//////// ==== MENU ITEMS ==== /////////
//
//
//
//
//
//
//
//
//
//////// ==== NODE AND MONGO ==== /////////

let s1 = "text";
let s2 = "price";
let s3 = "item";
let currentTab = 0;
getFiles();
let itemQuantity = 1;


$(".orderbutton").on("click", function(){
  s1 = $(this).prev().text();
  s2 = s1.substring(s1.lastIndexOf('$') + 1);
  s3 = s1.substring(0, s1.indexOf(":"));
  purchasePrice = parseFloat(s2);
  $("#menulist").addClass("hidden");
  $("#purchaseOrder").removeClass("hidden");
  document.getElementById('selectedItem').innerHTML = s3;
  document.getElementById("quantity").innerHTML=itemQuantity;
  document.getElementById('selectedPrice').innerHTML = "Price: $" + purchasePrice.toFixed(2);
  document.getElementById('selectedTax').innerHTML = "Tax: $"+ (0.06*purchasePrice).toFixed(2);
  document.getElementById('selectedTotal').innerHTML = "Total: $"+ (1.06*purchasePrice).toFixed(2);
});
$("#quantitydown").on("click", ()=>{
    if (itemQuantity>=2) {itemQuantity-=1;};
    document.getElementById("quantity").innerHTML=itemQuantity;
    purchasePrice=parseFloat(s2).toFixed(2)*itemQuantity;
    document.getElementById('selectedPrice').innerHTML = "Price: $" + purchasePrice.toFixed(2);
    document.getElementById('selectedTax').innerHTML = "Tax: $"+ (0.06*purchasePrice).toFixed(2);
    document.getElementById('selectedTotal').innerHTML = "Total: $"+ (1.06*purchasePrice).toFixed(2);
});
$("#quantityup").on("click", ()=>{
    itemQuantity+=1;
    document.getElementById("quantity").innerHTML=itemQuantity;
    purchasePrice=parseFloat(s2).toFixed(2)*itemQuantity;
    document.getElementById('selectedPrice').innerHTML = "Price: $" + purchasePrice.toFixed(2);
    document.getElementById('selectedTax').innerHTML = "Tax: $"+ (0.06*purchasePrice).toFixed(2);
    document.getElementById('selectedTotal').innerHTML = "Total: $"+ (1.06*purchasePrice).toFixed(2);
});
$(".confirmOrder").on("click", function(){
    finalPrice = purchasePrice*1.06.toFixed(2);
    alert("You ordered " + itemQuantity + " " + s3 + "for $" + finalPrice + ".  Your order will be ready soon!");
    $("#purchaseOrder").addClass("hidden");
    $("#menulist").removeClass("hidden");
    $("#menulist li").parents().removeClass("itemselected");
    $("#menulist ul").children().css("border-bottom", "1px solid grey");
    submitFileForm();
    getFiles();
});
$(".cancelOrder").on("click", () =>{
    $("#purchaseOrder").addClass("hidden");
    $("#menulist").removeClass("hidden");
    itemQuantity=1;
});


function submitFileForm() {
  console.log("You clicked 'submit'. Congratulations.");
  const fileData = {
//    title: $('#file-title').val(),
//    price: $('#file-price').val(),
    title: itemQuantity + " " + s3,
    price: purchasePrice.toFixed(2),
    _id: $('#file-id').val(),
  };
  console.log(fileData.price);
  console.log(fileData.title);
  let method, url;
  if (fileData._id) {
    method = 'PUT';
    url = '/api/file/' + fileData._id;
  } else {
    method = 'POST';
    url = '/api/file';
  }
  $.ajax({
    type: method,
    url: url,
    data: JSON.stringify(fileData),
    dataType: 'json',
    contentType : 'application/json',
  })
    .done(function(response) {
      console.log("We have posted the data");
      refreshFileList();
//      toggleAddFileForm();
    })
    .fail(function(error) {
      console.log("Failures at posting, we are", error);
    })
    itemQuantity=1;
  console.log("Your file data", fileData);
}


function getFiles() {
  return $.ajax('/api/file')
    .then(res => {
      console.log("Results from getFiles()", res);
      let currentTab = 0;
      for (i=0; i<res.length; i++) {
        currentVar = parseFloat(res[i].price);
        currentTab+= currentVar;
      }
      document.getElementById('bartab').innerHTML = "Current Tab : $" + currentTab.toFixed(2);
      return res;
    })
    .fail(err => {
      console.log("Error in getFiles()", err);
      throw err;
    });
}

function editFileClick(id) {
  const file = window.fileList.find(file => file._id === id);
  if (file) {
    setFormData(file);
    toggleAddFileFormVisibility();
  }
}

function deleteFileClick(id) {
  if (confirm("Are you sure?")) {
    $.ajax({
      type: 'DELETE',
      url: '/api/file/' + id,
      dataType: 'json',
      contentType : 'application/json',
    })
      .done(function(response) {
        console.log("File", id, "is DOOMED!!!!!!");
        refreshFileList();
      })
      .fail(function(error) {
        console.log("I'm not dead yet!", error);
      })
  }
}

function setFormData(data) {
  data = data || {};
  const file = {
    title: data.title || '',
    price: data.price || '',
    _id: data._id || '',
  };
  $('#file-title').val(file.title);//???????
  $('#file-price').val(file.price);//??????
  $('#file-id').val(file._id);//???????
}

function refreshFileList() {
  const template = $('#list-template').html();
  const compiledTemplate = Handlebars.compile(template);

  getFiles()
    .then(files => {
      window.fileList = files;
      const data = {files: files};
      const html = compiledTemplate(data);
      $('#list-container').html(html);
      //const testerw=JSON.parse(data);
      //console.log(testerw.price);
      });
}

//map function
//Object.keys(data).forEach(function(key) {
//  data[key]
//  currentTab += data.price;
//});


function toggleAddFileForm() {
  console.log("Baby steps...");
  setFormData({});
  toggleAddFileFormVisibility();
}

function toggleAddFileFormVisibility() {
  $('#form-container').toggleClass('hidden');
}

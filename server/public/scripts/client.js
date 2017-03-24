$(document).ready(function(){
  console.log('js sourced');
  getData();
  addEventListeners();
});

function addEventListeners() {

  $(".ownerForm").on("mouseover", function()
{
  console.log("you moused over!");
});

  $('h1').on('click', function(){
    $('h1').text('Cat Hotel');
  });
  $("#ownerForm").on("click","button",function(){
    console.log("ownerForm on click button");
  });//end ownerForm On Click button

  console.log("Hahaha, conflict!");

}//ends addEventListeners


function addPetPostRequest (event) {
  event.preventDefault();
  var petObject = {};
  petObject.name = $(this).children('#petFormNameInput').val();
  petObject.breed = $(this).children('#petFormBreedInput').val();
  petObject.color = $(this).children('#petFormColorInput').val();
  console.log(petObject);
  // $.ajax({
  //   url: '/pets/add',
  //   type: 'POST',
  //   data: {param1: 'value1'}
  // });
}

//This will be called using a response from server!!
function displayData(dataArray)
{
  for(var i = 0; i < dataArray.length; i++)
  {
    var petInfo = dataArray[i];
    $("#petBody").append("<tr>");
    var $el = $("#petBody").children().last();
    $el.append("<td>" + petInfo.first_name + "</td>");
    $el.append("<td>" + petInfo.last_name + "</td>");
    $el.append("<td>" + petInfo.breed + "</td>");
    $el.append("<td>" + petInfo.color + "</td>");
    $el.append("<td><button class='delete' data-petInfo='" +
                petInfo.id +
              "'>Delete</button></td>");
    $el.append("<td><button class='edit' data-petInfo='" +
                petInfo.id +
                "' data-firstName='" + petInfo.first_name +
                "' data-lastName='" + petInfo.last_name +
                "' data-breed='" + petInfo.breed +
                "' data-color='" + petInfo.color +
              "'>Edit</button></td>");
    $el.append("<td><button class='delete' data-petInfo='" +
                petInfo.id +
              "'>Delete</button></td>");

  }
}


function getData(){
  $.ajax({
    type: 'GET',
    url: '/pets',
    success: function(response){
        console.log("I've returned from /pets with this:", response);
        var dataArray = response;
        displayData(dataArray);
    }
  });//ends ajax get
}//ends getData

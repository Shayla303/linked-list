//eventListeners

$('.articles-container').on('click','.read-button', addReadClass);
$('.articles-container').on('click', '.delete-button', removeBookmark);
$('#submit').on('click', theWebs);


//this function serves as our object constructor that will allow information to be passed through. also a unique ID number will be created each time for future reference

function Bookmarks(title, url) {
  this.title = title;
  this.url = url;
  this.id = Date.now();
}


// this function is to create a new bookmark card and prepend to the page

function addBookmark (holder) {
  $('.articles-container').prepend(`
    <article class="bookmarks" id="${holder.id}">
      <h2 class= "bookmark-title">${holder.title}</h2>
      <p class ="bookmark-url">${holder.url}</p>
      <button class = "read-button">Read</button>
      <button class="delete-button">Delete</button>
    </article>`
  )
}

// this function grabs info to create a new object based on the object constructor of Bookmarks above. It allows the opportunity to pass through values as created in each bookmark card.we created a new object that we can now call on the addBookmark function. we are now validating the url and webtitle to have a value, if not user will be unable to creaete an object, we also have an error that alerts the user

function theWebs() {
  event.preventDefault()
  var webTitle = $('#title-input').val();
  var webUrl = $('#url-input').val();
  var newBookmark = new Bookmarks(webTitle,webUrl);
  if (webTitle==="" || webUrl===""){
    message();
  }else{
   addBookmark(newBookmark);
   clearInputs();
  }
}

//when the user clicks on read, there should be a class of .read added to the card
//the background should change color and the read button should go red. the first is to add the read class to the articles card using toggleClass

function addReadClass () {
  $(this).closest('.bookmarks').toggleClass('read');
  $(this).closest('.read-button').toggleClass('red-read-button');
}

function removeBookmark () {
  $(this).closest('.bookmarks').remove();
}

function clearInputs () {
  $('#title-input').val("");
  $('#url-input').val("");
}

function message () {
  alert('Not a valid entry,must input both fields, SUCKA!');
  }

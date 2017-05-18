
//eventListeners

$('.articles-container').on('click','.read-button', addReadClass)
                        .on('click','.read-button', bookmarksLength);
$('.articles-container').on('click', '.delete-button', removeBookmark)
                        .on('click','.delete-button', bookmarksLength);
$('#submit').on('click', theWebs)
            .on('click', enableBtn)
            .on('click', bookmarksLength);
$('#title-input, #url-input').on('input', enableBtn);
$('#clr-read-btn').on('click', clearReadBookmarks);

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

  function enableBtn () {
    var webTitle = $('#title-input').val();
    var webUrl = $('#url-input').val();
    if (webTitle !==""|| webUrl !==""){
      $('#submit').prop('disabled', false);
    }else if (webTitle ==="" || webUrl ===""){
      $('#submit').prop('disabled', true);
    }

    }

  //this function will display the number of cards active on the page
  function bookmarksLength () {
    var bookmarks = $('.bookmarks');
    var readBookmarks = $('.read');
    $('#bookmarks-on-page').text("Bookmarks: " + bookmarks.length);
    $('#read-on-page').text( "Read Bookmarks: " + readBookmarks.length);
  }

//this function will clear all read bookmarks and allow us to create the eventlistener to do so

  function clearReadBookmarks () {
    $('.bookmarks').closest('.read').remove();
  }

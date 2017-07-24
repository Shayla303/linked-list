
/*---------------------------------------
>>>>>>>>  EVENT LISTENERS  <<<<<<<<
----------------------------------------*/
$('.articles-container').on('click','.read-button', addReadClass)
                        .on('click','.read-button', bookmarksLength);
$('.articles-container').on('click', '.delete-button', removeBookmark)
                        .on('click','.delete-button', bookmarksLength);
$('#submit').on('click', submitButton)
            .on('click', enableBtn)
            .on('click', bookmarksLength);
$('#title-input, #url-input').on('input', enableBtn);
$('#clr-read-btn').on('click', clearReadBookmarks)
                  .on('click', bookmarksLength);

/*---------------------------------------
>>>>>>>>  CONSTRUCTOR FUNCTION   <<<<<<<<
----------------------------------------*/
function Bookmarks(title, url) {
  this.title = title;
  this.url = url;
  this.id = Date.now();
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO APPEND BOOKMARK(OBJECT) ONTO PAGE  <<<<<<<<
----------------------------------------*/
function addBookmark(bookmark) {
  $('.articles-container').prepend(`
    <article class="bookmarks" id="${bookmark.id}">
      <h2 class= "bookmark-title">${bookmark.title}</h2>
      <p class ="bookmark-url">${bookmark.url}</p>
      <button class = "read-button">Read</button>
      <button class="delete-button">Delete</button>
    </article>`
  )
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO EXECUTE WHEN SUBMIT BTN IS CLICKED  <<<<<<<<
----------------------------------------*/
function submitButton() {
  event.preventDefault()
  var webTitle = $('#title-input').val();
  var webUrl = $('#url-input').val();
  var newBookmark = new Bookmarks(webTitle,webUrl);
  if (webTitle === "" || webUrl === "") {
    message();
  } else {
   addBookmark(newBookmark);
   clearInputs();
  }
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO TOGGLE BETWEEN CLASSES  <<<<<<<<
----------------------------------------*/
function addReadClass() {
  $(this).closest('.bookmarks').toggleClass('read');
  $(this).closest('.read-button').toggleClass('red-read-button');
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO REMOVE BOOKMARK FROM PAGE  <<<<<<<<
----------------------------------------*/
function removeBookmark() {
  $(this).closest('.bookmarks').remove();
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO CLEAR INPUT FIELDS  <<<<<<<<
----------------------------------------*/
function clearInputs() {
  $('#title-input, #url-input').val("");
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO ALERT USER TO FILL ALL INPUT FIELDS  <<<<<<<<
----------------------------------------*/
function message() {
  alert('Please provide a title and a valid URl.');
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO ENABLE/DISABLE SUBMIT BUTTON  <<<<<<<<
----------------------------------------*/
function enableBtn() {
  var webTitle = $('#title-input').val();
  var webUrl = $('#url-input').val();
  if (webTitle !== "" || webUrl !== "") {
    $('#submit').prop('disabled', false);
  } else if (webTitle === "" || webUrl === "") {
    $('#submit').prop('disabled', true);
  }
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO DISPLAY NUMBER OF BOOKMARKS ON PAGE <<<<<<<<
----------------------------------------*/
function bookmarksLength() {
  var bookmarks = $('.bookmarks').length;
  var readBookmarks = $('.read').length;
  $('#bookmarks-on-page').text("Bookmarks: " + bookmarks);
  $('#read-on-page').text( "Read Bookmarks: " + readBookmarks);
  $('#difference').text("Unread Bookmarks: " + (bookmarks - readBookmarks));
}

/*---------------------------------------
>>>>>>>>  FUNCTION TO REMOVE READ BOOKMARKS FROM PAGE  <<<<<<<<
----------------------------------------*/
function clearReadBookmarks() {
  $('.bookmarks').closest('.read').remove();
}

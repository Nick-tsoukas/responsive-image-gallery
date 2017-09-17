var DETAIL_IMAGE_SELECTOR =  '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]' ;
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;
function setDetails(imageUrl, titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTile = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTile.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}


//test function
function showAlert(event) {
  console.log('Yo! What Up');
}

function initEl() {
  var el = document.getElementById("foo");
  console.log(el);
  el.onclick == showAlert;
}



function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click' , function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === 27){
      hideDetails();
    }
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();

const draggables = document.querySelectorAll(".draggable");
const dropzones = document.querySelectorAll(".dropzone");
const message = document.createElement("div");

document.querySelector('#lev1').classList.add('active');
const level1Button = document.querySelector('#lev1');
const level2Button = document.querySelector('#lev2');

level1Button.addEventListener('click', showLevel1);
level2Button.addEventListener('click', showLevel2);

function showLevel1() {
  const level2Tags = document.querySelectorAll('.level2');

  level2Tags.forEach(tag => {
    tag.style.display = 'none';
  });

  level1Button.classList.add('active');
  level2Button.classList.remove('active');

  shuffleDivs("draggable");
}
function showLevel2() {
  const level2Tags = document.querySelectorAll('.level2');

  level2Tags.forEach(tag => {
    tag.style.display = 'block';
  });

  level2Button.classList.add('active-level');
  level1Button.classList.remove('active-level');

  shuffleDivs("draggable");
}


let score = 0;

/* For each draggable element, set the draggable attribute to true,
   and add event listeners for dragstart and dragend events */
draggables.forEach((draggable) => {
  draggable.setAttribute('draggable', 'true');
  draggable.addEventListener("dragstart", handleDragStart);
  draggable.addEventListener("dragend", handleDragEnd);
});
// Add drag and drop event listeners to dropzones
dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragover", handleDragOver);
  dropzone.addEventListener("dragenter", handleDragEnter);
  dropzone.addEventListener("dragleave", handleDragLeave);
  dropzone.addEventListener("drop", handleDrop);
});

// On Drag Start ==================
let draggedId;

function handleDragStart(e) {
  draggedId = e.target.id;

  const clone = e.target.cloneNode(true);

  e.dataTransfer.setDragImage(clone, 0, 0);

  e.dataTransfer.setData("text/plain", draggedId);

  e.target.classList.add("dragging");
}

// On Drag End ==================
function handleDragEnd(e) {
 e.target.style.opacity = "1";

  const dropzone = document.querySelector(
    `[data-dragged-element="${draggedId}"]`
  );

 if (dropzone) {
    dropzone.removeAttribute("data-dragged-element");
  } else {
    // If the drag failed, remove the dragging class
    e.target.classList.remove("dragging");
  }
}

// On Drag Over ==================
function handleDragOver(e) {
  e.preventDefault();
}

// On Drag Enter ==================
function handleDragEnter(e) {
  e.target.classList.add("hover");
}

// On Drag Leave ==================
function handleDragLeave(e) {
  e.target.classList.remove("hover");
}

// These are elements that will change based on the content they can hold inside
const semanticElements = [
  "main",
  "heading",
  "footer",
  "section",
  "article",
  "nav",
  "address",
  "header",
   "div"
];
const tableElements = [
  "table", "td", "li", "ul"
];
const inlineElements = [
  "p", "h1", "tr", "h2"
];

// On Drop ========================
function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove("hover");

  // console.log("Drop event fired!"); // Debug log

  const draggableId = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(draggableId);
  if (
    semanticElements.includes(draggable.id) ||
    semanticElements.some((cls) => draggable.classList.contains(cls)) 
  ) {
    draggable.classList.add("dropped");
  }
  // Add another class for table elements 
  if (
    tableElements.includes(draggable.id) ||
    tableElements.some((cls) => draggable.classList.contains(cls)) 
  ) {
    draggable.classList.add("dropped-table");
  }
  // Add another class for nested elements 
  if (
    inlineElements.includes(draggable.id) ||
    inlineElements.some((cls) => draggable.classList.contains(cls)) 
  ) {
    draggable.classList.add("dropped-inline");
  }
  
  
  if (isDropValid(e.target, draggable)) {
    // console.log("Drop is valid!"); // Debug log
    score += 1;
    if (draggable.parentNode !== e.target) {
      draggable.parentNode.removeChild(draggable);  // Remove from current parent
      e.target.appendChild(draggable);  // Add to new dropzone
    }
    displayMessage("success", "Got it!");
  } else {
    score -= 1;
    // console.log("Drop is invalid!"); // Debug log
    displayMessage("error", "Try again!");
  }
  document.getElementById("scoreDisplay").innerText = `Score: ${score}`;
  const scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.innerText = `Score: ${score}`;

  if (score < 0) {
      scoreDisplay.classList.add("negativeScore");
  } else {
      scoreDisplay.classList.remove("negativeScore");
  }
}

function isDropValid(dropzone, draggable) {

  // If the draggable is being moved within its current parent (i.e., rearranged)
  if (dropzone.contains(draggable)) {
    return true;
  }
  const headTags = ["title", "authorMeta", "descriptionMeta", "link"];
  const bodyTags = [
    "header",
    "main",
    "footer",
    "nav",
    "h1",
    "h2",
    "article",
    "table",
    "img",
    "section",
    "address", "p", "ul", "video", "audio", "figure", "figcaption", "br", "div", "a"
  ];
  const ContentTags = ["header",
  "nav",
  "h2",
  "article",
  "table",
  "img",
  "section",
  "address", "p", "ul", "video", "audio", "figure", "br", "div", "a"];
  const mainTags = [ContentTags, "h1"];
  const headerTags = [ContentTags, "h1"];
  const footerTags = [ContentTags];
  const articleTags = [ContentTags];
  const tableTags = ["tr"];
  const trTags = ["td"];
  const tdTags = ["ul", "p", "div", "section", "a", "img", "div", "table", "audio", "video", "figure", "br", "h2"];
  const fontTags = ["b", "strong", "i", "em", "a"];
  const listTags = ["li"];
  const listItemTags = ["a", "p", "h1", "h2", "img", "div", "section", "figure", "video", "audio", "ul", "table", "br", "address"];
  const divTags = [footerTags];
  const figureTags = ["figcaption", "img", "p", "a"];
  

  const validTags = {
    headDropzone: headTags,
    bodyDropzone: bodyTags,
    footer: footerTags,
    header: headerTags,
    main: mainTags,
    article: articleTags,
    table: tableTags,
    tr: trTags,
    td: tdTags,
    p: fontTags,
    ul: listTags,
    li: listItemTags,
    div: divTags,
    h1: fontTags,
    h2: fontTags,
    figure: figureTags
  };

  const dropzoneId = dropzone.id;
  const dropzoneParentId = dropzone.parentElement.id;

  return (
    !dropzone.contains(draggable) &&
    // dropzone.classList.contains('dropzone') &&
    (validTags[dropzoneId]?.includes(draggable.id) ||
      validTags[dropzoneParentId]?.includes(draggable.id))
  );
  
}


function displayMessage(type, text, parent) {
  messageContainer.appendChild(message);
  message.className = type;
  message.textContent = text;
  messageContainer.appendChild(message);
  setTimeout(() => {
    messageContainer.removeChild(message);
  }, 2000);
}


// Select existing wrapper div
const wrapper = document.querySelector("#wrapper");

function shuffleDivs(className) {
  const parent = document.querySelector("#wrapper");
  for (let i = parent.children.length; i >= 0; i--) {
    parent.appendChild(parent.children[(Math.random() * i) | 0]);
  }
}

shuffleDivs("draggable");

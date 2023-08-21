const draggables = document.querySelectorAll(".draggable");
const dropzones = document.querySelectorAll(".dropzone");
const message = document.createElement("div");

draggables.forEach((draggable) => {
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
  // e.target.style.display = "none";

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

const fontSizeElements = [
  "main",
  "heading",
  "footer",
  "section",
  "article",
  "nav",
  "table",
  "address",
  "header"
];

// On Drop ========================
function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove("hover");

  console.log("Drop event fired!"); // Debug log

  const draggableId = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(draggableId);
  if (
    fontSizeElements.includes(draggable.id) ||
    fontSizeElements.some((cls) => draggable.classList.contains(cls))
  ) {
    draggable.classList.add("dropped");
  }
  
  if (isDropValid(e.target, draggable)) {
    console.log("Drop is valid!"); // Debug log
    e.target.appendChild(draggable);
    displayMessage("success", "Correct placement!");
  } else {
    console.log("Drop is invalid!"); // Debug log
    displayMessage("error", "Try again!");
    // draggable.style.opacity = "1";
    // draggable.classList.remove("dragging");
  }
}

function isDropValid(dropzone, draggable) {
  const headTags = ["title", "authorMeta", "descriptionMeta"];
  const bodyTags = [
    "header",
    "main",
    "footer",
    "nav",
    "h1",
    "h2",
    "article",
    "nav",
    "table",
    "img",
    "section",
    "address",
    "p"
  ];
  const footerTags = ["address", "phone", "email", "website", "div"];
  const headerTags = ["h1", "nav", "img", "h2", "div"];
  const mainTags = ["h2", "article", "section", "article", "div"];
  const articleTags = ["section", "p", "img", "table", "div"];
  const tableTags = ["tr", "td"];
  const trTags = ["td"];

  const validTags = {
    headDropzone: headTags,
    bodyDropzone: bodyTags,
    footerDropzone: footerTags,
    header: headerTags,
    main: mainTags,
    article: articleTags,
    table: tableTags,
    tr: trTags
  };

  const dropzoneId = dropzone.id;
//   const dropzoneParentId = dropzone.parentElement.id;

  return (
    !dropzone.contains(draggable) &&
    dropzone.classList.contains('dropzone') &&
    (validTags[dropzoneId]?.includes(draggable.id) ||
      validTags[dropzoneParentId]?.includes(draggable.id))
  );
}

// function displayMessage(type, text, parent) {
//   message.className = type;
//   message.textContent = text;
//   document.body.appendChild(message);
//   setTimeout(() => {
//     document.body.removeChild(message);
//   }, 2000);
// }
function displayMessage(type, text, parent) {
    message.className = type;
    message.textContent = text;
    parent.appendChild(message);
    setTimeout(() => {
      parent.removeChild(message);
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

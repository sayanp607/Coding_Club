document.addEventListener("DOMContentLoaded", loadNotes);
const addNoteBtn = document.getElementById("addNote");
const notesContainer = document.getElementById("notesContainer");

addNoteBtn.addEventListener("click", () => {
  const noteText = prompt("Enter your note:");
  if (noteText) {
    addNote(noteText);
    saveNotes();
  }
});

function addNote(text) {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <p>${text}</p>
        <button class="delete">X</button>
    `;
  notesContainer.appendChild(note);

  note.querySelector(".delete").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });
}

function saveNotes() {
  const notes = Array.from(document.querySelectorAll(".note p")).map(
    (note) => note.textContent
  );
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((note) => addNote(note));
}

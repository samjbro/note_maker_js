
function testNotesTextInstantiation() {
  var note = new Note("My favourite language is JavaScript");
  isTrue(note.text == "My favourite language is JavaScript");
}

testNotesTextInstantiation();

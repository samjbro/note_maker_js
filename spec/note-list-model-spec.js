var notelist = new NoteList();
notelist.store('note1')
notelist.store('note2')

storesListOfNotes();

function storesListOfNotes() {
  assert.isTrue(notelist.list()[0].text() === 'note1')
};

function generatesUniqueNoteId(){
  assert.isTrue(notelist.list()[0].id === 0)
  assert.isTrue(notelist.list()[1].id === 1)
}

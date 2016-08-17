var notelist = new NoteList();
notelist.store('note')

function storesListOfNotes() {
  assert.isTrue(notelist._listArr[0].text() === 'note')
};

storesListOfNotes();

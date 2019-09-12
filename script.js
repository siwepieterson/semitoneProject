let notes = ['A', 'B'];

class JamBuddy {
    constructor(notes) {
        this.notes = notes;
        this.checkAnswer = checkAnswer;
        this.selectNotes = selectNotes;
    }
}


let buddy = new JamBuddy()

function selectNotes() {
    return notes
}
notes = buddy.selectNotes();
console.log(notes)


let correct;

function checkAnswer(correct) {
    if (correct === 1)
        console.log('True')
    else {
        console.log('False')
    }
};

correct = buddy.checkAnswer(1)
console.log(correct);


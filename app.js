const readline = require('readline');
var books = ["War and Peace", "Song of Soloman", "Ulysses", "The Lord of The Rings", "The Satanic Verses"];

const readline1 = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

chooseOption();
function chooseOption() {
    readline1.question("Press Option Number on the Keyboard.\n Option 1: Show All the books.\n Option 2: Add a new Book.\n Option 3: Quit\n", function (opt) {
        if (opt == 1) {
            for (let i = 0; i < books.length; i++) {
                console.log(books[i]);
            }
            chooseOption();
        }
        else if (opt == 2) {
            readline1.question("Add the name of the Book\n", function (add) {
                books.push(add);
                console.log("Book Added Successfully");
                chooseOption();
            })
        }
        else if (opt == 3) {
            readline1.question("Are you sure you want to quit - press Y to quit", function (res) {
                if (res === "Y" || res === "y") {
                    readline1.close();
                }
                else {
                    chooseOption();
                }
            })
        }
        else {
            console.log("You have selected an invalid entry so please press 1, 2 or 3\n");
            chooseOption();
        }
    })
}

readline1.on("close", function (opt) {
    console.log("Bye Bye");
})

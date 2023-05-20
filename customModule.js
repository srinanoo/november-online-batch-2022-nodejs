const fs = require('fs');

// Create a File
const createFileUsingAsync = (fileName, fileContent) => {
    fs.writeFile(fileName, fileContent, (err) => {
        if(err) console.log(err);

        console.log("File has been created!");
    });
    console.log("Display console....");
}

// Read a File
const readFileUsingAsync = () => {
    fs.readFile("sample1.txt", "utf8", (err, data) => {
        if(err) console.log(err);

        console.log(data);
    });
    console.log("File is getting read...");
}

// Update/Append a File
const appendFileUsingAsync = () => {
    fs.appendFile("sample.txt", " - More Content added at the end...", (err) => {
        if(err) console.log(err);

        console.log("File has been updated!");
    });
    console.log("Display console....");
}

// Delete a File
const deleteFileUsingAsync = () => {
    fs.unlink("sample1.txt", (err) => {
        if(err) console.log(err);

        console.log("File has been deleted!");
    });
    console.log("Display console....");
}

module.exports = { createFileUsingAsync, readFileUsingAsync, appendFileUsingAsync, deleteFileUsingAsync }
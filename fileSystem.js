const fs = require('fs');
// console.log(fs);

// Create / Write a File
    // writeFileSync => Synchronized or Thread Blocking
    // writeFile => Asynchronous or Non Thread Blocking
        // function createFileUsingSync() {
        //     fs.writeFileSync("sample.txt", "Modified Content"); 
        //         // Thread Blocking
        //         // if file doesnt exist, then it will create the file and add the content
        //         // if file exist already, it will overwrite the content inside
        //     console.log("File has been created!");
        // }
        // createFileUsingSync();

        // function createFileUsingAsync() {
        //         // Non Thread Blocking
        //         // if file doesnt exist, then it will create the file and add the content
        //         // if file exist already, it will overwrite the content inside
        //     fs.writeFile("sample1.txt", "Content Overwritten...", (err) => {
        //         if(err) console.log(err);

        //         console.log("File has been created!");
        //     });
        //     console.log("Display console....");
        // }
        // createFileUsingAsync();

// Read a File
    // readFileSync => Synchronized or Thread Blocking
    // readFile => Asynchronous or Non Thread Blocking
        // function readFileUsingSync() {
        //     const fileContent = fs.readFileSync("sample.txt", "utf8");
        //     console.log(fileContent);
        // }
        // readFileUsingSync();

        // function readFileUsingAsync() {
        //     fs.readFile("sample.txt", "utf8", (err, data) => {
        //         if(err) console.log(err);

        //         console.log(data);
        //     });
        //     console.log("File is getting read...");
        // }
        // readFileUsingAsync();

// Update / Append a File
    // appendFileSync => Synchronized or Thread Blocking
    // appendFile => Asynchronous or Non Thread Blocking
        // function appendFileUsingSync() {
        //     fs.appendFileSync("sample.txt", " - Appended Content");
        //     console.log("File content updated!");
        // }
        // appendFileUsingSync();

        // function appendFileUsingAsync() {
        //     fs.appendFile("sample.txt", " - More Content added at the end...", (err) => {
        //         if(err) console.log(err);

        //         console.log("File has been updated!");
        //     });
        //     console.log("Display console....");
        // }
        // appendFileUsingAsync();

// Delete a File
    // unlinkSync => Synchronized or Thread Blocking
    // unlink => Asynchronous or Non Thread Blocking
        // function deleteFileUsingSync() {
        //     fs.unlinkSync("sample.txt");
        //     console.log("File has been deleted!");
        // }
        // deleteFileUsingSync();

        // function deleteFileUsingAsync() {
        //     fs.unlink("sample1.txt", (err) => {
        //         if(err) console.log(err);

        //         console.log("File has been deleted!");
        //     });
        //     console.log("Display console....");
        // }
        // deleteFileUsingAsync();

// Object to String => JSON.stringfy(<object variable name>)
// String to Object => JSON.parse(<string variable name>)

// let obj = {
//     "id": 1,
//     "name": "Dinesh"
// }
// console.log(obj);
// console.log(obj.id);
// console.log(obj.name);
// let json = JSON.stringify(obj);
// console.log(json);
// let strtoobj = JSON.parse(json);
// console.log(strtoobj.id);
// console.log(strtoobj.name);

// NOTES: 14-05-2023
/*
Task: 
    - concept of your choice (trainee, user, employee, movie, blog, bio...)
    - use a JSON file with empty array created
    - add new data (Create)
    - update existing data (Update by any field that matches...)
    - delete existing data (Delete by any field... usually the ID or unique field/property)
    - read all / read specific data (Read)
*/
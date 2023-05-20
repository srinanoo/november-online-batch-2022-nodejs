const customModule = require('./customModule');

customModule.createFileUsingAsync("test1.txt", "New Text File");
customModule.readFileUsingAsync();
customModule.appendFileUsingAsync();
customModule.deleteFileUsingAsync();

const { readFileUsingAsync } = require('./customModule');
readFileUsingAsync();

const { appendFileUsingAsync } = require('./customModule');
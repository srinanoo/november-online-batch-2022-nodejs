const http = require('http');
const url = require('url');
const customModule = require('./customModule');
const traineeModule = require('./traineeModule');

const port = 5000;

http.createServer((req, res, err) => {
    if(err) console.log(err);

    if(req.url !== '/favicon.ico') {
        // console.log("The server's console response."); // response will be sent to the terminal / command prompt
        console.log(req.url);

        // to retrieve querystring
            // const qry = url.parse(req.url, true).query;
            // console.log(qry);
            // console.log(qry.id);
            // console.log(qry.name);
            // customModule.createFileUsingAsync("userData.txt", JSON.stringify(qry));
            // traineeModule.showAllTrainees();

        // to retrieve a form body (post | url-encoded)
            // const chunks = [];
            // req.on('data', chunk => chunks.push(chunk));
            // req.on('end', () => {
            //     // console.log(chunks);
            //     const data = Buffer.concat(chunks);
            //     // console.log('Data: ', data);
            //     const stringData = data.toString();
            //     // console.log("stringData: ", stringData);
            //     const parsedData = new URLSearchParams(stringData);
            //     // console.log("parsedData: ", parsedData);
            //     const dataObj = {};
            //     for (let pair of parsedData.entries()) {
            //         dataObj[pair[0]] = pair[1];
            //     }
            //     console.log("DataObj: ", dataObj);
            //     console.log("DataObj: ", dataObj.id);
            //     console.log("DataObj: ", dataObj.name);
            //     // res.write(JSON.stringify(dataObj));
            // });

        // to retrieve a form body as JSON (req | RAW)
            // let json = '';
            // req.on('data', chunk => json += chunk.toString('utf8'));
            // req.on('end', () => {
            //     const dataObj = JSON.parse(json);
            //     console.log("DataObj: ", dataObj);
            //     // console.log("DataObj: ", dataObj.name);
            //     // console.log("DataObj: ", dataObj.hfSub);
            // });

        res.write("This is my node server response!"); // response will be sent back to the client (browser/postman)
        res.end();
    }
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
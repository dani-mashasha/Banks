const parseString = require('xml2js').parseString;
const xmlInput = 'banks.xml';

function parseXml(xml) {
    return new Promise((resolve, reject) => {
        parseString(xml, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function processResult(result) {
    console.log("processResult: result: ", result);
}

async function testXmlParse(xml) {
    try {
        let result = await parseXml(xml);
        // Now that you have the result you can do further processing, write to file etc.
        processResult(result);
    } catch (err) {
        console.error("parseXml failed: ", err);
    }
}

testXmlParse(xmlInput);
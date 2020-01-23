const fs = require('fs');

const xml2js = require('xml2js');

const parser = new xml2js.Parser({explicitArray : false});



async function readXmlFile(){
    try {
         await fs.readFile('banks.xml',(err,data) => {
            if(err){
                console.log("Error",err)
            }
            parser.parseString(data, (err,result) => {
                if(err){
                   console.log("Error",err)
                 }
                //  console.log(result.BRANCHES);
                 return result.BRANCHES;
        
            });
        });
    } catch (error){
        console.log(error)
    }
}



module.exports = readXmlFile;

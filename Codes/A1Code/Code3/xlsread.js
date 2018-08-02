function createJSONFromXLS(xlsPath, jsonPath){
var exceltojson = require("xls-to-json-lc");
  exceltojson({
    input: xlsPath,
    output: jsonPath,
    sheet: "Sheet1",  // specific sheetname inside excel file (if you have multiple sheets)
    lowerCaseHeaders:true //to convert all excel headers to lowr case in json
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log("Total Records are ",result[0].name);
      //result will contain the overted json data
    }
  });
}
createJSONFromXLS("/Users/amit/Documents/FrontEndMasterBatchJune/node3rdparty/uploads/questiontemplate.xls", "result.json");
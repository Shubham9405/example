var express = require('express');
var app = express();


var employeeController=function(req, res){
  console.log("calling  rest api employee");
  var employee = [
    {id:1, Fname:"shubham",lname:"shinde",degree:"BE E&tc",location:"dubai", sal:1200000},
    {id:2, Fname:"ram",lname:"patil",degree:"BE civil",location:"pune", sal:150000},
    {id:3, Fname:"ganesh",lname:"mote",degree:"BE Mac",location:"mumbai", sal:1150000},
    {id:4, Fname:"salman",lname:"shakh",degree:"BE E&tc",location:"newyork", sal:100000},
    {id:1, Fname:"hari",lname:"deshmukh",degree:"BE IT",location:"banglor", sal:1400000}
  ];
  res.send(employee);
};


app.get ('/employee',employeeController);
var server = app.listen(9000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at 9000")
})
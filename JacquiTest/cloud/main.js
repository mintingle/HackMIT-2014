
// Require and initialize the Twilio module with your credentials
var client = require('twilio')('ACc29b02216c3175cdff08c17e54c5cbd4', 'de384b6e24963d6f0fe74f2b64ed6787');


Parse.Cloud.define("sendSMS", function(request, response) {
  console.log("Sent a new text!");
  console.log(client);
  // Send an SMS message
    client.sendSms({
        to:'15202618230', 
        from: '15203086570', 
        body: 'Hello world!'
      }, function(err, responseData) { 
        if (err) {
          console.log(err);
          response.error("Fail :("); 
        } else { 
          console.log(responseData.from); 
          console.log(responseData.body);
          response.success("jhjh"); 
        }
      }
    );
});


Parse.Cloud.define("receiveSMS", function(request, response) {
  console.log("Received a new test!");
  console.log(client);
  // Send an SMS message
    client.sendSms({
        to:'15202618230', 
        from: '15203086570', 
        body: 'Hello world!'
      }, function(err, responseData) { 
        if (err) {
          console.log(err);
          response.error("Fail :("); 
        } else { 
          console.log(responseData.from); 
          console.log(responseData.body);
          response.success("jhjh"); 
        }
      }
    );
});



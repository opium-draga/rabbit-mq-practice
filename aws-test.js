var AWS = require('aws-sdk');
var s3 = new AWS.S3();

var myBucket = 'yarikdraga.s3.test2';
var myKey = 'some_object_key';

s3.createBucket({Bucket: myBucket}, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    var params = {
      Bucket: myBucket,
      Key   : myKey,
      Body  : 'Hello!'
    };
    
    s3.putObject(params, function (err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log("Successfully uploaded data to myBucket/myKey");
      }
    });
  }
});



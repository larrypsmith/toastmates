const AWS = require("aws-sdk");

AWS.config.loadFromPath('config/aws.json');
AWS.config.update({ region: 'us-west-1'})

const s3 = new AWS.S3();

// console.log(s3.listBuckets((err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// }));

const uploadParams = {Bucket: 'toastmates-seeds', Key: '', Body: ''};
const file = 'services/takeout-boxes.png';

// Configure the file stream and obtain the upload parameters
const fs = require('fs');
const fileStream = fs.createReadStream(file);

fileStream.on('error', function(err) {
  console.log('File Error', err);
});

uploadParams.Body = fileStream;

const path = require('path');

uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});
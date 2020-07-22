const AWS = require("aws-sdk");
const fs = require('fs');
const path = require('path');
const util = require('util');

AWS.config.loadFromPath('config/aws.json');
AWS.config.update({ region: 'us-west-1' })

const s3 = new AWS.S3();

exports.uploadSeedImage = (filePath) => {
  const uploadParams = {
    Bucket: 'toastmates-seeds',
    Key: '',
    Body: ''
  };

  const fileStream = fs.createReadStream(filePath);

  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });

  uploadParams.Body = fileStream;
  uploadParams.Key = path.basename(filePath);

  s3.upload(uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
      location = data.location;
    }
  });  
};

exports.emptySeedsBucket = () => {
  const params = {
    Bucket: 'toastmates-seeds',
  };

  s3.listObjectsV2(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log('Data: ', data);

      params.Delete = {};
      params.Delete.Objects = data.Contents.map((obj) => ({ Key: obj.Key }));

      s3.deleteObjects(params, (err, data) => {
        if (err) {
          console.log('Error: ', err);
        } else {
          console.log('Data: ', data);
        }
      });
    }
  });
};
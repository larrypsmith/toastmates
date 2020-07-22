const AWS = require("aws-sdk");
const fs = require('fs');
const path = require('path');

AWS.config.loadFromPath('config/aws.json');
AWS.config.update({ region: 'us-west-1' })

const s3 = new AWS.S3();

exports.uploadSeedImage = async (filePath) => {
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

  try {
    console.log('Uploading image:', uploadParams.Key);
    const data = await s3.upload(uploadParams).promise();
    console.log("Upload Success", data.Location);
    return data.Location;
  } catch(err) {
    console.log("Error: ", err);
  }
};

const getSeedObjectKeys = async () => {
  const params = {
    Bucket: 'toastmates-seeds',
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const keys = data.Contents.map(obj => obj.Key);
    return keys;
  } catch(err) {
    console.log(err);
  }
}

exports.emptySeedsBucket = async () => {
  const params = {
    Bucket: 'toastmates-seeds',
    Delete: {
      Objects: []
    }
  };

  try {
    const keys = await getSeedObjectKeys();
    params.Delete.Objects = keys.map((key) => ({ Key: key }));
    console.log('Empyting bucket...');
    const data = await s3.deleteObjects(params).promise();
    console.log('Success!', data);
  } catch(err) {
    console.log(err);
  }
};

// exports.uploadSeedImage('services/hero-food.png');
// exports.emptySeedsBucket();
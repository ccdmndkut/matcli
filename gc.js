// Imports the Google Cloud client library
const {Storage} = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'vaclaims-194006';

// Creates a client
const storage = new Storage({
  projectId: projectId,
});

// The name for the new bucket
const bucketName = 'tv2vbbbesta';

// Creates the new bucket
async function createBucket() {
  await storage.createBucket(bucketName);
  console.log(`Bucket ${bucketName} created.`);
}

try {
  createBucket();
} catch (err) {
  console.error('ERROR:', err);
}
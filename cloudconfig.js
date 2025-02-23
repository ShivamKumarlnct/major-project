const cloudinary = require('cloudinary').v2;  // Use '.v2' for modern syntax
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust',
        allowed_formats: ['jpeg', 'png', 'jpg'], // Fixed property name
    },
});

module.exports = {
    cloudinary,
    storage
};

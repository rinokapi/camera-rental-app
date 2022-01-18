// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");
// const dbConfig = require("../config/db.config");

// const storage = new GridFsStorage({
//   url: `mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
//   file: (req, file) => {
//     const match = ["image/png", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       const filename = `${Date.now()}-any-name-${file.originalname}`;
//       return filename;
//     }

//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-any-name-${file.originalname}`,
//     };
//   },
// });

// module.exports = multer({ storage });

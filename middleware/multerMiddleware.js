import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";
import { log } from "console";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "public/uploads");
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname;
//     cb(null, fileName);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtention = path.extname(file.originalname).toString();
  return parser.format(fileExtention, file.buffer).content;
};

export default upload;

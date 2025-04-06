import config from "./index.js";
import aws from "aws-sdk";

export const s3 = new aws.S3({
    accessKeyId : config.S3_ACCESS_KEY,
    secretAccessKey : config.S3_SECRET_ACCESS_KEY,
    region : config.S3_REGION
})



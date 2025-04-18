import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL || "mongodb://localhost:27017/E-Comm",
    JWT_SECRET: process.env.JWT_SECRET || "yoursecretkey",
    JWT_EXPIRY: process.env.JWT_EXPIRY || "7d",
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    S3_REGION: process.env.S3_REGION,

    // CLOUDINARY_SECRET : process.env.CLOUDINARY_SECRET,
    // CLOUDINARY_API : process.env.CLOUDINARY_API,
    // CLOUDINARY_NAME : process.env.CLOUDINARY_NAME,
    // CLOUDINARY_ID : process.env.CLOUDINARY_ID

    SMTP_MAIL_HOST: process.env.SMTP_MAIL_HOST,
    SMTP_MAIL_PORT: process.env.SMTP_MAIL_PORT,
    SMTP_MAIL_USERNAME: process.env.SMTP_MAIL_USERNAME,
    SMTP_MAIL_PASSWORD: process.env.SMTP_MAIL_PASSWORD,
    SMTP_SENDER_EMAIL: process.env.SMTP_SENDER_EMAIL,


    RAZORPAY_KEY_ID : process.env.RAZORPAY_KEY_ID ||"yourkeyid",
    RAZORPAY_SECRET : process.env.RAZORPAY_SECRET ||"yoursecret"

}


export default config

import config from "../config/index.js";
import { transporter } from "../config/transporter.config.js";

const mailHelper = async(option)=>{
    const message = {
        from : config.SMTP_SENDER_EMAIL,
        to : option.email,
        subject : option.subject,
        text : option.text,
        html : "<html> Hello from HTML!!!!! </html>"
    }

    const info = await transporter.sendMail(message)
};

export default mailHelper;
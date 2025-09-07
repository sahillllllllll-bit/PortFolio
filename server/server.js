import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); // allow frontend to call backend
app.use(express.json()); // parse JSON body

// POST route for contact form
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // send to your own inbox
      subject: `Portfolio Contact from ${name}`,
      text: `Message: ${message}\nFrom: ${email}`,
    };

    // send mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

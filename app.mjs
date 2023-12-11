import sgMail from "@sendgrid/mail";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

sgMail.setApiKey(
    "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"
);

app.post("/send-email", (req, res) => {
    const { subject, text, html } = req.body;

    const msg = {
        to: "repairtechlab@gmail.com",
        from: "admin@repairtechlab.com.ua",
        subject,
        text,
        html,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log("Email sent");
            res.status(200).json({ message: "Email sent successfully" });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Error sending email" });
        });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

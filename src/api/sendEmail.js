const sendEmail = async () => {
    try {
        const response = await fetch("/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "repairtechlab@gmail.com",
                subject: "Sending with SendGrid is Fun",
                text: "and easy to do anywhere, even with Node.js",
                html: "<strong>and easy to do anywhere, even with Node.js</strong>",
            }),
        });

        if (response.ok) {
            console.log("Email sent successfully");
        } else {
            console.error("Error sending email");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

export default sendEmail;

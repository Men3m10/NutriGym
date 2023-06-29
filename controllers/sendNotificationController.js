const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const app = express();
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
const serviceAccount = require("./path/to/serviceAccountKey.json"); // Replace with your service account key file
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add other configurations if needed
});

// GET route for sending a notification to all users
app.get("/sendNotificationToAll", async (req, res) => {
  try {
    const message = {
      notification: {
        title: "Notification Title",
        body: "This is a notification sent to all users.",
      },
    };

    const tokens = await getAllDeviceTokens(); // Implement your logic to fetch device tokens from the database

    const response = await admin.messaging().sendToDevice(tokens, message);
    console.log("Notification sent successfully to all users:", response);

    res.status(200).json({ message: "Notification sent to all users." });
  } catch (error) {
    console.error("Error sending notification:", error);
    res
      .status(500)
      .json({ error: "Failed to send notification to all users." });
  }
});

// POST route for sending a notification to a specific user
app.post("/sendNotificationToUser/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, body } = req.body;

    const message = {
      notification: {
        title: title || "Notification Title",
        body: body || "This is a notification sent to a specific user.",
      },
    };

    const token = await getDeviceTokenForUser(userId); // Implement your logic to fetch the device token for the user from the database

    const response = await admin.messaging().sendToDevice(token, message);
    console.log("Notification sent successfully to user:", response);

    res.status(200).json({ message: "Notification sent to the user." });
  } catch (error) {
    console.error("Error sending notification:", error);
    res.status(500).json({ error: "Failed to send notification to the user." });
  }
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

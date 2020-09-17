const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HRn7dH2tBqJRWa3dQAIejMHzYiEtlm0MuBc8XSn4ULMwjgFptCqzc4JQm2DJ3idKruicP5d5g963IA4snaHTMCg00XfZIyyyU"
);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    // Since payment.js const response has total as a query parameter in the URL
    const total = request.query.total; // This is amount in subunits
  
    console.log("Payment Request Received BOOM!!! for amount of >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // In subunits
      currency: "usd",
    });

    // OK - Created Response Code
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-a915b/us-central1/api

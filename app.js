const express = require("express");
const app = express();
const requestIp = require("request-ip");

app.set("trust proxy", true); // To trust the proxy's IP address

app.get("/", (req, res) => {
  const clientIP =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("clientIP==>>>>>>>",clientIP);
    console.log("req.ip==>>>>>", req.ip);
  res.send(`Client's IP address is: ${clientIP}`);
});

app.get("/test", (req, res) => {
  const clientIp = requestIp.getClientIp(req);
  console.log("clientIP==>>>>>>>",clientIp);
    console.log("req.ip==>>>>>", req.ip);
  res.send(`Client's IP address is from req: ${clientIp}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

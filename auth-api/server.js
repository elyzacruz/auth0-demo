const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3060;
const authConfig = {
  "domain": "whispir-tabs.au.auth0.com",
  "audience": "https://whispir-tabs.au.auth0.com/api/v2/",
};

// Enable CORS
app.use(cors(
  { origin:
    [
      "https://ecruz-spa-1.whispirdev.com/",
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:8080",
    ]
  }
));

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer
  audience: authConfig.audience, //replace with your API's audience, available at Dashboard > APIs
  issuer: `https://${authConfig.domain}/`,
  algorithms: [ 'RS256' ]
});


// Get userData API endpoint
app.get('/userData', checkJwt, async function(req, res){
  const data = req.body;
  //send the response
  res.status(201).send({message: data ? 'User valid' : 'User INVALID'});
});
  
// Launch the API Server at localhost
app.listen(port, () => {
  console.info(`auth0 api demo runnning on port ${port}`);
});
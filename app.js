var express = require("express");
var app = express();
const bodyParser = require('body-parser');
var path = require('path');
var http = require("http");
var cors = require('cors')
require("./config_mongodb");
//  const usersRoutes = require("./controllers/users");
//  const memberGroupRoutes = require("./controllers/memberGroup")
//  const processingFeeRoutes = require("./controllers/processingFee")
//  const expenseRoutes = require("./controllers/expense")
//  const schemeRoutes = require("./controllers/scheme")
//  const memberRoutes = require("./controllers/member")
//  const groupLoanRoutes = require("./controllers/groupLoan")
//  const EMIRoutes = require("./controllers/EMIs")
//  const VillageRoutes = require("./controllers/village")
//  const dashboardRoutes = require("./controllers/dashboard")
//  const rdschemeRoutes = require("./controllers/rdScheme")
//  const rdapplicationRoutes = require("./controllers/rdApplications")
//  const accountDepositedRoutes = require("./controllers/AccountDeposited")
//  const applicationVersionRoutes = require("./controllers/applicationVersion")
//  const closeAccountRoutes = require("./controllers/CloseAccount")

 process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Token,token');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    req.headers['content-type'] = req.headers['content-type'] || 'application/json';
    next();
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/uploads', express.static('uploads'));
// app.use("/api/user",usersRoutes);
// app.use("/api/memberGroups",memberGroupRoutes);
// app.use("/api/processingFee",processingFeeRoutes);
// app.use("/api/expense",expenseRoutes);
// app.use("/api/scheme",schemeRoutes);
// app.use("/api/member",memberRoutes);
// app.use("/api/groupLoan",groupLoanRoutes);
// app.use("/api/emis",EMIRoutes);
// app.use("/api/village",VillageRoutes);
// app.use("/api/dashboard",dashboardRoutes);
// app.use("/api/rdScheme",rdschemeRoutes);
// app.use("/api/rdApplication",rdapplicationRoutes);
// app.use("/api/accountDeposited",accountDepositedRoutes);
// app.use("/api/applicationVersion",applicationVersionRoutes);
// app.use("/api/closeAccount",closeAccountRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
module.exports = app;

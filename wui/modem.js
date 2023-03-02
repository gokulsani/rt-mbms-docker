'use strict';
const { wrap: async } = require('co');
const http = require('http');

const baseUrl = '172.17.0.2';

function proxy_call(req, res, path) {
  var connector = http.request({
    host: baseUrl,
    port: 3010,
    path: path,
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
  //    'Content-Length': req.body.length()
    }
  }, (resp) => {
  if(req.method == "PUT") {
  console.log(resp);
  }
    resp.pipe(res);
  });
  connector.on('error', (e) => {
    res.status(503).send("Process unavailable");
  });
  connector.write(JSON.stringify(req.body));
  req.pipe(connector);
}

exports.sdr_params = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/sdr_params");
});
exports.status = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/status");
});
exports.ce_values = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/ce_values");
});
exports.pdsch_data = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/pdsch_data");
});
exports.pdsch_status = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/pdsch_status");
});
exports.mcch_data = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/mcch_data");
});
exports.mcch_status = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/mcch_status");
});
exports.mch_info = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/mch_info");
});
exports.mch_data = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/mch_data/"+req.params["id"]);
});
exports.mch_status = async(function*(req, res) {
  proxy_call(req, res, "/modem-api/mch_status/"+req.params["id"]);
});

#!/usr/bin/env node

const minimist = require('minimist');
const fetch = require("node-fetch");

const defaults = {
  verbose: false,
  url: "http://example.com",
  interval: 1e3
};

var args = Object.assign(defaults, minimist(process.argv.slice(2)));

if (args.verbose) console.log(args)

function request(domain) {
  let url = domain,
      response;

  fetch(url)
    .then(res => {
      response = res
      return res.text()
    } )
    .then(text => {
      console.log(
        (new Date).toISOString(),
        domain,
        response.status,
        response.statusText
      )
    } )
    .catch(err => {
      console.log(
        (new Date).toISOString(),
        domain,
        err.message
      )
    });
}

function run(domain, interval) {
  let timeout = setTimeout( () => {
    request(domain);
    run(domain, interval);
  }, interval);
}

run(args.url, args.interval)

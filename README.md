# healthcheck

a very simple healthcheck

```
» node healthcheck.js --url https://github.com/davethegr8
2018-11-20T18:21:40.615Z https://github.com/davethegr8 200 OK
2018-11-20T18:21:41.704Z https://github.com/davethegr8 200 OK
2018-11-20T18:21:43.110Z https://github.com/davethegr8 200 OK
```

## Options

`--url http://example.com`

Defines the url that you want to check.

`--interval 1e3`

How long between each check. Default: 1 second.

`--verbose false`

Turns on verbose mode

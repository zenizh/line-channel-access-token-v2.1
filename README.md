https://developers.line.biz/ja/docs/messaging-api/generate-json-web-token/

```bash
$ node main.js
```

```bash
$ curl -v -X POST https://api.line.me/oauth2/v2.1/token \
       -H 'Content-Type: application/x-www-form-urlencoded' \
       -d 'grant_type=client_credentials' \
       -d 'client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer' \
       -d 'client_assertion=(client_assertion)'
```
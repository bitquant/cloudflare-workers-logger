# cloudflare-workers-logger
Logger for Cloudflare Workers.  Entries are logged to a Loggly account.

## Install
```
$ npm install cloudflare-workers-logger
```


## Usage
```javascript
const logger = require('cloudflare-workers-logger');

logger.init({
    loggly: {
        token: "<your loggly token>"
    }
})

logger.log('logged from Cloudflare Workers')

```

## License
MIT license; see [LICENSE](./LICENSE).

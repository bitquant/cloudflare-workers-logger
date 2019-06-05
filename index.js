var token = null;

function init(config) {
    token = config.loggly.token;
}

function log(entry, waitUntil) {

    let logPromise = fetch(`https://logs-01.loggly.com/inputs/${token}/tag/http/`, {
        headers: { 'content-type': 'text/plain' },
        method: 'POST',
        body: (typeof entry === 'object') ? JSON.stringify(entry) : entry
    })
    .then(rsp => `Loggly: ${rsp.status} ${rsp.statusText}`)
    .catch(err => `Loggly exception: ${err.message}`);

    if (waitUntil) {
        waitUntil(logPromise)
    }

    return logPromise;
}

exports.init = init;
exports.log = log;

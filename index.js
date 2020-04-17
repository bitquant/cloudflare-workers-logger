var token = null;

function init(config) {
    token = config.loggly.token;
}

// Consume body of responses to free connections
// https://community.cloudflare.com/t/2019-9-19-workers-runtime-release-notes-concurrent-subrequest-limit/115546

function log(entry, waitUntil) {

    let logPromise = fetch(`https://logs-01.loggly.com/inputs/${token}/tag/http/`, {
        headers: { 'content-type': 'text/plain' },
        method: 'POST',
        body: (typeof entry === 'object') ? JSON.stringify(entry) : entry
    })
    .then(rsp => rsp.text())
    .catch(err => `${err}`);

    if (waitUntil) {
        waitUntil(logPromise)
    }

    return logPromise;
}

exports.init = init;
exports.log = log;

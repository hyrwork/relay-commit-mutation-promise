var Relay = require('react-relay');

function commitMutationPromise(environment, config) {
    return new Promise(function (resolve, reject) {
        Relay.commitMutation(
            environment,
            Object.assign(
                {},
                config,
                {
                    onCompleted: function (payload, errors) {
                        if (errors) {
                            reject(errors[0]);
                            return;
                        }
                        resolve(payload);
                    },
                    onError: function (error) {
                        reject(error);
                    }
                }
            )
        );
    });
}

export const requestSubscriptionPromise = function (environment, config) {
    return new Promise(function (resolve, reject) {
        Relay.requestSubscription(
            environment,
            Object.assign(
                {},
                config,
                {
                    onCompleted: function (payload, errors) {
                        if (errors) {
                            reject(errors[0]);
                            return;
                        }
                        resolve(payload);
                    },
                    onError: function (error) {
                        reject(error);
                    }
                }
            )
        );
    });
}

export default commitMutationPromise
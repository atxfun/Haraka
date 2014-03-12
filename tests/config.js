
var config       = require('../config');

var cb = function () { return false; };
var opts = { booleans: ['arg1'] };

function _test_arrange_args(test, args, expected) {
    /*
    console.log("args: " + args);
    console.log("config: " + config);
    for (var i in config) { console.log("config key: " + i); }
    console.log("arrange_args: " + config.arrange_args);
    */
    test.expect(1);
    test.deepEqual(config.arrange_args(args), expected);
    test.done();
}

exports.arrange_args = {
    // config.get('name');
    'name' : function (test) {
        _test_arrange_args(test,
                ['test.ini'],
                ['test.ini', 'ini', undefined, undefined ]
        );
    },
    // config.get('name', type);
    'name, type' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'ini'],
                ['test.ini', 'ini', undefined, undefined ]
        );
    },
    // config.get('name', cb);
    'name, callback' : function (test) {
        _test_arrange_args(test,
                ['test.ini', cb],
                ['test.ini', 'ini', cb, undefined ]
        );
    },
    // config.get('name', cb, options);
    'name, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', cb, opts],
                ['test.ini', 'ini', cb, opts ]
        );
    },
    // config.get('name', options);
    'name, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', opts],
                ['test.ini', 'ini', undefined, opts ]
        );
    },
    // config.get('name', type, cb);
    'name, type, callback' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'ini', cb],
                ['test.ini', 'ini', cb, undefined ]
        );
    },
    // config.get('name', type, options);
    'name, type, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'ini', opts],
                ['test.ini', 'ini', undefined, opts ]
        );
    },
    // config.get('name', type, cb, options);
    'name, type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'ini', cb, opts],
                ['test.ini', 'ini', cb, opts ]
        );
    },
    // config.get('name', list, cb, options);
    'name, list type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'list', cb, opts],
                ['test.ini', 'list', cb, opts ]
        );
    },
    // config.get('name', binary, cb, options);
    'name, binary type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'binary', cb, opts],
                ['test.ini', 'binary', cb, opts ]
        );
    },
    // config.get('name', type, cb, options);
    'name, value type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'value', cb, opts],
                ['test.ini', 'value', cb, opts ]
        );
    },
    // config.get('name', type, cb, options);
    'name, json type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'json', cb, opts],
                ['test.ini', 'json', cb, opts ]
        );
    },
    // config.get('name', type, cb, options);
    'name, data type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'data', cb, opts],
                ['test.ini', 'data', cb, opts ]
        );
    },
    // config.get('name', type, cb, options);
    'name, ini type, callback, options' : function (test) {
        _test_arrange_args(test,
                ['test.ini', 'ini', cb, opts],
                ['test.ini', 'ini', cb, opts ]
        );
    },
};

function _test_get(test, name, type, callback, options, expected) {
    test.expect(1);
    test.deepEqual(config.get(name,type,callback,options), expected);
    test.done();
}

var res = { "main": {} };
var res2 = { "main": { "reject": true } };

exports.get = {
    // config.get('name');
    'name, bare' : function (test) {
        _test_get(test, 'test', null, null, null, null);
    },
    // config.get('name.ini');
    'name.ini' : function (test) {
        _test_get(test, 'test.ini', null, null, null, res);
    },
    // TODO: write out a 'test.ini' file into the config dir, do a config.get
    // on it and validate contents against res2
};

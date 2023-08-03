'use strict';

exports.ok = function(value,rest){
    var data = {
        'status':200,
        'values':value
    };

    rest.json(data);
    rest.end();
}
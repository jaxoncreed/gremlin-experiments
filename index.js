console.log('Starting...');

var prompt = require('prompt');
prompt.start();


var Titan = require('titan-node');
var gremlin = new Titan.Gremlin({ loglevel: 'OFF' });

var TitanFactory = gremlin.java.import('com.thinkaurelius.titan.core.TitanFactory');

var g = TitanFactory.openSync('hadoop-graphson.properties');

console.log(g);

g.loadGraphSON('./gml/initial.gml');





var execute = function() {
    console.log("Type a command:");
    prompt.get(['command'], function (err, result) {
        if (result.command !== 'exit') {
            delete require.cache[require.resolve('./functions')]
            var functions = require('./functions');
            try {
                functions[result.command](g, execute);
            } catch (e) {
                console.log("Invalid Input");
                console.log(e);
                execute();
            }
        }
    });
}

execute();

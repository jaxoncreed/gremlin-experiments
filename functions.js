module.exports = {
    givenQuery: function(g, cb) {
        g.V('name', 'saturn').next(function (err, saturn) {
              g.start(saturn).in('father').in('father').next(function (err, grandchild) {
                    grandchild.getProperty('name', function(err, name) {
                          console.log(name);
                          cb();
                    });
              });
        });
    },
    getAllRelated: function(g, cb) {
        g.V('label', 'information').next(function(err, information) {
            
            console.log(information);
            cb();
        });
    }
};
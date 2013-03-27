exports.findAll = function(req, res) {
    res.send([{name:'nodejs'}, {name:'angularjs'}, {name:'express'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "nodejs", description: "a javascript server"});
};

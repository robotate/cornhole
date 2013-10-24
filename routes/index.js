
/*
 * GET home page.
 */

exports.index = function(req, res){
  playas = [{name: 'player1', score: 12}, {name: 'player2', score: 15}]
  res.render('index', { 'title': 'Cornhole', 'playas': playas });
};

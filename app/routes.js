var ToDo = require('./models/todo.js');

module.exports = function(app){
    app.get('/api/todos',function(req, res){
      ToDo.find(function(err,todos){
        if(err)
            res.send(err);
        res.json(todos);
      });
    });

    app.post('/api/todos',function(req, res){
        Todo.create({
          text : req.body.text,
          done : false
        },function(err,todos){
          if(err)
              res.send(err);
          res.json(todos);
        });
    });

    app.delete('/api/todos/:todo_id',function(req, res){
      Todo.remove({
        _id : req.params.todo_id
      },function(err,todo){
        if(err)
          res.send(err);

        ToDo.find(function(err,todos){
          if(err)
              res.send(err);
          res.send(todos);
        });
      });
    });

};

function init() {
  
  new Vue({

    el: '#app',

    data: {

      'todos' : ['First todo', 'Second todo', 'Third todo'],
      'newTodo' : ''
    },

    methods: {

      addTodo : function() {

        if(this.newTodo.length > 0) {

          this.todos.push(this.newTodo);
          this.newTodo = '';
        }
      },

      removeTodo: function(index) {

        this.todos.splice(index, 1);
      }

    }
  });

}

$(init);
$(document).ready(function() {

    $('form').on('submit', function(evento) {
        
        evento.preventDefault();

        const tarefa = $('#tarefa');
        const nomeTarefa = tarefa.val();
        const tarefas = $('#tarefas');

        const novaTarefa = $(`<li id=${nomeTarefa}>${nomeTarefa}</li>`);
        
       $(tarefas).append(novaTarefa);

       tarefa.val('');
   });

   $('#tarefas').on('click', function(evento) {
    const tarefa = $(evento.target);
    tarefa.addClass('riscar-tarefa');
   });

});
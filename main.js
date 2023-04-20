$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#tarefa').val();
        const tarefas = $('#tarefas');

        const novaTarefa = $(`<li id=${nomeTarefa}>${nomeTarefa}</li>`);
        
       $(tarefas).append(novaTarefa);

       $(novaTarefa).click(function(e) {
        e.preventDefault();
        $('li').addClass('riscar-tarefa');
       })
   })
})


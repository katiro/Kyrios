$(document).ready(function () {
    for (var i = 0; i < 7; i++) {
        $('#ulMenu').append('<li><a href="novedades.html">Categoria ' + (i + 1) + '</a></li><li class="divider"></li>');
        $('#ulNov').append('<a href="#" class="list-group-item">Categoria ' + (i + 1) + '</a>');
    }
});

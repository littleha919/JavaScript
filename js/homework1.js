function init() {
    var table = document.querySelector('table');

    for (var i = 1; i <= 9; i++) {
        var tr = document.createElement('tr');
        for (var j = 2; j <= 9; j++) {
            var td = document.createElement('td');
            td.innerHTML = j + '*' + i + '=' + j * i;
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
}
init();
 


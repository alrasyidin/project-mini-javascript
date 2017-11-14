var add = document.getElementById('add'),
    form = document.forms[0],
    table = document.getElementById('tabel'),
    row, cell;


add.addEventListener('click', function(){
    var cell1, cell2, cell3, cell4, cell5, cell6,

    row = table.insertRow(1);
    
    cell1  = row.insertCell(0);
    cell2  = row.insertCell(1);
    cell3  = row.insertCell(2);
    cell4  = row.insertCell(3);
    cell5  = row.insertCell(4);
    cell6  = row.insertCell(5);

    cell5.innerHTML = "Pria <input type='radio' name='jk'>\
                        Wanita <input type = 'radio' name ='jk'> ";
})
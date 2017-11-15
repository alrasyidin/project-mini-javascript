var add = document.getElementById('add'),
    remove = document.getElementById('delete'),
    cekAll = document.getElementById('cekall'),
    form = document.forms[0],
    table = document.getElementById('tabel'),
    index = 1,
    row, cell;

function addRow(tabel){
    return tabel.insertRow(-1);
}


function generateColumn(row, count){
    for (var i = 0; i < count; i++) {
        row.insertCell(i);
    }
}

function dateBirth(start, finish, select){
    for (var i = start; i <= finish; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
}

add.addEventListener('click', function(event){
    
    // menambahkan baris
    var row = addRow(table);
    
    generateColumn(row, 6);
    
    var cell = row.querySelectorAll('td');
    index++;

    var select1 = document.createElement('select'),
        select2 = document.createElement('select'),
        select3 = document.createElement('select');

    // tanggal
    dateBirth(1, 31, select1);
    // bulan
    dateBirth(1, 12, select2);
    // tahun
    dateBirth(1950, new Date().getFullYear() , select3);

    cell[5].appendChild(select1);        
    cell[5].appendChild(select2);        
    cell[5].appendChild(select3);        

    var check = document.createElement('input');
    check.type = "checkbox";
    check.className = "ceklist";
    cell[0].appendChild(check);
});

function cek(cekAll, list){
    if (cekAll.checked) {
        for (var i = 0; i < list.length; i++) {
            list[i].checked = true;
        }
    } else {
        for (var i = 0; i < list.length; i++) {
            list[i].checked = false;
        }
    }
}


cekAll.addEventListener('click', function(){
    var list = document.querySelectorAll('.ceklist');

    cek(this, list);    
});

function removeRow(row) {
    table.deleteRow(1);
}

remove.addEventListener('click', function(){
    var row = table.querySelectorAll('tr');
    var check = table.querySelectorAll('td:first-child');

    for (var i = 0; i < check.length; i++) {
        if(check[i].firstElementChild.checked){
            removeRow(row[i+1]);
        }else{
            alert("anda tidak dapat menghapus baris karena tidak ada yang terceklis");
            break;
        }
    }

    cekAll.checked = false;
});


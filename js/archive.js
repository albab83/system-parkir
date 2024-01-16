function show_data(){
    let tambah_archive = JSON.parse(localStorage.getItem("Archive Data"));
    if(typeof tambah_archive != 'undifined'){
        //jQuery(".data").remove();
        for (let i = 0; i < tambah_archive.length; i++){
            
            jQuery('#tableBodyArchive').append(
                `<tr class= "text-center" id="` + i +`" class="data">
                    <td>` + tambah_archive[i].owner + `</td>
                    <td>` + tambah_archive[i].jenis + `</td>
                    <td>` + tambah_archive[i].tanggal + `</td>
                    <td>` + tambah_archive[i].pay + `</td>
                </tr>`
            );
        }
    }
}

show_data();


// search data 
document.querySelector('#searchArchive').addEventListener('keyup', function searchTable(){
    //Dapatkan data dari input search
    const searchValue = document.querySelector('#searchArchive').value.toUpperCase();
    //Dapatkan semua baris body tabel
    const tableLine = (document.querySelector('#tableBodyArchive')).querySelectorAll('tr');
    //for loop #1 (digunakan untuk melewatkan semua baris)
    for(let i = 0; i < tableLine.length; i++){
        var count = 0;
        //Dapatkan semua kolom dari setiap baris
        const lineValues = tableLine[i].querySelectorAll('td');
        //for loop #2 (digunakan untuk meneruskan semua kolom)
        for(let j = 0; j < lineValues.length - 1; j++){
            //Periksa apakah ada kolom baris yang dimulai dengan string pencarian masukan
            if((lineValues[j].innerHTML.toUpperCase()).startsWith(searchValue)){
                count++;
            }
        }
        if(count > 0){
            //Jika ada kolom yang berisi nilai pencarian, blok tampilan
            tableLine[i].style.display = '';
        }else{
            //Jika tidak, tidak tampilkan apa pun 
            tableLine[i].style.display = 'none';
        }
    }
});
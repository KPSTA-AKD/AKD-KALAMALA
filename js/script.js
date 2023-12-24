
  function searchTable() {
             var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
             input = document.getElementById("searchInput");
             filter = input.value.toUpperCase();
             table = document.getElementById("resultTable");
             tr = table.getElementsByTagName("tr");

             for (i = 0; i < tr.length; i++) {
                 td1 = tr[i].getElementsByTagName("td")[0]; // Item-Code column
                 td2 = tr[i].getElementsByTagName("td")[1]; // Program Name column
                 if (td1 && td2) {
                     txtValue1 = td1.textContent || td1.innerText;
                     txtValue2 = td2.textContent || td2.innerText;
                     if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                         tr[i].style.display = "";
                     } else {
                         tr[i].style.display = "none";
                     }
                 }
             }
         }

function addTransaction(){
    let Name = document.transcationForm.Uname.value;
    let amount = document.transcationForm.amount.value;
    let payement =document.transcationForm.payement.value;

    function now(){
        return new Date(+(new Date())- Math.floor(Math.random()*10000000000));
    }
    (new now()).toLocaleDateString("en-US");

    function id(){
    let chars = '1234567890';
    let charsLength = chars.length;

    let id = '';

    for (let i = 0; i < charsLength; i++) {
        id += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return id;
    }  

    let tr = document.createElement('tr')

    let td1 = tr.appendChild(document.createElement('td'))
    let td2 = tr.appendChild(document.createElement('td'))
    let td3 = tr.appendChild(document.createElement('td'))
    let td4 = tr.appendChild(document.createElement('td'))
    let td5 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = Name;
    td2.innerHTML = amount;
    td3.innerHTML = payement;
    td4.innerHTML = now();
    td5.innerHTML = id();

    document.getElementById('transactionTable').appendChild(tr)
}

document.getElementById('search').addEventListener('keyup', function searchTransactions(searchTerm) {
    const transactionTable = document.getElementById('transactionTable');
    const rows = transactionTable.getElementsByTagName('tr');
  
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.getElementsByTagName('td');
  
      let matchFound = false;
  
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
  
        if (cell.innerText.includes(searchTerm)) {
          matchFound = true;
          break;
        }
      }
  
      if (!matchFound) {
        row.style.display = 'none';
      } else {
        row.style.display = '';
      }
    }
})
let transactions = [];

function addTransaction(){
  let Name = document.getElementById('Uname').value;
  let amount = document.getElementById('amount').value;
  let payement = document.getElementById('payement').value;

  function now(){
    return new Date(+(new Date())- Math.floor(Math.random()*10000000000));
  }
  let date = (new now()).toLocaleDateString("en-US");

  function id(){
    let chars = '1234567890';
    let charsLength = chars.length;

    let id = '';

    for (let i = 0; i < charsLength; i++) {
      id += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return id;
  }  
  let transactionId = id();

  let transaction = {
    name: Name,
    amount: amount,
    payment: payement,
    date: date,
    id: transactionId
  };

  transactions.push(transaction);

  localStorage.setItem('transactions', JSON.stringify(transactions));

  let tr = document.createElement('tr')

  let td1 = tr.appendChild(document.createElement('td'))
  let td2 = tr.appendChild(document.createElement('td'))
  let td3 = tr.appendChild(document.createElement('td'))
  let td4 = tr.appendChild(document.createElement('td'))
  let td5 = tr.appendChild(document.createElement('td'))

  td1.innerHTML = Name;
  td2.innerHTML = amount;
  td3.innerHTML = payement;
  td4.innerHTML = date;
  td5.innerHTML = transactionId;

  document.getElementById('transactionTable').appendChild(tr)
}

function searchTransactions(searchTerm) {
    let transactions = JSON.parse(localStorage.getItem('transactions'));
  
    for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let matchFound = false;
  
      if (transaction.name.includes(searchTerm) || 
          transaction.amount.includes(searchTerm) || 
          transaction.payment.includes(searchTerm) || 
          transaction.date.includes(searchTerm) || 
          transaction.id.includes(searchTerm)) {
        matchFound = true;
      }
  
      const row = document.getElementById('transactionTable').rows[i + 1]; // Assuming the table has a header row
  
      if (!matchFound) {
        row.style.display = 'none';
      } else {
        row.style.display = '';
      }
    }
}
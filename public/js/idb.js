
let db;

const request = indexedDB.open('budget', 2);

request.onupgradeneeded = function(event) {
    
    const db = event.target.result;
    
    db.createObjectStore('Transaction', { autoIncrement: true });
  };

request.onsuccess = function(event) {
 
    db = event.target.result;
  
 
    if (navigator.onLine) {
      // we haven't created this yet, but we will soon, so let's comment it out for now
       uploadBudget();
    }
  };
  
request.onerror = function(event) {
    
    console.log(event.target.errorCode);
  };

function saveRecord(record){
      const transaction = db.transaction(['Transaction'], 'readwrite');

      const budgetObjectStore = transaction.objectStore('Transaction');

      budgetObjectStore.add(record);
    };

function uploadBudget(){
    const transaction = db.transaction(['Transaction'], 'readwrite');

    const budgetObjectStore = transaction.objectStore('Transaction');

    const getAll = budgetObjectStore.getAll();

    getAll.onsuccess = function (){
        if(getAll.result.length > 0) {
            fetch('/api/transaction', {
                method: 'POST',
                body: JSON.stringify(getAll.result),
                headers: {
                    Accept: 'application/ json,  text/plain, */*',
                    'Content-Type': 'application/json'
                }
            })
            .then(response=> response.json())
            .then(serverResponse => {
                if(serverResponse.message) {
                throw new Error(serverResponse);
            }
            const transaction = db.transaction(['Transaction'], 'readwrite');
            const budgetObjectStore = transaction.objectStore('Transaction');
            budgetObjectStore.clear();

            alert('All saved transactions have been submitted!');
        })
        .catch(err=> {
            console.log(err);
        })
    }
}
}

window.addEventListener('online', uploadBudget);

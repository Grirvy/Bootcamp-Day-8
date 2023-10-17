//WRITE YOUR CODE BELOW
const customerData = {};

function addCustomer(id, name, drink, sugars) {
  customerData[id] = {
    name: name,
    drink: drink,
    sugars: sugars,
  };
  console.log(name + "'s order added to the queue");
    setTimeout(() => {
        checkOnCustomer(id);
    }, 5000);   
  
    setTimeout(() => {
        serveCustomer(id);
        return;
    }, 10000);
};

function checkOnCustomer(id) {
    console.log(customerData[id].name + "'s order is still getting preped.");
};


function serveCustomer(id) {
    console.log(customerData[id].name + "'s " + customerData[id].drink + " is ready!");

};

addCustomer(0, "John", "coffee", 2);


document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(e) {
    // Create and XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open("GET", "customer.json", true);

    // onload successor to readystatechange
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>              
            </ul>`
            document.getElementById("customer").innerHTML = output;
        }
    };

    xhr.onerror = function () {
        console.log("Request error...");
    };

    xhr.send();
}

function loadCustomers(e) {
    // Create and XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open("GET", "customers.json", true);

    // onload successor to readystatechange
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            let output = '';
            const customers = JSON.parse(this.responseText);
            customers.forEach(customer => {
                output +=
                    `<ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>              
                    </ul>`
            });
            document.getElementById("customers").innerHTML = output;
        }
    };

    xhr.onerror = function () {
        console.log("Request error...");
    };

    xhr.send();
}
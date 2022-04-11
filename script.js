function signUp() {
    var name = document.getElementById("fullName").value;
    var cardNum = document.getElementById("cardNumber").value;
    var ssn = document.getElementById("ssn").value;
    alert("Name: " + name + ", Card #: " + cardNum + ", SSN: " + ssn + ". Congrats!! You're all signed up!! See you at the race!!!");
}

function addTotals() {
    var tableBody = document.getElementById("shopTable");
    var i;
    var whichColumn = 4;
    var howManyRows = tableBody.rows.length;
    the_total = 0;
    for (i = 1; i < (howManyRows - 3); i++) {
        var thisTrElem = tableBody.rows[i];
        var thisTdElem = thisTrElem.cells[whichColumn];
        the_total += parseInt(thisTdElem.innerText.slice(1));
    }
    return the_total;
}

function mod(obj) {
    quantity = document.getElementById("quantity"+obj.id.slice(-1)).innerText;
    price = document.getElementById("price"+obj.id.slice(-1)).innerText;
    quantity = eval(quantity + obj.innerText + 1);
    if (quantity < 0) quantity = 0;
    document.getElementById("quantity"+obj.id.slice(-1)).innerText=quantity;
    total = quantity * price;
    document.getElementById("total"+obj.id.slice(-1)).innerText=total.toFixed(2);

    subtotal = addTotals();

    tax = subtotal * 0.05;
    grandTotal = subtotal + tax;
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = grandTotal.toFixed(2);
}

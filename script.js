function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * year * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById('result').innerText(
        "If you deposit" + principal +
        "\<br\>at an interest rate of" + rate + "%\<br\>" +
        "You will recieve an amount of "+ interest +
        "\<br\>in the year " + year
    )
}
function pricipalCheck(){
    if(principal<= 0){
        alert("Enter a positive number");
        document.getElementById('principal').focus;
        return false;
    }
    return true;
}
function updateRate(){
    var rate_slider = document.getElementById('rate').value;
    var rate_span = document.getElementById('rate_val');
    rate_span.innerText = rate_slider;
}
        
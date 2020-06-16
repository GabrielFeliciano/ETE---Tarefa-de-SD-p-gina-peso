const buttonWeightFormSubmit = document.getElementById("bt-save");
buttonWeightFormSubmit.onclick = saveWeightHistory;

function saveWeightHistory () {
    console.log(11)
    const weight = document.querySelector("#ask-weight > input[type='text']").value;
    const tableWeightBody = document.querySelector('#table-weight > tbody');

    const newRow = document.createElement('tr');
    const dataWeight = document.createElement('td');
    dataWeight.appendChild(document.createTextNode(`${weight}Kg`));
    const dataDate = document.createElement('td');
    dataDate.appendChild(document.createTextNode(`date`));
    newRow.appendChild(dataWeight);
    newRow.appendChild(dataDate);

    console.log(newRow)
    tableWeightBody.appendChild(newRow);
}
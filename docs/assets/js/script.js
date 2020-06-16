const buttonWeightFormSubmit = document.getElementById("bt-save");
buttonWeightFormSubmit.onclick = saveWeightHistory;

function saveWeightHistory () {
    const weight = document.querySelector("#ask-weight > input[type='text']").value;
    document.querySelector("#ask-weight > input[type='text']").value = "";

    const WeightValid = (/^(\d*\.?\d+)(.*)$/g).exec(weight);
    console.log(WeightValid)
    if (WeightValid === null) {
        return null
    }

    document.querySelector("#form-weight")
        .style
        .height = '50vh';
        
    document.querySelector("body > div.table-weight-container")
        .style
        .height = '100%';

    document.querySelector("body > div.table-weight-container")
        .style
        .margin = '3rem 0';

    document.querySelector("body > div.table-weight-container")
        .style
        .borderWidthTop = '.1rem';
        
    document.querySelector("body > div.table-weight-container")
        .style
        .borderWidthBottom = '.1rem';

    const tableWeightBody = document.querySelector('#table-weight > tbody');

    const date = new Date;
    const dateString = `${date.toLocaleDateString()} as ${date.toLocaleTimeString()}`;

    const newRow = document.createElement('tr');
    const dataWeight = document.createElement('td');
    dataWeight.appendChild(document.createTextNode(`${WeightValid[1]} ${WeightValid[2] || 'Kg'}`));
    const dataDate = document.createElement('td');
    dataDate.appendChild(document.createTextNode(dateString));
    newRow.appendChild(dataWeight);
    newRow.appendChild(dataDate);

    console.log(newRow)
    tableWeightBody.appendChild(newRow);
}
// imports data from data.js
const tableData = data;

// finds tbody tags in html using d3.select
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

    // loops through every object in data.js
    data.forEach((dataRow) => {
        // appends the row to table body (tbody)
        let row = tbody.append("tr");

        // loops through every field in the row
        Object.values(dataRow).forEach((val) => {
            // adds values as table cells (td)
            let cell = row.append("td");
            cell.text(val);
            }   
        );
    });
}
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        // filters data to match specified date value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
       // builds the new table using build table function
    buildTable(filteredData);
    }

//
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);

// imports data from data.js
const tableData = data;

// finds tbody tags in html using d3.select
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
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

    // checks if date was entered and filters using date
    if (date) {
        // filters data to match specified date value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // builds the new table using build table function
    buildTable(filteredData);
}

// uses handleClick function on the filter button created in index.html
d3.selectAll("#filter-btn").on("click", handleClick);
// builds a table out of the data when the page loads
buildTable(tableData);

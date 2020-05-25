// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData;

  // filters data to match specified value
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }

  // Call function to apply all filters and rebuild the table
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);

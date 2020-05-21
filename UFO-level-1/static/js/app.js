// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the empty table into which we will add data
var tbody = d3.select("tbody");

// Complete the click handler for the form
button.on("click", function() {

    // Clear the table of data
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Use the form input to filter the data by date
    function selectDate(ufo) {
    return ufo.datetime == inputValue;
}

    var filteredData = tableData.filter(selectDate);

    // Populate the table with the data we want to display

    filteredData.forEach((ufo) => {
        tbody.append("tr");
        Object.entries(ufo).forEach(([key,value]) => {
            tbody.append("td").text(value);
        })
    });

    // Clear the value of the input element
    inputElement.property("value","");

});

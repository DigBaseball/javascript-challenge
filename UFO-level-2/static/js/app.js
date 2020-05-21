// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the empty table into which we will add data
var tbody = d3.select("tbody");

// Try to replace some of the broken HTML and create a new JSON object variable to filter 
var stringified = JSON.stringify(tableData);
stringified = stringified.replace('&#44', ',');
var jsonObject = JSON.parse(stringified);

// Complete the click handler for the form
button.on("click", function() {

    // Clear the table of data
    tbody.html("");

    // Select the input element date and get the raw HTML node
    var inputElementDate = d3.select("#datetime");

    // Get the value property of the input element date
    var inputValueDate = inputElementDate.property("value");

    // Use the form input to filter the data by date
    function selectDate(ufo) {
    return ufo.datetime == inputValueDate;
}

    // Select the input element city and get the raw HTML node
    var inputElementCity = d3.select("#city");

    // Get the value property of the input element date
    var inputValueCity = inputElementCity.property("value");

    // Use the form input to filter the data by city
    function selectCity(ufo) {
    return ufo.city == inputValueCity;
}

    // Select the input element state and get the raw HTML node
    var inputElementState = d3.select("#state");

    // Get the value property of the input element state
    var inputValueState = inputElementState.property("value");

    // Use the form input to filter the data by state
    function selectState(ufo) {
    return ufo.state == inputValueState;
}

    // Select the input element country and get the raw HTML node
    var inputElementCountry = d3.select("#country");

    // Get the value property of the input element country
    var inputValueCountry = inputElementCountry.property("value");

    // Use the form input to filter the data by country
    function selectCountry(ufo) {
    return ufo.country == inputValueCountry;
}

    // Select the input element shape and get the raw HTML node
    var inputElementShape = d3.select("#shape");

    // Get the value property of the input element shape
    var inputValueShape = inputElementShape.property("value");

    // Use the form input to filter the data by shape
    function selectShape(ufo) {
    return ufo.shape == inputValueShape;
}

    // Initialize filtered data object, equal to entire data set
    var filteredData = jsonObject;

    // Apply date filter, if user provided
    if (inputValueDate != "") {
        filteredData = filteredData.filter(selectDate);
    };
    
    // Apply city filter, if user provided
    if (inputValueCity != "") {
        filteredData = filteredData.filter(selectCity);
    };

    // Apply state filter, if user provided
    if (inputValueState != "") {
        filteredData = filteredData.filter(selectState);
    };

    // Apply country filter, if user provided
    if (inputValueCountry != "") {
        filteredData = filteredData.filter(selectCountry);
    };

     // Apply shape filter, if user provided
     if (inputValueShape != "") {
        filteredData = filteredData.filter(selectShape);
    };   

    // Populate the table with the data we want to display
    filteredData.forEach((ufo) => {
        tbody.append("tr");
        Object.entries(ufo).forEach(([key,value]) => {
            tbody.append("td").text(value);
        })
    });

    // Clear the value of the input elements
    inputElementDate.property("value","");
    inputElementCity.property("value","");
    inputElementState.property("value","");
    inputElementCountry.property("value","");
    inputElementShape.property("value","");

});

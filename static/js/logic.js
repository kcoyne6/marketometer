

var url = "/api/stock_stats"; //assign all data to a temp variable so as not to edit data file1


d3.json(url).then(function(data) {
    console.log(data);

    // var datesearch = data.filter(function(d) { return d.date="2019-04-01"; });
    // console.log(JSON.stringify(datesearch));
    
    // Object.keys(data).forEach(key => console.log(key));
    // Object.values(data).forEach(value => console.log(value));
    // console.log(data.amd);
});

d3.json(url).then(function(data) {
    data.forEach(function(stats) {
        var stock_name = stats.stock;
        console.log(stock_name);
        var startdate = stats.date['2019-04-01'];
        // console.log(startdate);
    console.log(`${stats.stock}: ${stats.open}: ${stats.date}`);
});


function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  
  // Submit Button handler
  function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var stock = d3.select("#stockInput").node().value;
    console.log(stock);
  
    // clear the input value
    d3.select("#stockInput").node().value = "";
  
    // Build the plot with the new stock
    buildPlot(stock);
  }
  
  function buildPlot(stock) {
    var apiKey = "ZKQ69TkgZVN5LZK96J-G";
  
    // var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;
  
    d3.json(url).then(function(data) {
  
      // Grab values from the response json object to build the plots
      var name = data.stats.stock;
      console.log(name)
      var stock = data.ticker;
      console.log(stock);
      var startDate = data.date['2019-04-01'];
      var endDate = data.date['2019-05-01'];
      var dates = unpack(data.date, 0);
      console.log(dates);
      var openingPrices = unpack(data.dataset.data, 1);
      var highPrices = unpack(data.dataset.data, 2);
      var lowPrices = unpack(data.dataset.data, 3);
      var closingPrices = unpack(data.dataset.data, 4);
  
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      };
  
      // Candlestick Trace
      var trace2 = {
        type: "candlestick",
        x: dates,
        high: highPrices,
        low: lowPrices,
        open: openingPrices,
        close: closingPrices
      };
  
      var data = [trace1, trace2];
  
      var layout = {
        title: `${stock} closing prices`,
        xaxis: {
          range: [startDate, endDate],
          type: "date"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
    });
  }
  
  // Add event listener for submit button
  d3.select("#submit").on("click", handleSubmit);
})

// d3.json(url).then(function(data) {
//     data.forEach(function(stats) {
//         var stock_name = stats.stock; 
//         console.log(stock_name);
//         var ticker = stats.ticker;
//         console.log(ticker);
//         // var startDate = stats.date;
//         // var endDate = stats.date;
//         // var closingPrices=stats.date;
//     });
// })
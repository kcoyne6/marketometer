var url = "/api/stock_stats"; //assign all data to a temp variable so as not to edit data file1


d3.json(url).then(function(data) {
    console.log(data);
    var datesearch = data.filter(function(d) { return d.date="2019-04-01"; });
    console.log(JSON.stringify(datesearch));
    
    // Object.keys(data).forEach(key => console.log(key));
    Object.values(data).forEach(value => console.log(value));
    // console.log(data.amd);
});

d3.json(url).then(function(data) {
    data.forEach(function(princess) {
    console.log(`${princess.stock}: ${princess.open}: ${princess.date}`);
});
// })
var apiKey = "NL7VC54FBQ887PB0";

var url =`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=${apiKey}`;

// function buildPlot() {
//     d3.json(url).then(function(data) {
    
//     // Grab values from the data json object to build the plots
//     var name = umpack(data.MetaData2.symbol);
//     console.log(name);
//     var stock = data.ticker;
//     var startDate = data.date;
//     var endDate = data.date;
//     // var dates = unpack(data.dataset.data, 0);
//     var closingPrices = data.close;

//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: name,
//       x: endDate,
//       y: closingPrices,
//       line: {
//         color: "#17BECF"
//       }
//     };

//     var data = [trace1];

//     var layout = {
//       title: `${stock} closing prices`,
//       xaxis: {
//         range: [startDate, endDate],
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);

//   });
// }
// }

// buildPlot();
})

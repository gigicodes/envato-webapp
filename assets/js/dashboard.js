var options = {
    series: [{
      name: "Page Visits",
      data: [19, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: "Page Visits",
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Mon','Tue','Wed','Thurs','Fri','Sat','Sun'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#linechart"), options);
  chart.render();

  var options = {
    series: [64,36],
    chart: {
    type: 'donut',
  },
  responsive: [{
    breakpoint: 2000,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#piechart"), options);
  chart.render();

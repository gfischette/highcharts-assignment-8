Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges', 'Pears']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Janice and Greg\'s house'
      }
    },
    series: [{
      name: 'Janice',
      data: [1, 0, 4, 6]
    }, {
      name: 'Greg',
      data: [5, 7, 3, 6]
    }]
  });

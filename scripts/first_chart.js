Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pears', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Janice and Greg\'s house'
      }
    },
    series: [{
      name: 'Janice',
      data: [6, 1, 0, 4]
    }, {
      name: 'Greg',
      data: [6, 5, 7, 3]
    }]
  });

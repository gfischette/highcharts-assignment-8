Highcharts.chart('containertwo', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Current GDP expenditure spent on health in the top 5 most populated countries in North America',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'Mexico', 'Canada', 'Guatemala', 'Haiti'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '% of GDP'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: '2000',
            data: [12.5, 4.4, 8.2, 5.4, 4]
        },
        {
            name: '2010',
            data: [16.3, 5.7, 10.7, 6.1, 4.6]
        },
        {
        name: '2019',
        data: [16.8, 5.4, 10.8, 6.2, 4.7]
        }
    ]
});


/* life expectancy chart */

Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Life Expectancy Throughout the Years'
    },
    xAxis: {
        categories: ['2010', '2015', '2017', '2022']
    },
    yAxis: {
        title: {
            text: 'Years'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'United States',
        data: [78.0, 78.9, 78.8, 78.2]
    }, {
        name: 'Mexico',
        data: [74.2, 74.7, 74.1, 74.8]
    }, {
      name: 'Canada',
        data: [81.3, 81.9, 82, 82.8]
    }, {
      name: 'Guatemala',
        data: [70.9, 72.1, 72.6, 68.7]
    }, {
      name: 'Haiti',
        data: [46, 63.2, 63.9, 63.7]
    }]
});


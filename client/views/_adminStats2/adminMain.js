Template.adminMain.onRendered( function(){
    vegas = true
    var data = [
        ['Jan', 0],
        ['Feb', 0],
        ['Mar', 0],
        ['Apr', 0],
        ['May', 0],
        ['Jun', 0],
        ['Jul', 0],
        ['Aug', 0],
        ['Sep', 0],
        ['Oct', 0],
        ['Nov', 0],
        ['Dec', 0],
    ];


    function randomizeData(){
        if (vegas) {
            for (var i = 0; i < 12; i++) {
                data[i][1] = Math.floor(Math.random() * 200)
            }
        }
    }

    randomizeData()
    var chart = anychart.column();
    chart.animation(true);
    var series = anychart.data.mapAsTable(data);
    for (var i in series) {
        chart.column(series[i]);
    }
    chart.container('chartNOU').draw()
    title = chart.title().text('asdasd')
    chart.draw();

    randomizeData()
    var chart2 = anychart.line();
    chart2.animation(true);
    var series = anychart.data.mapAsTable(data);
    for (var i in series) {
        chart2.line(series[i]);
    }
    chart2.container('chartCR').draw()
    chart2.draw();

    var chart3 = anychart.pie([
                 ['Hoodies', Math.floor(Math.random() * 250)],
                 ['Tshirts', Math.floor(Math.random() * 250)],
                 ['Sweaters', Math.floor(Math.random() * 50)],
                 ['Backpacks', Math.floor(Math.random() * 50)],
             ]);
    chart3.legend(false);
    chart3.container('chartSales');
    chart3.draw();

    var data2 = [
        ['Hoodie', 0, 0],
        ['Sweater', 0, 0],
        ['TShirts', 0, 0],
        ['Backpacks', 0, 0],
        ['Others', 0, 0],
    ];

    function randomizeData2(){
        if (vegas) {
            for (var i = 0; i < 5; i++) {
                data2[i][1] = Math.floor(Math.random() * 50)
                data2[i][2] = Math.floor(Math.random() * 50)
            }
            console.log(data2)
        }
    }

    randomizeData2()
    dataSet = anychart.data.set(data2)
    var womenData = dataSet.mapAs({'x': 0, 'value':1})
    var menData = dataSet.mapAs({'x': 0, 'value':2})
    var chart4 = anychart.radar()
    chart4.container('chartStock')
    chart4.yScale()
        .minimum(0)
        .maximumGap(0)
        .ticks().interval(5);
    chart4.xAxis().labels().padding(5);
    //chart4.margin().bottom(40);
    var labelFormattingFunction = function () {
        return this.x + ': ' + this.value.toFixed(2)
    };
    var series1 = chart4.area(womenData).name('women');
    series1.tooltip().format(labelFormattingFunction);
    var series2 = chart4.area(menData).name('men');
    series2.tooltip().format(labelFormattingFunction);
    chart4.draw()
    
});

Template.adminMain.helpers({
});

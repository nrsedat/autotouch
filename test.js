var dataset = [
        { name: 'Success', count: 546 },
        { name: 'Error', count: 155 }
    ];

    var total=0;

    dataset.forEach(function(d){
        total+= d.count;
    });

    var ratio=dataset[0].count/total;

    var pie=d3.layout.pie()
            .value(function(d){return d.count})
            .sort(null);

    var w=300,h=300;

    var outerRadius=(w/2)-10;
    var innerRadius=100;

    var color = d3.scale.ordinal()
     .range(['#67BAF5','#F17F4D']);

    var arc=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

    var arcLine=d3.svg.arc()
            .innerRadius(innerRadius-13)
            .outerRadius(innerRadius-10)
            .startAngle(0);

    var svg=d3.select("#chart")
            .append("svg")
            .attr({
                width:w,
                height:h,
                class:'shadow'
            }).append('g')
            .attr({
                transform:'translate('+w/2+','+h/2+')'
            });
    var path=svg.selectAll('path')
            .data(pie(dataset))
            .enter()
            .append('path')
            .attr({
                d:arc,
                fill:function(d,i){
                    return color(d.data.name);
                }
            });

    var pathLine=svg.append('path')
            .datum({endAngle:0})
            .attr({
                d:arcLine
            })
            .style({
                fill:color('Success')
            });

    var text=svg.selectAll('.legend')
            .data(pie(dataset))
            .enter()
            .append("text")
            .attr('class','legend')
            .attr("transform", function (d) {
                var c=arc.centroid(d);
                return "translate(" +(c[0] *1.4)+','+(c[1]*1.5) + ")";
            })
            .attr("dy", ".4em")
            .attr("text-anchor", "middle")
            .text(function(d){
                return d.data.name+' ('+Math.floor((d.data.count/total)*100)+'%)';
            })
            .style({
                fill:function(d){
                    return color(d.data.name);
                },
                'font-size':'12px'
            });

    var middleCount=svg.append('text')
            .datum(0)
            .text(function(d){
                return d;
            })

            .attr({
                class:'middleText',
                'text-anchor':'middle',
                dy:10
            })
            .style({
                fill:color('Success'),
                'font-size':'35px'

            });

    var arcTween=function(transition, newAngle) {
        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            var interpolateCount = d3.interpolate(0, dataset[0].count);
            return function (t) {
                d.endAngle = interpolate(t);
                middleCount.text(Math.floor(interpolateCount(t)));
                return arcLine(d);
            };
        });
    };


    var animate=function(){
        pathLine.transition()
                .duration(750)
                .call(arcTween,((2*Math.PI))*ratio);


    };

    setTimeout(animate,100);

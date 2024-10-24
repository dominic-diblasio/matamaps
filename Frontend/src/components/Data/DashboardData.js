import React from 'react'
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar6 from "../../assets/images/xs/avatar6.jpg";


export const EmployeeInfoChartData = {
    options:{
        series: [{
            name: 'Available',
            data: [4, 19, 7, 35, 14, 27, 9, 12],
        }],
            chart: {
            height: 140,
            type: 'line',
            toolbar: {
                show: false,
            }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: { 
                lines: {
                    show: false
                }
            }, 
        },
        stroke: {
            width: 4,
            curve: 'smooth',
            colors: ['var(--chart-color2)'],
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2021', '2/11/2021', '3/11/2021', '4/11/2021', '5/11/2021', '6/11/2021', '7/11/2021', '8/11/2021'],
            tickAmount: 10,
            labels: {
                formatter: function(value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: [ "var(--chart-color3)" ],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        markers: {
            size: 3,
            colors: ["#FFA41B"],
            strokeColors: "#ffffff",
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        yaxis: {
            show: false,
            min: -10,
            max: 50,
        }
    }
}

export const TotalEmployeesChartData = {
    options:{
        align: 'center',
        chart: {
            height: 250,
            type: 'donut',
            align: 'center',
        },
        labels: ['Man', 'Women'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            show: true,
        },
        colors: ['var(--chart-color4)', 'var(--chart-color3)'],
        series: [44, 55],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
}

export const TopHiringSourcesChartData ={
    options:{
        series: [{
            name: 'Ui/Ux Designer',
            data: [45, 25, 44, 23, 25, 41, 32, 25, 22, 65, 22, 29]
        }, {
            name: 'App Development',
            data: [45, 12, 25, 22, 19, 22, 29, 23, 23, 25, 41, 32]
        }, {
            name: 'Quality Assurance',
            data: [45, 25, 32, 25, 22, 65, 44, 23, 25, 41, 22, 29]
        }, {
            name: 'Web Developer',
            data: [32, 25, 22, 11, 22, 29, 16, 25, 9, 23, 25, 13]
        }],
        chart: {
            type: 'bar',
            height: 300,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['var(--chart-color1)','var(--chart-color2)','var(--chart-color3)','var(--chart-color4)'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: ['Jan','Feb','March','Apr','May','Jun','July','Aug','Sept','Oct','Nov','Dec'],
        },
        legend: {
            position: 'top', // top, bottom
            horizontalAlign: 'right', // left, right
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1
        }
    }
}

export const IncomeAnalyticsChartData ={
    options:{
        align: 'center',
        series: [1242, 1047, 1352, 1458, 1465, 1889],
        responsive: [{
            breakpoint: 420,
            options: {
                chart: {
                    width: 200,
                    align: 'center',
                },
                legend: {
                    position: 'bottom',
                    markers: {
                        fillColors:'var(--chart-color1)'
                    },
                    labels: {
                        colors: 'var(--chart-color1)'
                    },
                }
            }
        }],
        chart: {
            height: 336,
            type: 'polarArea',
            toolbar: {
                show: false,
            },
        },
        labels: ['France', 'India', 'Canada', 'Italy', 'Japan' , 'Us'],
        fill: {
            opacity: 1,
            colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color3)', 'var(--chart-color4)', 'var(--chart-color5)', 'var(--chart-color6)'],
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom', // left, right, top, bottom
            horizontalAlign: 'center',  // left, right, center
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                }
            }
        },
        theme: {
            monochrome: {
            enabled: true,
            shadeTo: 'light',
            shadeIntensity: 0.6
            }
        }
    }
}

export const ProjectTimelineChartData ={
    options:{
        chart: {
            height: 407,
            type: 'rangeBar',
            toolbar: {
                show: false,
            }
        },        
        plotOptions: {
            bar: {
                horizontal: true,                
            }
        },
        colors: ['var(--chart-color1)', 'var(--chart-color2)', 'var(--chart-color4)'],

        series: [{
            name: 'Justin',            
            data: [{
                x: 'Design',
                y: [new Date('2020-03-02').getTime(), new Date('2020-03-04').getTime()]
            }, {
                x: 'MobileApp',
                y: [new Date('2020-03-02').getTime(), new Date('2020-03-04').getTime()]
             
            }, {
                x: 'Infography',
                y: [new Date('2020-03-04').getTime(), new Date('2020-03-07').getTime()]
            }, {
                x: 'Protoyping',
                y: [new Date('2020-03-11').getTime(), new Date('2020-03-12').getTime()]
            },{
                x: 'Development',
                y: [new Date('2020-03-02').getTime(), new Date('2020-03-03').getTime()]
            }]
        }, {
            name: 'Michael',
            data: [{
                x: 'Design',
                y: [new Date('2020-03-01').getTime(), new Date('2020-03-03').getTime()] 
            }, {
                x: 'MobileApp',
                y: [new Date('2020-03-03').getTime(), new Date('2020-03-07').getTime()] 
            }, {
                x: 'Infography',
                y: [new Date('2020-03-06').getTime(), new Date('2020-03-09').getTime()]
            }, {
                x: 'Protoyping',
                y: [new Date('2020-03-10').getTime(), new Date('2020-03-11').getTime()]
            },
            {
                x: 'Development',
                y: [new Date('2020-03-01').getTime(), new Date('2020-03-02').getTime()] 
            }]
        },{
            name: 'Jason',
            data: [{
                x: 'Design',
                y: [new Date('2020-03-03').getTime(), new Date('2020-03-05').getTime()] 
            }, {
                x: 'MobileApp',
                y: [new Date('2020-03-01').getTime(), new Date('2020-03-09').getTime()] 
            }, {
                x: 'Infography',
                y: [new Date('2020-03-05').getTime(), new Date('2020-03-08').getTime()]
            }, {
                x: 'Protoyping',
                y: [new Date('2020-03-11').getTime(), new Date('2020-03-17').getTime()]
            },
            {
                x: 'Development',
                y: [new Date('2020-03-03').getTime(), new Date('2020-03-05').getTime()] 
            }]
        }],
        yaxis: {
            min: new Date('2020-03-01').getTime(),
            max: new Date('2020-03-14').getTime()
        },
        xaxis: {
           type: 'datetime'
        }
    }
}

export const ClientInvoicesData={
    title:"Client Invoices",
    columns:[
        {
            name: "NO",
            selector: ()=>{},
            sortable: true,
            cell:(row)=> <a href="invoices" className="fw-bold text-secondary">#{row.no}</a>
        },
        {
            name: "PROJECT",
            selector: row=>row.project,
            sortable: true
        },
        {
            name: "START DATE",
            selector: row=>row.startdate,
            sortable: true,
        },
        {
            name: "EDN DATE",
            selector: row=>row.enddate,
            sortable: true
        },
        {
            name: "AMOUNT",
            selector: row=>row.amount,
            sortable: true
        },
        {
            name: "STATUS",
            selector: row=>{},
            sortable: true,
            cell:(row)=><span className={`badge ${row.status==="Paid"?"bg-success":row.status==="Pending"?`bg-warning`:'bg-lavender-purple'}`}>{row.status}</span>
        }

    ],
    rows:[
        {
            no:"00011",
            project:"Social Geek Made",
            startdate:"10-01-2021",
            createdate:"10-02-2021",
            amount:"$3250",
            status:"Pending"
        },
        {
            no:"00002",
            project:"Practice to Perfect",
            startdate:"12-02-2021",
            createdate:"10-04-2021",
            amount:"$1578",
            status:"Paid"
        },
        {
            no:"00003",
            project:"Rhinestone",
            startdate:"18-02-2021",
            createdate:"20-04-2021",
            amount:"$1978",
            status:"Draft"
        },
        {
            no:"00004",
            project:"Box of Crayons",
            startdate:"28-02-2021",
            createdate:"30-04-2021",
            amount:"$1973",
            status:"Draf"
        }
    ]
}

export const InvoiceData =[
    {
        image:Avatar1,
        name:"Ryan MacLeod",
        occupation:"Box of Crayons",
        address:"2211 Jones Avenue,Winston Salem FL 27107",
        rate:"50",
        appliedData:"23 Feb, 2021"
    },
    {
        image:Avatar2,
        name:"Penelope Stewart",
        occupation:"Fast Cad",
        address:"3154 Sampson Street,Aurora CT 80014",
        rate:"43",
        appliedData:"14 Apr, 2021"
    },
    {
        image:Avatar3,
        name:"Diane Slater",
        occupation:"Gob Geeklords",
        address:"49 Stamford Road. West Chicago, IL 60185",
        rate:"25",
        appliedData:"16 Mar, 2021"
    },
    {
        image:Avatar4,
        name:"Amy Mills",
        occupation:"Java Dalia",
        address:"2698 Northumberland. Melbourne, FL 32904",
        rate:"55",
        appliedData:"17 Mar, 2021"
    },
    {
        image:Avatar5,
        name:"Tim Mitchell",
        occupation:"Practice to Perfect",
        address:"35 Gubener Str. Emmering, FL 32904",
        rate:"28",
        appliedData:"12 Feb, 2021"
    },
    {
        image:Avatar6,
        name:"Brian Swader",
        occupation:"Rhinestone",
        address:"70 Bowman St. South Windsor, CT 06074",
        rate:"65",
        appliedData:"18 Feb, 2021"
    }
]
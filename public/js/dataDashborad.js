
async function getData(){
    let response = await fetch('/Assetlist'); 
    let da = await response.json()
   
    let a=0
    let d=0
    let b=0
    let h=0
    da.forEach(element => {
        if(element["Status"]==0)a++;
        else if(element["Status"]==1)d++;
        else if(element["Status"]==2)b++;
        else if(element["Status"]==3)h++;
        
    });
  console.log("Available: "+a+"\nDisable: "+d + "\nBorrow: " + b+ "\nHanding:"+h);
    const data = {
        labels: [
            'Availble',
            'Disabled',
            'Borrowed',
            'Handing'
        ],
        datasets: [{
            label: 'Amount',
            data: [a, d, b, h],
            borderColor: '#FFFFFF',
            backgroundColor: [
                '#A5DFDF90',
                '#FFB1C190',
                '#FFE6AA90',
                '#FFB37B90'
            ]
        }]
    };
    const config = {
        type: 'polarArea',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },

            }
        },
    };
    new Chart(document.getElementById('myChart'), config);
}
getData()
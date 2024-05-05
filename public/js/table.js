
let Alldata = ""
let currentPage = 1;
let totalPages = 7
var ser = document.getElementById('Search');

async function getdata(pageNumber,searchTerm) {
    try {
        let data = await fetch("/gethistor")
        let mydata = await data.json()
        d = mydata.filter(data => data.Borrorwer_ID == myid)
        serdata = d.sort((a, b) => a.verify - b.verify);
        Alldata = serdata.filter(element => element.assetName.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log(Alldata)
        totalPages = Math.ceil(Alldata.length / 7);
        // console.log(Alldata)
        currentPage = pageNumber;
        const startIndex = (currentPage - 1) * 7;
        const endIndex = Math.min(startIndex + 7, Alldata.length);
        const tableBody = document.getElementById("show_table");

        tableBody.innerHTML = "";
        let display ="" // Clear table content
        // console.log(Alldata)
        for (let start = startIndex; start < endIndex; start++) {
            let Mystatus;
            let sh;
            if (Alldata[start].verify == "1") {
                Mystatus = "Available";
                sh = "Approve"
            } else if (Alldata[start].verify == "2") {
                Mystatus = "Disable";
                sh = "Disapprove"
            } else if (Alldata[start].verify == "0") {
                Mystatus = "Panding";
                sh = "Panding"
            }
            else if (Alldata[start].verify == "3") {
                Mystatus = "Return";
                sh ="Return"
            }
       


            display += `
                <tr>
                    <td><img src="/public/img/DATA_IMG/${Alldata[start].Image}" alt="" style="margin: 0 auto; "></td>
                    <td>${Alldata[start].assetName}</td>
                    <td>${Alldata[start].formatted_Start_Date}</td>
                    <td>${Alldata[start].formatted_End_Date}</td>`
            if (sh != "Panding"){
                display += ` <td>${Alldata[start].lender_name}</td>
                <td><div class="${Mystatus}" style="margin: auto;">${sh}</div></td>
              </tr> `;
            } else{
                display += ` <td>-</td>
                <td><div class="${Mystatus}" style="margin: auto;">${sh}</div></td>
              </tr> `;
            }
            tableBody.innerHTML = display;      
                   
        }
        
    } catch (error) {
        console.log(error)
    }

}
getdata(1,"")
document.getElementById("next").addEventListener("click", () => {
    if (currentPage < totalPages) {
        getdata(currentPage + 1,ser.value);
        console.log(currentPage)
    }
});

document.getElementById("Back").addEventListener("click", () => {
    if (currentPage > 1,ser.value) {
        getdata(currentPage - 1);
    }
});
ser.addEventListener("input", () => {
    getdata(1,ser.value)
})



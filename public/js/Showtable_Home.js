
const data = [{
  Picture: 'b1.jpg',
  AssetName: 'item1',
  Start_Date: '3 May 2004',
  Lender: 'Mahama',
  End_Date: '4 May 2004',
  Status: '0',
},
{
  Picture: 'b2.jpg',
  AssetName: 'item2',
  Start_Date: '3 May 2004',
  Lender: 'Mahama',
  End_Date: '4 May 2004',
  Status: '1',
},
{
  Picture: 'b3.jpg',
  AssetName: 'item3',
  Start_Date: '7 May 2004',
  Lender: 'Mahama',
  End_Date: '8 May 2004',
  Status: '1',
},
{
  Picture: 'b4.jpg',
  AssetName: 'item4',
  Start_Date: '8 May 2004',
  Lender: 'Kew',
  End_Date: '9 May 2004',
  Status: '0',
},
{
  Picture: 'b5.jpg',
  AssetName: 'item5',
  Start_Date: '10 May 2004',
  Lender: 'Kew',
  End_Date: '11 May 2004',
  Status: '0',
},
{
  Picture: 'b5.jpg',
  AssetName: 'item5',
  Start_Date: '10 May 2004',
  Lender: 'Kew',
  End_Date: '11 May 2004',
  Status: '0',
},
{
  Picture: 'b5.jpg',
  AssetName: 'item5',
  Start_Date: '10 May 2004',
  Lender: 'Kew',
  End_Date: '11 May 2004',
  Status: '0',
},
{
  Picture: 'b5.jpg',
  AssetName: 'item5',
  Start_Date: '10 May 2004',
  Lender: 'Kew',
  End_Date: '11 May 2004',
  Status: '0',
},
{
  Picture: 'b6.jpg',
  AssetName: 'item6',
  Start_Date: '20 May 2004',
  Lender: 'gon',
  End_Date: '21 May 2004',
  Status: '0',
},]

let currentPage = 1;
const totalPages = Math.ceil(data.length / 7);

function showTable(pageNumber) {
  currentPage = pageNumber;
  const startIndex = (currentPage - 1) * 7;
  const endIndex = Math.min(startIndex + 7, data.length);
  const tableBody = document.getElementById("show_table");

  tableBody.innerHTML = ""; // Clear table content

  for (let start = startIndex; start < endIndex; start++) {
    let Mystatus;
    if (data[start].Status === "0") {
      Mystatus = "Available";
    } else if (data[start].Status === "1") {
      Mystatus = "Disable";
    } else if (data[start].Status === "2") {
      Mystatus = "Panding";
    } 

    tableBody.innerHTML += `
      <tr>
        <td><img src="/public/img/DATA_IMG/${data[start].Picture}" alt="" style="margin: 0 auto; "></td>
        <td>${data[start].AssetName}</td>
        <td>${data[start].Start_Date}</td>
        <td>${data[start].End_Date}</td>
        <td>${data[start].Lender}</td>
        <td><div class="${Mystatus}" style="margin: auto;">${Mystatus}</div></td>
      </tr>
    `;
  }
}

// Show initial data for the first page
showTable(1);

// Button Event Listeners
document.getElementById("next").addEventListener("click", () => {
  if (currentPage < totalPages) {
    showTable(currentPage + 1);
  }
});

document.getElementById("Back").addEventListener("click", () => {
  if (currentPage > 1) {
    showTable(currentPage - 1);
  }
});
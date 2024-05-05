
const boardgame = `
[
{
    "ID": "1",
    "Image": "acer aspire 5.webp",
    "Name": "Acer Aspire 5",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "2",
    "Image": "ipad 1oth gen.jpeg",
    "Name": "iPad (10th generation)",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "3",
    "Image": "ipad air 5.jpeg",
    "Name": "Ipad air 5",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "4",
    "Image": "asus vivobook 15.png",
    "Name": "Asus Vivobook 15",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "5",
    "Image": "lenovo ideapad slim 3.jpeg",
    "Name": "Lenovo IdeaPad Slim 3i",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "6",
    "Image": "lenovo ideapad 3.png",
    "Name": "Lenovo ideapad 3",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "7",
    "Image": "asus v16.webp",
    "Name": "Asus Vivobook 16",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "8",
    "Image": "he.jpg",
    "Name": "HP 15 Laptop",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "9",
    "Image": "asus vivobook 15.png",
    "Name": "ASUS VivoBook 15",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
},
{
    "ID": "10",
    "Image": "dell inspiron 3000 .jpeg",
    "Name": "Dell Inspiron 3000 Series",
    "Start_Date": "Mar 2 2024",
    "End_Date": "Mar 10 2024"
}

]
`
const boradgame = JSON.parse(boardgame)
let currentPage = 1;
const totalPages = Math.ceil(boradgame.length / 7);

function showTable(pageNumber) {
  currentPage = pageNumber;
  const startIndex = (currentPage - 1) * 7;
  const endIndex = Math.min(startIndex + 7, boradgame.length);
  const tableBody = document.getElementById("display");

  tableBody.innerHTML = ""; // Clear table content

  for (let start = startIndex; start < endIndex; start++) {
   

    tableBody.innerHTML += `
      <tr>
        <td>${boradgame[start].ID}</td>
        <td><img src="/public/img/DATA_IMG/${boradgame[start].Image}" alt=""></td>
        <td>${boradgame[start].Name}</td>
        <td>${boradgame[start].Start_Date}</td>
        <td>${boradgame[start].End_Date}</td>
        <td><button class = "A">Approve</button><button class = "D">Disapprove</button></td>
        
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
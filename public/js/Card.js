let page = 1
async function showcard(n) {
  try {
    const response = await fetch("/assetlist")
    if (response.ok) {
      Alldata = await response.json()
      Category = n
      page = n
      let card = ""

      if (Category == 1) {
        card = Alldata.filter(d => d.Category == "book")
      }
      else if (Category == 2) {
        card = Alldata.filter(d => d.Category == "borad game")
      }
      else if (Category == 3) {
        card = Alldata.filter(d => d.Category != "borad game" && d.Category != "book")
      }
      let Mystatus;

      //console.log(Category)
      let Carddata = ""
      card.forEach(element => {
        if (element.Status === 0) {
          Mystatus = "Available";
        } else if (element.Status === 1) {
          Mystatus = "Disable";
        } else if (element.Status === 3) {
          Mystatus = "Panding";
        } else if (element.Status === 2) {
          Mystatus = "Brorrwed";
        }
        Carddata +=
          `
        <div class="card mt-5"">
          <div class="w">
          <img src="/public/img/DATA_IMG/${element.Image}" class="card-img-top">
          </div>
          <div class="card-body d-flex flex-column align-items-center ">
             <h4 class="card-title">${element.assetName}</h4>
             <p class="card-text mt-3"><div class="${Mystatus}">${Mystatus}</div></p>
             `
        if (element.Status == 0) { Carddata += `<button class="btn_card" onclick=Borrowe(${element.ID})>Borrowe</button>` }
        Carddata += `
             
          </div>
        </div>
        `
      });
      document.querySelector("#show_card").innerHTML = Carddata

    }
    else if (response.status == 500) {
      console.log(response.text)
    }
  } catch (err) {
    console.log(err)
  }
}
showcard(1)

const options = {
  backdrop: "static",
  keyboard: false,
};
const myModal = new bootstrap.Modal(
  document.getElementById("modalId"),
  options,
);






async function Borrowe(ID) {
  index = Alldata.findIndex(function (Asset) {
    return ID == Asset.ID
  })
  console.log(index)
  // const Name = document.querySelector('#asset')
  // const newCategory = document.querySelector('#category')
  // const element = document.getElementById("sta");
  const img = document.getElementById("img");
  const id = document.getElementById("assetid");
  const name = document.getElementById("h5");
  const borrowername = document.getElementById("borrowername");
  const nowtime = document.getElementById('startdate');
  const endtime = document.getElementById('enddate');
  const date_ = new Date();
  const sdate = date_.toDateString();
  const tomorrow = new Date(date_.getFullYear(), date_.getMonth(), date_.getDate() + 1);
  const edate = tomorrow.toDateString();
  nowtime.textContent = sdate;
  endtime.textContent = edate

  // newName.value = boradgame[index].name
  // newCategory.value = boradgame[index].category
  // element.style.backgroundColor = "#92FFBE";

  name.innerHTML = `${Alldata[index].Name}`;
  id.innerHTML = `Asset ID : ${Alldata[index].ID}`;
  img.innerHTML = `<img src='/public/img/DATA_IMG/${Alldata[index].Image}'>`
  borrowername.innerHTML = `Adsorn`
  myModal.show()
  document.querySelector('#borrow-btn').onclick = async function () {
    //console.log(JSON.stringify({ "Asset_ID": Alldata[index].ID, "Borrorwer_ID": 1,"Start_Date":date_,"End_Date":tomorrow,"Request_ID":null }))
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "Asset_ID": Alldata[index].ID, "Borrorwer_ID": myid,"Start_Date":date_,"End_Date":tomorrow,"Request_ID":null})
      }
      const response = await fetch('/Borrow', options)
      if (response.status == 200) {
        const data = await response.text()//convert to text
        Swal.fire({
          icon: "success",
          title: "Good choice",
          text: `${data}`,

        });
        getdata(currentPage);
      }
      else if (response.status == 500) {
        const data = await response.text()//convert to text
        //throw Error(data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${data}`,

        });
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "connection error",

        });
      }
    } catch (error) {
      alert(error.message)
    }
    myModal.hide()
    showcard(page)
  }
}

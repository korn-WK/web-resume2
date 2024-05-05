const express = require('express');
const path = require('path');
const session = require('express-session')
const memoryStory = require('memorystore')(session)
const con = require('./config/db')
const upload = require('./public/js/upload');
const bcrypt = require('bcrypt');
const { log, error } = require('console');
const app = express();

//set static folder
app.use("/public", express.static(path.join(__dirname, 'public')));
//allow json exchang
app.use(express.json());
//allow urlencoded data exchange
app.use(express.urlencoded({ extended: true }));

app.use(session({
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    secret: 'todayisgoodday',
    resave: false,
    saveUninitialized: true,
    store: new memoryStory({
        checkPeriod: 24 * 60 * 60 * 1000
    })
}))



//upload
app.post('/upload/add',upload.single('file'),(req, res) => {
    res.json(req.file).status( 200)
    console.log(req.file)
  }); 
app.post('/upload/delete',upload.single('file'),(req, res) => {
    res.json(req.file).status( 200)
    console.log(req.file)
  });
app.post('/add/asset',(req, res) => {
    const name = req.body.name;
    const cetagory = req.body.cetagory;
    const img = req.body.img;
    const sql = "INSERT INTO `asset` (`ID`, `Category`, `assetName`, `Status`, `Image`) VALUES (NULL, ?, ?, '0', ?);"
    con.query(sql,[cetagory,name,img],(err,result)=>{
        if(err){
            res.status(500)
            console.log(err)
        }else{
            res.status(200).send(result)
        }
    })
  });
  



//hashed
app.get('/password/:pass', (req, res) => {
    const raw = req.params.pass;
    bcrypt.hash(raw, 10, function (err, hash) {
        if (err) {
            res.status(500).send('Server error')
        }
        else {
            console.log(hash.length)
            res.send(`${hash}`)
        }
    })
})


//login
app.post('/login', (req, res) => {
    let Email = req.body.Email;
    let raw = req.body.Password;
    const sql = "SELECT ID,Password,role FROM `user` WHERE Email =?;"
    con.query(sql, [Email], function (err, result) {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.length != 1) {
                res.status(401).send('No account. Are you register ? ');
            } else {
                const hash = result[0].Password
                const role = result[0].role
                const ID = result[0].ID
                //console.log(hash)
                bcrypt.compare(raw, hash, (err, same) => {
                    if (err) {

                    } else {
                        if (same) {
                            //res.status(200).send("login ok")
                            // console.log(result[0].ID+'ID')  
                            req.session.userID = result[0].ID
                            req.session.role = result[0].role
                            if (role == 1) {
                                res.status(200).send('/Home')
                            } else if (role == 2) {
                                res.status(200).send('/assetlist/staff')
                            } else if (role == 3) {
                                res.status(200).send('/assetlist/lender')
                            }
                            
                        }
                        else {
                            res.status(401).send('worng password');
                        }
                    }
                })
            }
        }
    })
})
//Register
app.post("/register", (req, res) => {
    let name = req.body.name;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let password = req.body.password;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const sql = "SELECT ID,Password,role FROM `user` WHERE Email =?;"
    con.query(sql, [email], function (err, result) {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.length != 0) {
                res.status(401).send('Email  is already in use!');
            } else {
                const sqlInsert = "INSERT INTO `user` (`ID`, `Name`, `Lastname`, `Email`, `Password`, `role`) VALUES (NULL, ?, ?, ?, ?, '1');"
                con.query(sqlInsert, [name, lastname, email, hashedPassword], function (err) {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        res.status(200).send("susageful")
                    }
                })


            }
        }
    })
})

//get user
app.get('/user', (req, res) => {
    res.json({ "userID": req.session.userID, "role": req.session.role })
})
app.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.error(err.message)
            res.status(500).send("can not clear")
        }else{
            res.redirect('/')
        }
    })
})



//Get file page
app.get('/', (req, res) => {
    res.sendFile(require("path").join(__dirname + "/view/login.html"));
})
app.get('/Dashborad/staff', (req, res) => {
    if (req.session.userID && req.session.role == 2) {
        res.sendFile(require("path").join(__dirname + "/view/staft/STAFFDashboard.html"));
    } else {
        res.redirect('/')
    }
})
app.get('/Dashborad/lender', (req, res) => {
    if (req.session.userID && req.session.role == 3) {
        res.sendFile(require("path").join(__dirname + "/view/Lender/LENDERDashboard.html"));
    } else {
        res.redirect('/')
    }
    
})
app.get('/history/staff', (req, res) => {
    if (req.session.userID && req.session.role == 2) {
        res.sendFile(require("path").join(__dirname + "/view/staft/history.html"));
    } else {
        res.redirect('/')
    }
    
})
app.get('/history/lender', (req, res) => {
    if (req.session.userID && req.session.role == 3) {
        res.sendFile(require("path").join(__dirname + "/view/Lender/history.html"));
    } else {
        res.redirect('/')
    }
   
})
app.get('/return', (req, res) => {
    if (req.session.userID && req.session.role == 2) {
        res.sendFile(require("path").join(__dirname + "/view/staft/return.html"));
    } else {
        res.redirect('/')
    }
    
})
app.get('/request', (req, res) => {
    if (req.session.userID && req.session.role == 3) {
        res.sendFile(require("path").join(__dirname + "/view/Lender/request.html"));
    } else {
        res.redirect('/')
    }
    
})
app.get('/assetlist/staff', (req, res) => {
    if (req.session.userID && req.session.role == 2) {
        res.sendFile(require("path").join(__dirname + "/view/staft/assetlist.html"));
    } else {
        // res.redirect('/')
        res.sendFile(require("path").join(__dirname + "/view/staft/assetlist.html"));
    }
    
})
app.get('/assetlist/lender', (req, res) => {
    if (req.session.userID && req.session.role == 3) {
        res.sendFile(require("path").join(__dirname + "/view/Lender/Lenderassetlist.html"));
    } else {
        res.redirect('/')
    }
    
})
app.get('/Home', (req, res) => {
    if (req.session.userID && req.session.role == 1) {
        res.sendFile(require("path").join(__dirname + "/view/Borrorwer/Home.html"));
    } else {
        res.redirect('/')
    }
    
})

//Edit
app.put('/Editassetlist',(req,res)=>{
    const id = req.body.id
    const assetName = req.body.assetName
    const Category = req.body.Category
    const status = req.body.status
    const sql ="UPDATE `asset` SET `Category` = ?, `assetName` = ?, `Status` = ? WHERE `asset`.`ID` = ?;"
    con.query(sql, [Category,assetName,status,id], (err,result)=>{
        if(err){
            res.status(500).send(err); 
        }
        else{
            console.log("id: "+id+"  status: "+status)
            con.query("UPDATE `asset` SET `Status` = ? WHERE `asset`.`ID` = ?;",[status,id],(err)=>{
                if(err){
                    console.log(err)
                }
            })
            res.send('OK').status(200)
        }
    })
 
})
app.put('/returnasset',(req,res)=>{
    const id = req.body.id
    const Staff_ID = req.body.staffid
    console.log(id+" "+Staff_ID)
    const sql ="UPDATE history SET verify = 3, Staff_ID = ? WHERE history.verify = 1 AND history.Asset_ID=?;"
    con.query(sql, [Staff_ID,id], (err,result)=>{
        if(err){
            res.status(500).send(err); 
        }
        else{
            con.query("UPDATE `asset` SET `Status` = '0' WHERE `asset`.`ID` = ?;", [id]);
            res.send('OK').status(200)
        }
    })
 
})
 

//borrow
app.post('/Borrow', (req, res) => {
    const aseetid = req.body.Asset_ID
    const borrowid = req.body.Borrorwer_ID
    const startdate = req.body.Start_Date
    const enddate = req.body.End_Date
    console.log(aseetid, borrowid, startdate, enddate)
    if (borrowid != undefined) {
        const sql = "INSERT INTO `request` (`Asset_ID`, `Borrorwer_ID`, `Start_Date`, `End_Date`) VALUES (?, ?, ?, ?)"
        con.query(sql, [aseetid, borrowid, startdate, enddate], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Database server error");

            }
            if (results.affectedRows != 1) {
                return res.status(500).send("request faild");
            }
            else {
                res.send("request success");
                con.query("UPDATE `asset` SET `Status` = '3' WHERE `asset`.`ID` = ?;", [aseetid]);
                con.query("INSERT INTO `history` (`History_ID`, `Lender_ID`, `Asset_ID`, `verify`, `Start_date`, `End_date`, `Staff_ID`, `Borrorwer_ID`) VALUES (NULL, NULL, ?, '0', ?, ?, NULL, ?);",[aseetid,startdate, enddate,borrowid])
            }


        })
    }
})
// verify
app.post('/verify', (req, res) => {
    const verify = req.body.verify
    const assetid = req.body.Asset_ID
    const Lenderid = req.body.Lender_ID
    const sdate = req.body.sdate
    const edate = req.body.edate
    const sql = "DELETE FROM request WHERE Asset_ID = ?;";
    // console.log(verify,assetid,Lenderid,sdate,edate)

    con.query(sql, [assetid], (err, results) => {
        if (err) {
            res.status(500).send("Database server error");
        }
        else {
            res.status(200).send("verify success");
            if (verify == 2) {
                con.query("UPDATE `asset` SET `Status` = '0' WHERE `asset`.`ID` = ?;", [assetid]);

            }
            if (verify == 1) {
                con.query("UPDATE `asset` SET `Status` = '2' WHERE `asset`.`ID` = ?;", [assetid]);
            }
            // con.query("INSERT INTO `history` (`Lender_ID`, `Request_ID`, `verify`) VALUES (?, ?, ?);", [Lenderid, reqid, verify])
            con.query("UPDATE `history` SET `Lender_ID` = ?, `verify` = ? WHERE `history`.`Asset_ID` = ? AND `history`.`Start_date` = ?;", [Lenderid, verify,assetid,sdate])
        }

    })

})



//get  from database

app.get('/Assetlist', (req, res) => {
    const sql = "SELECT * FROM `asset`";
    con.query(sql, function (err, results) {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }
        res.json(results);
    })
})

app.get('/getrequest', (req, res) => {
    const sql = "SELECT user.Name, asset.Image, asset.assetName, DATE_FORMAT(request.Start_Date, '%Y-%m-%d') AS formatted_Start_Date, DATE_FORMAT(request.End_Date, '%Y-%m-%d') AS formatted_End_Date, request.Request_ID, asset.ID FROM request INNER JOIN user ON user.ID = request.Borrorwer_ID INNER JOIN asset ON asset.ID = request.Asset_ID;";
    con.query(sql, function (err, results) {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }
        res.json(results);
    })
})
app.get('/gethistor',(req,res)=>{
    const sql = "SELECT asset.Category,history.Borrorwer_ID, history.Lender_ID, history.Staff_ID, history.verify, u1.name AS borrower_name, /* Changed user_name to borrower_name for clarity */ u2.name AS staff_name, u3.name AS lender_name, asset.Image, asset.assetName, DATE_FORMAT(history.Start_Date, '%Y-%m-%d') AS formatted_Start_Date, DATE_FORMAT(history.End_Date, '%Y-%m-%d') AS formatted_End_Date, asset.ID FROM history LEFT JOIN user AS u1 ON u1.ID = history.Borrorwer_ID LEFT JOIN user AS u2 ON u2.ID = history.Staff_ID LEFT JOIN user AS u3 ON u3.ID = history.Lender_ID LEFT JOIN asset ON asset.ID = history.Asset_ID;";
    con.query(sql, function (err, results) {
        if (err) {
            console.error(err);
            return res.status(500).send("Database server error");
        }
        res.json(results);
    })
})




const PORT = 3000;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
}); 
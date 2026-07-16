// ============================
// LOGIN FUNCTION
// ============================

function login(){

    let username =
    document.getElementById("username").value;


    let password =
    document.getElementById("password").value;



    if(username === "admin" && password === "admin"){

        alert("Login Successful");

        window.location.href="dashboard.html";

    }

    else{

        alert("Invalid Username or Password");

    }

}



// ============================
// LOGOUT FUNCTION
// ============================

function logout(){

    window.location.href="login.html";

}



// ============================
// DASHBOARD CHARTS
// ============================


if(document.getElementById("salesChart")){


    const salesChart =
    document.getElementById("salesChart");


    new Chart(salesChart,{

        type:"line",


        data:{


            labels:[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],


            datasets:[{


                label:"Monthly Sales",


                data:[
                    12000,
                    19000,
                    15000,
                    22000,
                    25000,
                    30000
                ],


                borderWidth:3,


                borderColor:"#1d2671"


            }]


        }


    });



}



// ============================
// PIE CHART
// ============================


if(document.getElementById("productChart")){


const productChart =
document.getElementById("productChart");



new Chart(productChart,{


type:"doughnut",


data:{


labels:[

"Electronics",
"Fashion",
"Furniture",
"Food"

],


datasets:[{


data:[

40,
25,
20,
15

],



backgroundColor:[

"#1d2671",
"#c33764",
"#28a745",
"#ffc107"

]


}]


}


});


}
// ==========================
// SEARCH TABLE
// ==========================


function searchTable(){


let input =
document.getElementById("search");


if(!input)
return;



let filter =
input.value.toLowerCase();



let table =
document.getElementById("dataTable");



let rows =
table.getElementsByTagName("tr");



for(let i=1;i<rows.length;i++){


let text =
rows[i].innerText.toLowerCase();



if(text.includes(filter))

{

rows[i].style.display="";

}

else

{

rows[i].style.display="none";

}


}


}



// ==========================
// CSV UPLOAD
// ==========================


let fileInput =
document.getElementById("fileInput");



if(fileInput){



fileInput.addEventListener(
"change",
function(e){


let file =
e.target.files[0];



alert(
file.name+
" uploaded successfully"
);



}

);


}
// ===========================
// ANALYTICS CHART
// ===========================


if(document.getElementById("analyticsChart")){


let chart =
document.getElementById("analyticsChart");



new Chart(chart,{


type:"bar",


data:{


labels:[

"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"

],



datasets:[{


label:"Revenue",


data:[

15000,
22000,
18000,
30000,
27000,
35000

],



backgroundColor:

"#1d2671"



}]


}


});


}
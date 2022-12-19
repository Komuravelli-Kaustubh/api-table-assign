// fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json").then((data)=>{
//     return data.json();
//  })
// .then((objectData)=>{
//      //console.log(objectData[0].Name);
//      let temp=" ";
//      objectData.map((values)=>{
//         temp+=' <tr>'
//         '<td>${values.Name}</td>'
//         '<td>${values.Address}</td>'
//         '<td>${values.Salary}</td>'
//         '<td>${values.DateOfJoining}</td>'
//          '</tr>'
//      })
//          document.getElementById("Employees").innerHTML=temp;
     
//  })

var g = " Employee with salary more than 5,00,000 is: ";
var ng="Employee who joined in december is: ";

fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    .then((data) => {
        
        return data.json(); 
    })
    .then((objectData) => {
        var temp='';
        for (var i = 0; i < 3; i++) {
            console.log(objectData)
            const obj = objectData.Employees[i];
            temp += "<tr><td>" + obj.Name + "</td>";
            temp += "<td>" + obj.Address + "</td>";
            temp += "<td>" + obj.Salary + "</td>";
            temp += "<td>" + obj.DateOfJoining + "</td></tr>";
            document.querySelector("#Employees").innerHTML = temp;

            if(obj.Salary >500000){
                g+=obj.Name;
                document.querySelector('#first').innerHTML=g;
                g+=" ";
                console.log("reached here1");
             }

             if(obj.DateOfJoining[3] =='1' && obj.DateOfJoining[4] =='2'){
                    ng +=obj.Name;
                     document.querySelector('#second').innerHTML=ng;
                     ng+=' , ';
                     console.log("reached here2");
                 }
        }
            
        
    });
const h2=document.querySelector("h2");
const team=document.querySelector(".team");
const student=document.querySelector(".students");


devHeader.map(data=>{
    h2.innerHTML+=`
    <h2>${data.tag}</h2>
   
    `;
});
devs.map(data =>{
    team.innerHTML+=`
    <div class="team-item">
        <img src="${data.img}" alt="nai">
        <h3>Id:${data.id}</h3>
        <p>Name:${data.name}</p>           
         <p>Skill:${data.skill}</p>                
         <p>Income:${data.income}</p>
         <p>Age:${data.age}</p>
        

    </div>  
    
    `;
});

////====student=====

students.map(data =>{
    student.innerHTML+=`
    <div class="student-item">
        <img src="${data.img}" alt="nai">
        <h3>Roll:${data.roll}</h3>
        <p>Name:${data.name}</p>  
        <p>FatherName:${data.father}</p>
        <p>location:${data.location}</p>         
         <p>Age:${data.age}</p>                
         
         
        

    </div>  
    
    `;
});


////====phonebook=====
const phone = document.querySelector(".phone table");
console.log(phone)
phonebook.map((dat,index )=>{
    phone.innerHTML +=`
    <tbody>
    <tr>
    <td>${index + 1}</td>
    <td>${dat.name}</td>
    <td>${dat.number}</td>
    <td>${dat.relation}</td>
    <td><img src="${dat.img}" alt="nai"></td>
   </tr>
   </tbody> 
      
                
              
    
    `;
});



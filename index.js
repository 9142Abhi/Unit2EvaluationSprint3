// Write all the Javascript here

  document.querySelector("form").addEventListener("submit",myFunction);
  
  
  
  let arr=[];
  function myFunction(event){
    event.preventDefault()
    let pName=document.querySelector("#name").value;
    let pCategory=document.querySelector("#category").value;
    let pBrand=document.querySelector("#brand").value;
    let pPrice=document.querySelector("#price").value;
    let delivered=document.querySelector("#deliveredBy").value;
    
    let obj={
      name:pName,
      cat:pCategory,
      brand:pBrand,
      price:pPrice,
      dby:delivered
    }
    arr.push(obj);
    displayTable(arr);
  }
  function displayTable(arr){
    let sum=0;
    let x=document.querySelector("tbody");
    x.innerHTML="";
    arr.forEach(function (elem){
    
        
  let    row=  document.createElement("tr");
  
      let col1=document.createElement("td");
      col1.innerText=elem.name;
      let col2=document.createElement("td");
      col2.innerText=elem.cat;
      let col3=document.createElement("td");
      col3.innerText=elem.brand;
      let col4=document.createElement("td");
      col4.innerText=elem.price;
      let col5=document.createElement("td");
      col5.innerText=elem.dby;
      let col6=document.createElement("td");
      if(elem.price>1000){
        col6.innerText="Expensive";
      }else{
        col6.innerText="Not-Expensive";
      }
      let col7=document.createElement("td");
      col7.innerText="Delete"
      col7.addEventListener("click",deleteRow);
      function deleteRow(event) {
    
    event.target.parentNode.remove();
   }
   
   sum=Number(sum)+Number(elem.price);
  
      row.append(col1,col2,col3,col4,col5,col6,col7);
      document.querySelector("tbody").append(row)
      
    });
    document.querySelector("#create+h1").append(sum);
    
  }



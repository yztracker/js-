const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 
/*
  console.log(factories[0].employees.length);

  for(let i=0;i<factories.length;i++){
    console.log(factories[i].employees.length);
  }
  
factories[0].count=factories[0].employees.length;
delete factories[0].employees;
console.log(factories[0])

*/

//第一題

for(let i=0;i<factories.length;i++){
    factories[i].count=factories[i].employees.length;
delete factories[i].employees;
console.log(factories[i])

}

/*

*/

const factories1 = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ]; 
/* 這樣會變一個陣列裡有多個陣列

var arr=[];

for(let i=0;i<factories1.length;i++){
 arr[i]=factories1[i].employees;
}

console.log(arr);
*/

//先合併多個陣列
const arr4=factories1[0].employees.concat(factories1[1].employees,factories1[2].employees,factories1[3].employees);
console.log(arr4);


//計算

const obj={};

for (var i = 0; i < arr4.length ; i++) {
    if (obj[arr4[i]]) {
       obj[arr4[i]]++;
    }
    else {
       obj[arr4[i]] =1;
    } 
 }
 
 console.log(obj);

//第三題
for(let i=0;i<factories1.length;i++){
    factories1[i].employees.sort();
}

console.log(factories1);



const employeeType = [
    {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
    {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
    {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "23:00:00"},
];

const employees = [
      {id: 1, name: "Alice", type: 2},
      {id: 2, name: "Bob", type: 3},
      {id: 3, name: "John", type: 2},
      {id: 4, name: "Karen", type: 1},
      {id: 5, name: "Miles", type: 3},
      {id: 6, name: "Henry", type: 1}
];

const tasks = [
    {id: 1, title: "task01", duration: 60 },
    {id: 2, title: "task02", duration: 120},
    {id: 3, title: "task03", duration: 180},
    {id: 4, title: "task04", duration: 360},
    {id: 5, title: "task05", duration: 30},
    {id: 6, title: "task06", duration: 220},
    {id: 7, title: "task07", duration: 640},
    {id: 8, title: "task08", duration: 250},
    {id: 9, title: "task09", duration: 119},
    {id: 10, title: "task10", duration: 560},
    {id: 11, title: "task11", duration: 340},
    {id: 12, title: "task12", duration: 45},
    {id: 13, title: "task13", duration: 86},
    {id: 14, title: "task14", duration: 480},
    {id: 15, title: "task15", duration: 900}
];


//第4題

//時間相減
function CompareDate(t1,t2)  
{  
var date = new Date();  
var a = t1.split(":");  
var b = t2.split(":");  



return date.setHours(b[0],b[1],b[2]) - date.setHours(a[0],a[1],a[2]);  
}  
console.log( CompareDate("21:00:00","23:00:00") );  //test funciton

//全部加起來
let sum=0;
for(let i=0;i<employeeType.length;i++){
    sum+= CompareDate(employeeType[i].work_begin,employeeType[i].work_end)
}

console.log(sum/1000/60/60); //00點還不太會處理所以用23點來算


//第五題

function howManyEmployeeByTime(time){

    if(time==2){
        return 10;    
    }
    if(time==1){
        return 4;
    }
    if(time==3){
        return 9;
    }
    
}
console.log(howManyEmployeeByTime(employees[0].type));


//第六題
let Tasksum=0;
for(let i=0;i<tasks.length;i++){
    Tasksum+=tasks[i].duration;
}

let hourneed=(Tasksum/60);

console.log("共需小時="+hourneed+"小時");

//一天產能
let EmployeeSum=0;
for(let i=0;i<employees.length;i++){
   EmployeeSum+= howManyEmployeeByTime(employees[i].type);
}
console.log("每日產能"+EmployeeSum+"小時");

let days=hourneed/EmployeeSum

console.log("需要天數"+days+"天");
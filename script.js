function createTable(data,columns) {
	let rn=prompt("Input number of rows");
	let cn=prompt("Input number of columns");
	let table=document.getElementById("myTable");
	table.innerHTML='';
	//create table rows
	let tbody=document.createElement('tbody');
	table.appendChild(tbody);
for(let i=0;i<=1;i++){
	let row=document.createElement('tr');
	tbody.appendChild(row);
	for(let j=0;j<=1;j++){
		let cell=document.createElement('td');
		cell.textContent=`Row-${i} Column-${j}`;
	    row.appendChild(cell);
	}
}
	
}

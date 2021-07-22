'use strict';






const storePlace = [];



const tableElem = document.getElementById("sales")
console.log(tableElem)
const dailyBuisnessHours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm', '1pm', '2pm','3pm','4pm','5pm','6pm','7pm',];

function Store(minCust, maxCust, avgCookiePerSale, name) {
  console.log('test')
  this.name = name;
  this.minCust = minCust;
  this. maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlySales = [];
  storePlace.push(this)
    

}

Store.prototype.randomCustInArea = function(){
  console.log('test')
return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
}

Store.prototype.calculatesSalesHourly = function(){
  for (let i = 0; i < dailyBuisnessHours.length; i++){
  const thisHoursSale = Math.ceil(this.randomCustInArea() * this.avgCookiePerSale);
  this.hourlySales.push(thisHoursSale);
  
  }
}

Store.prototype.renderStore = function(bodyElem) {
  console.log(this.hourlySales)
  const rowElement = document.createElement('tr');
  bodyElem.appendChild(rowElement);
  const locationThElem = document.createElement('tr')
  locationThElem.textContent = this.name;
  rowElement.appendChild(locationThElem);
  let grandTotal = 0;
  for ( let i = 0; i < this.hourlySales.length; i++) {
    console.log(i)
    const hourlyTotal = this.hourlySales[i]
    const tdElem = document.createElement('td')
    tdElem.textContent = hourlyTotal;
    grandTotal += hourlyTotal;
    rowElement.appendChild(tdElem);
  }

  const grandTotalthElm = document.createElement ('th');
  grandTotalthElm.textContent = grandTotal;
  rowElement.appendChild(grandTotalthElm);

}
new Store(1,5,3, 'Seattle')
new Store(1,5,3, 'Tokyo')
new Store(1,5,3, 'Dubai')
new Store(1,5,3, 'Paris')
new Store(1,5,3, 'Lima')
function makeElement (tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;  


}




function renderAllStores() {
  const bodyElem = makeElement ('body', tableElem, null);
  const rowElement = document.createElement('tr');
  bodyElem.appendChild(rowElement);
  const tdElemSpace = document.createElement('td');
  rowElement.appendChild(tdElemSpace);
  for (let i = 0; i < dailyBuisnessHours.length; i++){
    const tdElem = document.createElement('td');
    tdElem.textContent = dailyBuisnessHours[i];
    rowElement.appendChild(tdElem);
  }
  for (let i = 0; i < storePlace.length; i++) {
    let currentStore = storePlace[i];
    currentStore.calculatesSalesHourly();
    console.log(currentStore)
    currentStore.renderStore(bodyElem);
  } 
  const tdElem = document.createElement('td');
  tdElem.textContent ='Daily Grand Total'
  rowElement.appendChild(tdElem);
}
renderAllStores()



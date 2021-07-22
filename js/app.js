'use strict';






const storePlace = [];



const tableElem = document.getElementById("sales")
const bodyElem = makeElement ('body', tableElem, null);
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
  // console.log(this.hourlySales)
  const rowElement = document.createElement('tr');
  bodyElem.appendChild(rowElement);
  const locationThElem = document.createElement('td')
  locationThElem.textContent = this.name;
  rowElement.appendChild(locationThElem);
  let grandTotal = 0;
  for ( let i = 0; i < this.hourlySales.length; i++) {
    // console.log(i)
    const hourlyTotal = this.hourlySales[i]
    const tdElem = document.createElement('td')
    tdElem.textContent = hourlyTotal;
    grandTotal += hourlyTotal;
    rowElement.appendChild(tdElem);
  }

  const grandTotalthElm = document.createElement ('td');
  grandTotalthElm.textContent = grandTotal;
  rowElement.appendChild(grandTotalthElm);

}

function makeElement (tagName, parent, textContent) {
  let element = document.createElement(tagName);
  if (textContent) {
    element.textContent = textContent;
  }
  parent.appendChild(element);
  return element;  

}

function renderHeader(){
  const headerElem = makeElement('thead', tableElem, null);
  const rowElem = makeElement('tr', headerElem, null);
  makeElement('td', rowElem, null);
  for (let i = 0; i < dailyBuisnessHours.length; i++){
    makeElement('th', rowElem, dailyBuisnessHours[i]);
  }
}


function renderAllStores() {
  
  const rowElement = document.createElement('tr');
  bodyElem.appendChild(rowElement);
  const tdElemSpace = document.createElement('td');
  for(let i = 0; i < storePlace.length; i++)
  rowElement.appendChild(tdElemSpace);
  console.log(storePlace)
  for(let i = 0; i < storePlace.length; i++) {
    let currentStore = storePlace[i];
    currentStore.calculatesSalesHourly();
    currentStore.renderStore(bodyElem);
  }
   
  
}


function renderFooter() {
  const tfootElem = makeElement('tfoot', bodyElem, null);
  const rowElem = makeElement('tr', tfootElem, null); 
  let hourlyTotal = 0;
  let grandTotal = 0;
  console.log(storePlace)
  console.log(dailyBuisnessHours)
  const tdElem = document.createElement('td');
  tdElem.textContent ='Daily Grand Total'
  rowElem.appendChild(tdElem);
  for (let i = 0; i < dailyBuisnessHours.length; i++) {
    for ( let j = 0; j < storePlace.length; j++){
      let storeSalesAtHour = storePlace[j].hourlySales[i];
      hourlyTotal+=storeSalesAtHour;
    }
    makeElement('td', rowElem, hourlyTotal);

    grandTotal+=hourlyTotal;
    hourlyTotal = 0;
  }
  makeElement('td', rowElem, grandTotal);
}

const seattle = new Store (23, 65, 6.3, 'Seattle');
const Tokyo = new Store (3, 24, 1.2, 'Tokyo');
const Dubai = new Store (11, 38, 3.7, 'Dubai');
const Paris = new Store (20, 38, 2.3, 'Paris');
const Lima = new Store (2, 16, 4.6, 'Lima');

// renderFooter();
renderAllStores();
renderFooter();


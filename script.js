const hamburger = document.querySelector('.hamburger');
const headerTopRight = document.querySelector('.header-top-right');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  headerTopRight.classList.toggle('active');
});

// Popup 

// $ = function (id) {
//   return document.getElementById(id);
// };

// var show = function (id) {
//   $(id).style.display = "block";
// };
// var hide = function (id) {
//   $(id).style.display = "none";
// };

const transactions = [   { date: '2023-01-01', amount: 100, type: 'debit' },   { date: '2023-01-02', amount: 50, type: 'credit' },   { date: '2023-01-02', amount: 30, type: 'debit' },   { date: '2023-01-03', amount: 80, type: 'credit' },   { date: '2023-01-03', amount: 20, type: 'debit' },   { date: '2023-01-03', amount: 10, type: 'credit' }, ];
 

function calculateDailyBalance(transactions) {
   
}
 
const dailyBalance = calculateDailyBalance(transactions);
console.log(dailyBalance);
 
/* Output: [   { date: '2023-01-01', balance: -100 },   { date: '2023-01-02', balance: -30 },   { date: '2023-01-03', balance: 60 }, ] */



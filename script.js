'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: 'John Doe',
  movements: [3300, -200, 1340, -3300, -120, 1150, 4200, -460],
  interestRate: 1.5,
  pin: 5555,
};
const account6 = {
  owner: 'Jefferson Duarte Ramos Dos Santos',
  movements: [22200, -2200, 12340, -5300, -120, 4050, 2400, -5460],
  interestRate: 1.2,
  pin: 6666,
};
const account7 = {
  owner: 'Rafaela Moraes Cristino Duarte',
  movements: [2500, -133, 7340, -1300, -620, 6650, 10400, -20460],
  interestRate: 0.7,
  pin: 7777,
};
const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// filter

const depositos = movements.filter(mov => mov > 0);
const retiradas = movements.filter(mov => mov < 0);
console.log(retiradas);
console.log(depositos);

// reduce

const suma = movements.reduce((acc, mov) => acc + mov, 0);
console.log(suma);


// MAP - key value pairs

// const conta = owner.forEach(function (owner) {
//   if (inputLoginUsername === owner) {
//     console.log(owner);
//   } else {
//     console.log('wrong');
//   }
// });

// const loginName = function(username, pin) {
//   const account = accounts.find(function (account) {
//     return account.owner === username;
//   }
//   );
//   if (account.pin === pin) {
//     return account;
//   }
//   return null;
// }

// console.log(loginName);

// const EuroToUSD = 1.2;
// const EuroToGBP = 0.8;
// const EuroToEUR = 1;
// const USDToEUR = 1 / EuroToUSD;
// const USDToGBP = 1 / EuroToGBP;
// const USDToUSD = 1;
// const GBPToUSD = 1 / USDToGBP;
// const GBPToEUR = 1 / EuroToGBP;
// const GBPToGBP = 1;

// const movimentsUSD = movements.map(mov => mov * EuroToGBP);

// console.log(movimentsUSD);

// const movimentsTotal = movements.reduce(function (acc, mov) {
//   return acc + mov;
// });

// console.log(movimentsTotal);

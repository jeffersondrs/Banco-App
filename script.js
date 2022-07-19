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

// const names = accounts.map(function(name, i)
// {
//   return `${name.owner} ${i + 1}`;
// });
// console.log(names);

// const userId = [
//   names[0],
//   names[1],
//   names[2],
//   names[3],
//   names[4],
//   names[5],
//   names[6],
// ];
// console.log(userId);

// const passwords = accounts.map(acc => acc.pin);

// console.log(passwords[4]);

// const checkPassword = function (password) {
//   return passwords.includes(password);
// }

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



const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.innerHTML = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1;
    displayMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount.movements);
    calcDisplaySummary(currentAccount.movements);
    calcDisplaySumOut(currentAccount.movements);
  }
});

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov = 0) => acc + mov, 0);
  labelBalance.innerHTML = `${balance} EUR`;
};


const calcDisplaySummary = function (movements) {
  const incomes = movements.filter(mov => mov > 0).reduce((acc, mov = 0) => acc + mov, 0);
  labelSumIn.innerHTML = `${incomes}€`;
}



const calcDisplaySumOut = function (movements) {
  const incomes = movements.filter(mov => mov < 0).reduce((acc, mov = 0) => acc + mov, 0);
  labelSumOut.textContent = `${incomes}€`;
}


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

function horario() {
  var data = new Date();
  var horas = data.getHours();
  var minutos = data.getMinutes();
  var segundos = data.getSeconds();
  var relogio = document.querySelector('#relogio');

  if (minutos < 10) {
    minutos = '0' + minutos;
  }

  if (segundos < 10) {
    segundos = '0' + segundos;
  }

  relogio.innerHTML = horas + ':' + minutos + ':' + segundos;
};
setInterval(horario, 1000);
horario();

const color = [
  {color: '#FFA500'},
  {color: '#0000FF'},
  {color: '#4B0082'},
  {color: '#9400D3'},
  {color: '#FF00FF'},
  {color: '#FFA500'},
  {color: '#055000'},
  {color: '#0444FF'},
  {color: '#eee082'},
  {color: '#FF0555'},
  {color: '#FF786F'},
];
function bodyColor(){
  const randomColor = Math.floor(Math.random() * color.length);
document.body.style.backgroundColor = color[randomColor].color;
console.log(randomColor);
}
setInterval(bodyColor, 60000);
/////////////////////////////////////////////////
// filter

// const depositosFunction = movements.filter(function (mov) {
//   return mov > 0;
// });
// const depositos = movements.filter(mov => mov > 0);
// console.log(depositos);

// const retiradasfunction = movements.filter(function (mov) {
//   return mov < 0;
// });
// const retiradas = movements.filter(mov => mov < 0);
// console.log(retiradasfunction);

// // reduce
// const sumaFunction = movements.reduce(function (acc, mov) {
//   return acc + mov;
// }, 0);
// console.log(sumaFunction);
// // arrow function
// const suma = movements.reduce((acc, mov) => acc + mov, 0);
// console.log(suma);


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
//   if (account.pin === pin && account !== undefined) {
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

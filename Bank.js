// // Constants and DOM Elements
const hello = document.getElementById('hello');
const totalMoneyElement = document.getElementById('totalmoney');

// User Authentication
const userName = localStorage.getItem('UserName');
if (!userName) {
    location.href = 'index.html';
} else {
    hello.innerHTML = `ברוך הבא, ${userName}`;
}

// Money Management
let amount = 0;

// Load initial money from storage
function initializeMoney() {
    const storedMoney = localStorage.getItem('money');
    if (storedMoney) {
        amount = parseInt(storedMoney);
        updateMoneyDisplay();
    }
}

// Update money display and storage
function updateMoneyDisplay() {
    totalMoneyElement.innerHTML = formatMoney(amount);
    localStorage.setItem('money', amount);
}

// Format money for display
function formatMoney(value) {
    return value.toLocaleString('he-IL', { style: 'currency', currency: 'ILS' });
}

// Bank Operations
const bankOperations = {
    take: (num) => {
        if (isValidOperation(num)) {
            amount -= num;
            updateMoneyDisplay();
        }
    },

    add: (num) => {
        if (isValidOperation(num)) {
            amount += num;
            updateMoneyDisplay();
        }
    },

    multiply: (num) => {
        if (isValidOperation(num)) {
            amount *= num;
            updateMoneyDisplay();
        }
    },

    divide: (num) => {
        if (isValidOperation(num) && num !== 0) {
            amount /= num;
            updateMoneyDisplay();
        } else if (num === 0) {
            alert('לא ניתן לחלק באפס!');
        }
    }
};

// Validation helper
function isValidOperation(num) {
    if (isNaN(num)) {
        alert('נא להזין מספר תקין');
        return false;
    }
    return true;
}

// Initialize the application
initializeMoney();

// Export functions for global use
window.take = bankOperations.take;
window.add = bankOperations.add;
window.multiply = bankOperations.multiply;
window.divide = bankOperations.divide;

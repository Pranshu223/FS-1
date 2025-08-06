// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const balanceDisplay = document.getElementById('balance-display');
    const depositBtn = document.getElementById('deposit-btn');
    const withdrawalBtn = document.getElementById('withdrawal-btn');
    const depositAmountInput = document.getElementById('deposit-amount');
    const withdrawalAmountInput = document.getElementById('withdrawal-amount');
    const errorMessage = document.getElementById('error-message');

    // Initial balance
    let currentBalance = 100.00;

    // Function to format and update the balance display
    function updateBalanceDisplay() {
        balanceDisplay.textContent = `$${currentBalance.toFixed(2)}`;
        errorMessage.textContent = ''; // Clear any previous error messages
    }

    // --- Event Listener for Deposit Button ---
    depositBtn.addEventListener('click', () => {
        const amount = parseFloat(depositAmountInput.value);

        // Input validation
        if (isNaN(amount) || amount <= 0) {
            errorMessage.textContent = 'Please enter a valid positive amount to deposit.';
            return;
        }

        currentBalance += amount;
        updateBalanceDisplay();
        depositAmountInput.value = ''; // Clear the input field
    });

    // --- Event Listener for Withdrawal Button ---
    withdrawalBtn.addEventListener('click', () => {
        const amount = parseFloat(withdrawalAmountInput.value);

        // Input validation
        if (isNaN(amount) || amount <= 0) {
            errorMessage.textContent = 'Please enter a valid positive amount to withdraw.';
            return;
        }

        // Check for sufficient funds
        if (amount > currentBalance) {
            errorMessage.textContent = 'Insufficient funds for this withdrawal.';
            return;
        }

        currentBalance -= amount;
        updateBalanceDisplay();
        withdrawalAmountInput.value = ''; // Clear the input field
    });

    // Initial display update on page load
    updateBalanceDisplay();
});
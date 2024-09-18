document.getElementById('check-btn').

addEventListener('click', function() {
    const input = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    if (!input) {
        alert('Please input a value');
        return;
    }

    const clean = input
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    const isPalindrome = clean === clean.split('').reverse().join('');

    if (isPalindrome) {
        result.textContent = `${input} is a palindrome`;
    } 
    
    else {
        result.textContent = `${input} is not a palindrome`;
    }
});

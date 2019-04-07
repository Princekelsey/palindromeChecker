// selecting the dom element and naming variables

const runBtn = document.querySelector('.submit');
const result = document.querySelector('.result');
const refreshBtn = document.querySelector('.btn-new');


// isPalindrome function
const isPalindrome = word => {
    // replace all non-words characters
    let remove = /[^A-Za-z0-9]/g;
    // make all characters lower cased and replace all non-words characters
    word = word.toLowerCase().replace(remove, '');
    let wordLength = Math.floor(word.length / 2);
    for (let i = 0; i < wordLength; i++) {
        // check if the characters from each part match
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
};


// Add click event to the run test button
runBtn.addEventListener('click',  () => {
    // get the input value from the user
    const inputData = document.querySelector('.inputText').value;

    // check if there is an input value
    if(inputData){
        isPalindrome(inputData);
        // check if the input value is a palindrome
        if (isPalindrome(inputData) === true){
            result.textContent = 'A PALINDROME (TRUE)';
            result.classList.add('winner');
            result.classList.remove('lose');
        } else {
            result.textContent = 'NOT A PALINDROME (FALSE)';
            result.classList.add('lose');
            result.classList.remove('winner');
        }
    }else{
        alert('input a word to test')
    }

});

// event to the new test button
refreshBtn.addEventListener('click', () => {
    result.textContent = ' ';
    result.classList.remove('lose');
    result.classList.remove('winner');
    window.location.reload(false);
});





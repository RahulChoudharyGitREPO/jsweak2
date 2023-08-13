function hasUniqueCharacters(username) {
    const charSet = new Set();

    for (const char of username) {
        if (charSet.has(char)) {
            return false; // Character is already in the set, not unique
        }
        charSet.add(char);
    }

    return true; // All characters are unique
}

// Example usage
const username1 = "Mithiun"; // Contains duplicate 'o'
const username2 = "Anurag";  // All characters are unique

console.log(`${username1} has unique characters: ${hasUniqueCharacters(username1)}`);
console.log(`${username2} has unique characters: ${hasUniqueCharacters(username2)}`);

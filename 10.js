function countWordOccurrences(sentence) {
    const words = sentence.toLowerCase().split(/\s+/);
    const wordMap = new Map();

    for (const word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        } else {
            wordMap.set(word, 1);
        }
    }

    return wordMap;
}

// Example usage
const inputSentence = "Please Please submit your assignemnt in time it is important  .";
const occurrences = countWordOccurrences(inputSentence);

occurrences.forEach((count, word) => {
    console.log(`Word: '${word}', Occurrences: ${count}`);
});

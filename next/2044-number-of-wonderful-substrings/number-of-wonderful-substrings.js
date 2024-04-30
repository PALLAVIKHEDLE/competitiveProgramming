/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
  let count = 0, n = word.length; 
    const freq = new Array(1024).fill(0); // Array to store frequencies of characters using their bit representation.

    freq[0] = 1; // Initialize with an empty substring, where all characters occur even number of times.

    let bitmask = 0; // Bitmask to represent frequency of characters.

    // Iterate over all characters in the input string.
    for (let i = 0; i < n; i++) {
        const charIndex = word.charCodeAt(i) - 'a'.charCodeAt(); // Get the index of the current character.
        bitmask ^= 1 << charIndex; // Toggle the bit for the current character.

        // Increase count for wonderful substrings by adding the count of substrings that can be formed by excluding or including the current character.
        count += freq[bitmask];

        // Update frequencies array by checking all possible combinations of toggling bits.
        for (let j = 0; j < 10; j++) { // We iterate up to 10 because we only have lowercase letters, which is 26, and log2(26) is approximately 10.
            const newBitmask = bitmask ^ (1 << j); // Toggle the j-th bit.
            count += freq[newBitmask]; // Add the count for the new bitmask.
        }

        freq[bitmask]++; // Increment the frequency count for the current bitmask.
    }

    return count; // Return the total count of wonderful substrings.
};
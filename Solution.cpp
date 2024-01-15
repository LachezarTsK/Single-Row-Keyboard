
#include <string>
#include <algorithm>
using namespace std;

class Solution {
    
    static const int ALPHABET_SIZE = 26;

public:
    int calculateTime(const string& keyboard, const string& word) const {
        array<int, ALPHABET_SIZE> charToKeyboardIndex{};
        for (int i = 0; i < keyboard.length(); ++i) {
            charToKeyboardIndex[keyboard[i] - 'a'] = i;
        }

        int previous = word[0] - 'a';
        int timeToType = charToKeyboardIndex[previous];

        for (const auto& letter : word) {
            int current = letter - 'a';
            timeToType += abs(charToKeyboardIndex[current] - charToKeyboardIndex[previous]);
            previous = current;
        }

        return timeToType;
    }
};

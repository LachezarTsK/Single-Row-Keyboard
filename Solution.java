
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int calculateTime(String keyboard, String word) {
        int[] charToKeyboardIndex = new int[ALPHABET_SIZE];
        for (int i = 0; i < keyboard.length(); ++i) {
            charToKeyboardIndex[keyboard.charAt(i) - 'a'] = i;
        }

        int previous = word.charAt(0) - 'a';
        int timeToType = charToKeyboardIndex[previous];

        for (char letter : word.toCharArray()) {
            int current = letter - 'a';
            timeToType += Math.abs(charToKeyboardIndex[current] - charToKeyboardIndex[previous]);
            previous = current;
        }

        return timeToType;
    }
}

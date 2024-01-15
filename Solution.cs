
using System;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;
    public int CalculateTime(string keyboard, string word)
    {
        int[] charToKeyboardIndex = new int[ALPHABET_SIZE];
        for (int i = 0; i < keyboard.Length; ++i)
        {
            charToKeyboardIndex[keyboard[i] - 'a'] = i;
        }

        int previous = word[0] - 'a';
        int timeToType = charToKeyboardIndex[previous];

        foreach (char letter in word)
        {
            int current = letter - 'a';
            timeToType += Math.Abs(charToKeyboardIndex[current] - charToKeyboardIndex[previous]);
            previous = current;
        }

        return timeToType;
    }
}

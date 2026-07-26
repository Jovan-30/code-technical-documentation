def is_plaindrome(word: str) -> bool:
    '''Identifies a palindrome '''
    
    # check if word is a string or not
    if not isinstance(word, str):
        print("\nEnter a string")
        return False

    currentWord = word.strip().replace(" ", "").upper() # remove any whitespace trailing and leading, and in between
    reverseWord = currentWord[::-1] # word backwards read

    if currentWord == reverseWord:
        print(f"\nSuccess - {currentWord} {reverseWord} - Word Matches")
        return True
    else:
        print(f"\nError - {currentWord} {reverseWord} - Word does not match")
        return False


print(is_plaindrome('Hannah'))
print(is_plaindrome("go hang a salami Im a lasagna hog"))
print(is_plaindrome(3))
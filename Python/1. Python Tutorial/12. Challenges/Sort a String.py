# Return a string of words alphabetically as a string
def sort_string(phrase: str) -> str:
    words = sorted(phrase.split())
    # sortedAlpha = sorted(words)
    
    finalString = ''
    for word in words:
        finalString = finalString + word + " "
        
    return finalString
    

print(sort_string('hi my name is Aj'))
print(sort_string('cardsboard bannana APPLE orange'))
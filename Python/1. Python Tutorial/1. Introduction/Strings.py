# Double Quote
string = "string" # string literal with double quotes

# Single Quote
string2 = 'string' # string literal with single quotes

# String for multiple lines
# Use \ to ignore the initial new line or end line
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to\
""")

# String Concatenation
concat = 'String' + ' Concat' + "enation"
print(concat)

varConcat = concat + " String" # variable and literal concatenate
print(varConcat)

nearbyConcat = 'Py'  "thon" # must be two literals not expressions
print(nearbyConcat)

text = ('Put several strings within parentheses '
        'to have them joined together'
        'and look good on one line.')  # must be two literals not expressions
print(text) # Good for breaking longer strings on same line

# String repetition
print('Repetition ' * 3)
print(3 * 'Repetition ')

# String Indexing/Slicing 
word = 'Python'

print(word[0]) # Prints P
print(word[5]) # Prints n
print(word[-0]) # Prints P
print(word[-1]) # Prints n
print(word[-6]) # Prints P
# print(word[6]) # Out of range error

print(word[0:2])  # characters from position 0 (included) to 2 (excluded) # print Py
print(word[2:5])  # characters from position 2 (included) to 5 (excluded) # print tho

# ['included - start', 'excluded - end'], negative dont reverse order, just for getting position
word[:2]   # character from the beginning to position 2 (excluded) 'Py'
word[4:]   # characters from position 4 (included) to the end'on'
print(word[-2:])  # characters from the second-last (included) to the end 'on'
print(word[1:-2])  # characters from the beginning fourth-last (exlcuded) to the end 'yth'
word[2:42] # IndexError: string index out of range

alwaysEquals = word[:2] + word[2:]
alwaysEquals2 = word[:4] + word[4:]
print(alwaysEquals + " " + alwaysEquals2)

# Can Create New Strings
print("J" + word[-2] + 'va' + word[5:])

# Strings are immutable
a = 'yes'
# a[0] = 'n' -- can not do


# String Length
print(len(word)) # 6
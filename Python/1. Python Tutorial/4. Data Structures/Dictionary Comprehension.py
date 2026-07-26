# Provides a concice way to make dicitonaries

# Expression followed by for clause then zero or more for or if clauses
# [key: value expression - for clause - 0 or more/for if clauses ]
# key: value expression is adding to the dictionary
square_dict = dict()
for num in range(1, 11):
    square_dict[num] = num*num
print(square_dict)

sqauredDictComp = {number: number ** 2 for number in range(1, 11)}
print(sqauredDictComp)
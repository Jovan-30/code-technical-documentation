# Dictonaries are indexed by keys, sequences indexed by range of numbers
# Keys can be any immutable type
# Key: Value Pair

emptyDict = {} # creates an empty dict

telephoneDict = {'jack': 604, 'bob': 778, 'rob': 898}
telephoneDict['james'] = 663 # adds an element to the dict
del telephoneDict['jack'] # deletes from dictionary

print(telephoneDict['james'])
print(telephoneDict)


# Check Membership
print('rob' in telephoneDict) # True
print('jack' not in telephoneDict) # True


# The dict() constructor builds dictionaries directly from sequences of key-value pairs:
dict([('sape', 4139), ('guido', 4127), ('jack', 4098)])
# {'sape': 4139, 'guido': 4127, 'jack': 4098}

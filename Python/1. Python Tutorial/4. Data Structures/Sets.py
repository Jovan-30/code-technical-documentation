# Unordered collection with no duplicate elements

basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)  # show that duplicates have been removed

x = set() # create an empty set - x = {} creates a dict

print('orange' in basket) # Fast membership

# Create using curcly braces
setA = {1, 42, 1, 5, 6}
print(setA)

# Convert any sequence to a set
listA = [1, 42, 1, 5, 6, 72, 6]
setB = set(listA)
print(setB)


# Membership Check
a = set('abracadabra')
b = set('alacazam')

print(a - b) # letters in a but not b
print(a | b) # letters in a or b or both
print(a & b) # letters in a and b
print(a ^ b) # letters in a or b but not both


# Add element to set
setAddRemoved = {1, 3, 1, 4}
setAddRemoved.add(6)
print(setAddRemoved)

# Removed an element from the list
setAddRemoved.remove(1)
print(setAddRemoved)
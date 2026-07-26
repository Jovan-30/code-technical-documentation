# Looping thorugh dictionaries
knights = {'gallahad': 'the pure', 'robin': 'the brave'}
for k, v in knights.items():
    print(k, v)


# Looping thorugh sequnce to grab index and value
myList = 1, 'string', 343
myTuple = 1, 34, 'string'

for index, list in enumerate(myList):
    print(str(index) + ": " + str(list))

for index, tuple in enumerate(myTuple):
    print(str(index) + ": " + str(tuple))

for index, num in enumerate(range(1, 11)):
    print(str(index) + ": " + str(num))


# To loop over two or more sequences at the same time, the zip() function.
for list, tuple in zip(myList, myTuple):
    print(str(list) + ": " + str(tuple))


# To loop over reversed sequence
for i in reversed(range(1, 11)):
    print("Reversed", i)


# To loop over a sequence in sorted order, use the sorted() 
for i in sorted(['cat', 'alligator', 'bat', 'cat']):
    print("Sorted", i)


# Eliminate duplicate values
r = ['cat', 'alligator', 'bat', 'cat']
for i in set(r):
    print("Elimnate", i)


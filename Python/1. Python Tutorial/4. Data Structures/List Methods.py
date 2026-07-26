fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']

# Add an item to the end of the list.
fruits.append("pear")
print(fruits)

# Extend the list by appending all the items from the iterable
list2 = ['plum', 'candy']
fruits.extend(list2)
print(fruits)

# Insert an item at a given position. 
fruits.insert(3, 'grape')
print(fruits)

# Remove the first item from the list whose value is equal to the param.
fruits.remove('kiwi')
print(fruits)

# Retunrs the index
index1 = fruits.index('banana')
index2 = fruits.index('banana', 5)  # Find next banana starting at position 4
print(index1, index2)

# Returns the number of times an element appears
count1 = fruits.count('banana')
print(count1)

# Removes last item in list or remove the item at the given position in the list, and return it.
fruits.pop()
print(fruits)

x = fruits.pop(2)
print(x)

# Reverse elements on the list
fruits.reverse()
print(fruits)

# Sort the list
fruits.sort(reverse=False)
print(fruits)
sorted(fruits, reverse=True)
print(fruits)

# Remove all items from the list
fruits.clear()
print("Clared", fruits)

# Shallow copy of list
oldList = [1, 2, 3, 4]
print(id(oldList))

newlist = oldList.copy()
newlist2 = oldList[:]

print(id(oldList))
print(id(newlist))
print(id(newlist2))
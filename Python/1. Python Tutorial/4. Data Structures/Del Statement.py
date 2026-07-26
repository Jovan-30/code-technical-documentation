# Remove an item from a list given its index instead of its value (unlike list.remove method)
# Does not return anything
# This differs from the pop(3) method which returns a value
# Can be used on variables, lists, tuples, etc

a = [-1, 1, 66.25, 333, 333, 1234.5]

del a[2]
print(a)

del a[2:-1]
print(a)

del a[:]
print(a) # [] returns empty list

del a 
# print(a) Returns error a does not exist


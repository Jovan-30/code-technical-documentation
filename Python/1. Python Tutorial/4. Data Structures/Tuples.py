# A tuple consists of a number of values separated by commas, for instance:

# Tuples are not mutable
# t[0] = 88888 - Can't do that


myTuple = 123, 12, 45, 'hello'
print(myTuple)

nestedTuple = 345, [45, 53, 'hello'], ('no', 67, True), 45
print(nestedTuple)


# Empty Tuples - 0 items
emptyTuples = ()
print(emptyTuples)

# 1 Value Tuple
singleTuple = 'hello',
singleTuple2 = (2,)
print(singleTuple, singleTuple2)
print(len(singleTuple), len(singleTuple2))
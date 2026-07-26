# In this example, MyIterator is a class that implements the __iter__() and __next__() 
# methods to define an iterator that returns the numbers from start to end (exclusive). 
# The for loop can be used to iterate over the MyIterator object and print the numbers.

# Iterable cause we can use for loop
# Iterator cause it has __next_-
class MyRange:
    def __init__(self, start, end) -> None:
        self.current = start
        self.end = end

    # Method __iter__ returns an iterator. 
    # The iterator uses the next method to determine the next value on the iteration. 
    # If I were to remove the next method from the class below, the code would fail.
    def __iter__(self):
        return self

    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        else:
            current = self.current
            self.current += 1
            return current

myRange = MyRange(1, 10)

# for range in myRange:
#     print(range)

print(next(myRange)) # prints first value
print(next(myRange)) # prints second value
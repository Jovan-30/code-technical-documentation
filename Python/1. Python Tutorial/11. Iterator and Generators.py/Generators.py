# A generator in Python is a type of iterable that generates values one at a time,
# rather than returning all of its values at once as a list or other sequence. 
# Generators are created using a special type of function called a generator function, 
# which uses the yield statement instead of return to return values one at a time.

# Create easy to read iterators that yield a value
# Keeps state untill run again and yields a next value
# iter and next methods are created automatically

def my_range(start, end):
    current = start

    while current < end:
        yield current
        current += 1

nums = my_range(1, 10)

# for range in nums:
#     print(range)

print(next(nums)) # prints first value
print(next(nums)) # prints second value
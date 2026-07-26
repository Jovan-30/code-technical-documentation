# In Python, iterables are objects that can be iterated over, or stepped through
# one item at a time. Examples of iterables include lists, tuples, dictionaries, 
# and strings. You can use a for loop to iterate over an iterable and perform some
# action on each item in the iterable.

# __iter__ means it is iterable and can be looped over

nums = [1, 2, 4] # iterable but not a iterator
# print(dir(nums)) # has __iter__, why a list is iterable 
# print(next(nums)) # no __next__ in list, not an iterator
for num in nums: # calling iter on object and calling iterator so we can loop over
    print(num)

i_nums = nums.__iter__()
print(i_nums) # a list iterator
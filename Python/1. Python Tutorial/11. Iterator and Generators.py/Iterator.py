# Object with a state that knows where it is during interation and knows how to get next value
# Gets next value with a dunder __next__ method, 
# Iterators can onlt go forward with calling __next__
# Every iterator is iterable

# No __next__ in a list, thus not an interator

nums = [1, 2, 4] # iterable but not a iterator
# print(dir(nums)) # has __iter__, why a list is iterable 
# print(next(nums)) # no __next__ in list, not an iterator
for num in nums: # calling iter on object and calling iterator so we can loop over
    print(num)

i_nums = nums.__iter__() # now an iterator # has __iter() again and __next__
print(next(i_nums)) # prints next value, thus 1
print(next(i_nums)) # prints next value, thus 2
print(next(i_nums)) # prints next value, thus 3
# print(next(i_nums)) # prints next value, thus error StopIteration Exvception

# Can try printing iteration with loop
my_nums = [1, 2, 3]
my_nums = my_nums.__iter__()
while True:
    try:
        item = next(my_nums)
        print(item)
    except StopIteration:
        break
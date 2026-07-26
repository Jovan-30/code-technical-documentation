# Example 1
def reverse_my_range(start, end):
    while end >= start:
        yield end
        end -= 1

# nums = reverse_my_range(1, 10)
# for range in nums:
#     print(range)


# Example 2
def reverse_string(string):
    index = -1

    while abs(index) <= len(string):
        yield string[index]
        index -= 1

string1 = reverse_string('Jovan bob adka')

for i in string1:
    print(i)
# Formatted String Literals
# Formatted string literals (also called f-strings for short) -- 
# -- let you include the value of Python expressions inside a string --
# -- by prefixing the string with f or F and writing expressions as {expression}

year = 2020
times = 4 * 8
print(F'This is the {year} of times in {times}')
print(f'This is the {times} of year: {year}')

from math import pi as pie
print(f"The value of pi is {pie:.3f}")


# Passing an integer after the ':' will cause that field to be a minimum number of characters wide. This is useful for making columns line up.
table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
for name, phone in table.items():
    print(f'{name:10} ==> {phone:10d}')
# Sjoerd     ==>       4127
# Jack       ==>       4098
# Dcab       ==>       7678


# Convert value before it is formatted
# !s applies to strings str()
# !r applies to representation repr()
num = 42
print(F'my number is a {num!s}')
print(f'My number is {num!r}')


# Good for printing variable name and expression
# Good for debugging
bugs = 'roaches'
count = 13
area = 'living room'
print(f'Debugging {bugs=} {count=} {area=}')
# Debugging bugs='roaches' count=13 area='living room'



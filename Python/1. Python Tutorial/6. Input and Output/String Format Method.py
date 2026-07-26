# Basic usage
print("We are the {} who say {}".format('kngihts', 'NI'))


# Can use numbers for positioning as well
print("I eat {0} and {1}".format('ham', 'eggs'))
print("I eat {1} and {0}".format('ham', 'eggs'))


# Can use keyword arguments
print("This {food} is {type}".format(food="burger", type="good"))


# Can cobined keyword and positioning
print('The story of {0}, {1}, and {other}.'.format('Bill', 'Manfred', other='Georg'))

table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 8637678}
print('Jack: {Jack:d}; Sjoerd: {Sjoerd:d}; Dcab: {Dcab:d}'.format(**table))
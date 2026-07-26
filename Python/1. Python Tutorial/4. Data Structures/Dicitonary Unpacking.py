# Unpack the values of the dictionary
# The key msut match the parameters

def func(x, y, z):
    print(str(x) +str(y) + str(z))

d = {'x': 'a', 'y': 'b', 'z': 33}

func(**d)
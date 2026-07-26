import sys

try:
    print("hello my name is", sys.argv[1]) # sys.argv[0] is the name of the program
except IndexError:
    print("Too few arguments")
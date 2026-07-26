def fib(n):    # write Fibonacci series up to n
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()


# Makes the module usable as a script
# The code that parses the command line only runs --
# -- if the module is executed as the main file
if __name__ == "__main__":
    import sys
    fib(int(sys.argv[1]))

# If the module is imported, the code is not run:
import fibo
# Python has a way to put definitions in a file and use them in a script or in an interactive instance of the interpreter
# A module is a file containing Python definitions and statement
# Python code that may be used by othe rmodules or scripts

import fibo # must import the module

fibo.fib(1000) # using the module name, you can use its functions
fibo.fib2(100) # using the module name, you can use its fucntions

print(fibo.__name__) # the module namespace as a string
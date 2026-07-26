# There is a variant of the import statement that imports names from a module directly into the importing module’s namespace
from fibo import fib, fib2
print(fib(500))

# There is even a variant to import all names that a module defines:
from fibo import *
print(fib2(500))

# If the module name is followed by as, then the name following as is bound directly to the imported module.
import fibo as fib
print(fib.fib2(500))

from fibo import fib as fibanacco, fib2 as fibanacco2
print(fibanacco(500), fibanacco2(2300))
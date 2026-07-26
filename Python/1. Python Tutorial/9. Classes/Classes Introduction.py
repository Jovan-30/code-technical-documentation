
# A class is a blueprint which you use to create objects. An object is an instance of a class - 
# it's a concrete 'thing' that you made using a specific class. So, 'object' and 'instance' are 
# the same thing, but the word 'instance' indicates the relationship of an object to its class.

# Creating a new class creates a new type of object, allowing new instances of that type to be made. 
# Each class instance can have attributes attached to it for maintaining its state. 
# Class instances can also have methods (defined by its class) for modifying its state.



class Employee: # blueprint for creating objects, each unique object is an instance of class
    pass

emp_1 = Employee() # unique instance of the employee class
emp_2 = Employee() # unique instance of the employee class

print(emp_1) # both unique and have different locations in memory
print(emp_2) # both unique and have different locations in memory
# <__main__.Employee object at 0x0000021F2D0C6140>
# <__main__.Employee object at 0x0000021F2D0C6110>
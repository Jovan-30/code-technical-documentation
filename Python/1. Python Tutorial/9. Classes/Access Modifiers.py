# Public, Protected and Private

# In Python, access modifiers are used to control the visibility and accessibility of \
# class members. There are three types of access modifiers in Python:

# 1. Public: Members marked as public can be accessed from anywhere in the code.
# By default, all members in Python are public.

# 2. Private: Members marked as private can only be accessed within the class. 
# Private members are denoted by a double underscore prefix, such as __private_member.
# Made so attribuites can not be modifired or manipulated

# 3. Protected: Members marked as protected can only be accessed within the class 
# and its subclasses. Protected members are denoted by a single underscore prefix, 
# such as _protected_member.

# Example 1 - All the instance variables are public
class Employee:
    def __init__(self, id: int, name: str, email, salary: int) -> None:
        self.id = id
        self.name = name
        self.email = email
        self.salary = salary

    def getSalary(self):
        return self.salary
    
emp_1 = Employee(1, 'Bob', 'Bobemail@.com', 45000)
print(emp_1.salary)
print(emp_1.getSalary())

# Example 2 - Salary is private attribute can not be accessed outside of class
class Employee:
    def __init__(self, id: int, name: str, email, salary: int) -> None:
        self.id = id
        self.name = name
        self.email = email
        self.__salary = salary

    # A private method
    def __privateMethod():
        return 'private method'

    def getSalary(self):
        return self.__salary
    
emp_1 = Employee(1, 'Bob', 'Bobemail@.com', 45000)
# print(emp_1.__salary) # error: attribute error not attribute __salary
print(emp_1.getSalary())
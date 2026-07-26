# The problem
# Default parameter values are evaluated from left to right when the function definition is executed. 
# This means that the expression is evaluated once, when the function is defined, and that the same 
# “pre-computed” value is used for each call.

# This means that when we call a function, the default values we provide for parameters are only 
# created once, and used for each subsequent call of the function.

# The solution
# If we want an empty list as a potential default argument value, we can use None as a special value 
# to indicate we did not receive anything. After we check whether an argument was provided, we can 
# instantiate a new list if it wasn’t.

# Example 1 - The Error
# Storing an empty list as a default argument
def createStudent(name, age, grades=[]):
    return {
        'name': name,
        'age': age,
        'grades': grades
    }

def addGrades(student, grade):
    student['grades'].append(grade)

    print(student['grades'])

student1 = ['Joe', 45]
student2 = ['Rob', 27]

s1 = createStudent(*student1)
s2 = createStudent(*student2)

addGrades(s1, 80)
addGrades(s2, 70)
# The output
# [80]
# [80, 70]


# Error 2 - Storing an empty list as a default argument
def update_order(new_item, current_order=[]):
  current_order.append(new_item)
  return current_order
 
# First order, burger
order1 = update_order({'item': 'burger', 'cost': '3.50'})
 
# Second order, just a soda
order2 = update_order({'item': 'soda', 'cost': '1.50'})
 
# What's in that second order again?
print(order2)
# Output
# [{'item': 'burger', 'cost': '3.50'}, {'item': 'soda', 'cost': '1.50'}]


# Example 3 - The Solution
def createStudent(name, age, grades=None):
    if grades is None:
        grades = []

    return {
        'name': name,
        'age': age,
        'grades': grades
    }

def addGrades(student, grade):
    student['grades'].append(grade)

    print(student['grades'])

student1 = ['Joe', 45]
student2 = ['Rob', 27]

s1 = createStudent(*student1)
s2 = createStudent(*student2)

addGrades(s1, 80)
addGrades(s2, 70)
# The output
# [80]
# [70]
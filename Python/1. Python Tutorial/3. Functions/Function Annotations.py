# Have no effect on any part of the function
def func(name: str, eggs: str = "sunnyside Up") -> str:
    print(func.__annotations__)

    return name.capitalize() + ": " + eggs.capitalize()

x = func("Bob")
print(x)
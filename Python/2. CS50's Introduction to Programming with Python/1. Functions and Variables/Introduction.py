# Built in function called print that takes in argument and prints it on the screen
print("Hello World!")


name = input("What is your name? ").strip().title()
# name = name.strip().title() # removes whitespace from the string left and right


# Split user's name into first and last name
first, last = name.split(" ") # unpacking


print(f"Hello, {first} {last}")


"""
This is an example:
The example is multiple lines of comments.
The is another line.
"""
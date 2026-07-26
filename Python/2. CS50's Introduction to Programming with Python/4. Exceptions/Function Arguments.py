def main():
    x = get_int("What's x?")
    print(f"x is {x}")

def get_int(prompt):
    while True:
        try:
            x = int(input(prompt))
        except ValueError: # if something goes wrong
            print("x is not an integer")
        else: # if nothing goes wrong
            return x # break out of loop and return the value

main()
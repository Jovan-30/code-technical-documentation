# Ignore - Pass

def main():
    x = get_int()
    print(f"x is {x}")

def get_int():
    while True:
        try:
            x = int(input("what is x? "))
        except ValueError: # if something goes wrong
            pass # will just prompt the user again, no text 
        else: # if nothing goes wrong
            return x # break out of loop and return the value

main()
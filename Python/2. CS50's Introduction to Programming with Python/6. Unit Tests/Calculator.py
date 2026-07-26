def main():
    x = int(input("What is x? "))
    print("x squared is", squared(x))

def squared(n):
    return n + n

if __name__ == "__main__":
    main()
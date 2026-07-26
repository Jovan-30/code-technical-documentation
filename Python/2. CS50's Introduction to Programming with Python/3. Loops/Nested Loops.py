def main():
    print_column(4)

def print_column(height):
    for i in range(1, height + 1):
        print("#" * i)

main()
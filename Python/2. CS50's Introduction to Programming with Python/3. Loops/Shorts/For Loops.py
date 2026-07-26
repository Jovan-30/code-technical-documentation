def main():
    names = ["Bob", "Bill", "Joe"]

    for name in names:
        print(write_letter(name, "Rob"), end="")
    

def write_letter(sender, receiver):
    return f"""
    ===============================
    Hi {sender},

    This is a letter.

    {receiver}
    ===============================
    """
main()
"""
Assert that something is true and if it is no errors will happen, however,
if not true you will see error on the screen
"""
from Calculator import squared

def main():
    test_squared()

def test_squared():
    try:
        assert squared(2) == 4
    except AssertionError:
        print("2 squared was not equal to 4")

    try:
        assert squared(3) == 9
    except AssertionError:
        print("3 squared was not equal to 9")

    try:
        assert squared(-2) == 4
    except AssertionError:
        print("-2 squared was not equal to 4")

    try:
        assert squared(-3) == 9
    except AssertionError:
        print("3 squared was not equal to 9")

    try:
        assert squared(0) == 0
    except AssertionError:
        print("0 squared was not equal to 0")

if __name__ == "__main__":
    main()
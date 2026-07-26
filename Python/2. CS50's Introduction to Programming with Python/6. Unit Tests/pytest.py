from Calculator import squared

def test_squared():
    assert squared(2) == 4
    assert squared(3) == 9
    assert squared(-2) == 4
    assert squared(-3) == 9
    assert squared(0) == 0

"""
run pytest filename.py it's a user friendly way to show tests passed and failed above
"""
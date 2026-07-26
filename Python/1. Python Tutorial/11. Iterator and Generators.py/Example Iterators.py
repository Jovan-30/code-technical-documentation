# Example 1
class ReverseRange:
    def __init__(self, start, end) -> None:
        self.start = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.end <= self.start:
            raise StopIteration # must raise
        else:
            current = self.end
            self.end -= 1
            return current

reverse_range = ReverseRange(1, 10)

for i in reverse_range:
    print(i)
# OR
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))
# print(next(reverse_range))


# Example 2
class ReverseString:
    def __init__(self, string) -> None:
        self.string = string
        self.index = -1

    def __iter__(self):
        return self

    def __next__(self):
        if abs(self.index) > len(self.string):
            raise StopIteration
        else:
            current = self.string[self.index]
            self.index -= 1
            return current

reverse_string = ReverseString("Jovan Bob")
# for i in reverse_string:
#     print(i)
print(next(reverse_string))
print(next(reverse_string))
print(next(reverse_string))
print(next(reverse_string))
print(next(reverse_string))


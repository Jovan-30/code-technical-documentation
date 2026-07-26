# Modes
# r - read file
# w - write to a file
# a - append to a file
# r+ - read and write to file


# Opening Files
f = open('./test.txt', 'r', encoding='utf-8')
print(f.name) # prints file name
print(f.mode) # prints mode
f.close() # must close, otherwise file leask


# Opening Files with Context Manager - Automatically Closes Files
with open('./test.txt', 'r', encoding="utf-8") as f:
    print(f.name)
    print(f.mode)
    print(f.encoding)
    print(f.read())
    print(f.readline()) # reads first line, then when called again second line, etc
    print(f.readlines()) # returns a list
print(f.closed) # Returns True


# Reading each line of file
with open('./test.txt', 'r', encoding="utf-8") as f:
    for line in f:
        print(line, end="")


# Writiing to a file - overwrite
with open('./test2.txt', 'w', encoding='utf-8') as f:
    f.write("This is my file writing - line 1")


# Create a copy of test1 to test3 - reading and writing
with open("./test.txt", "r", encoding="utf-8") as fRead:
    with open("./test3.txt", "w", encoding="utf-8") as fWrite:
        for line in fRead:
            fWrite.write(line)
print(fRead.closed)

# first-in is first out

from collections import deque

queue = deque([1, 5, 53, 91, 2, 28])
queue.append(4)
queue.append(56)
print(queue)

queue.popleft()
queue.popleft()
queue.popleft()
print(queue)
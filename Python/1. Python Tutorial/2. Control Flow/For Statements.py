# Iterate over strings and lists
words = ['car', 'window', 'defence']

for w in words:
    print(w + " " + str(len(w)))

# Create a sample collection
users = {'Hans': 'active', 'Éléonore': 'inactive', '景太郎': 'active'}

# Strategy:  Iterate over a copy
for user, status in users.copy().items():
    if status == "inactive":
        del users[user]

activated_users = {}
for user, status in users.items():
    if status == 'active':
        activated_users[user] = status
print(activated_users)
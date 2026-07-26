hockey = {
    "Horvat": "Islanders", 
    "Hughes": "Canucks", 
    "Miller": "Canucks",
    "McDavid": "Oilers"
}

for name, team in hockey.items():
    print(name, team, sep=" - ")

print("\n", end="")
print(hockey["Horvat"])
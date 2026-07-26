def health_calc(age, apples_ate, cigs_smoke):
    answer = 100 - age + (apples_ate * 3.5) - (cigs_smoke * 2)
    print(int(answer))

buckys_data = [27, 20, 0]

health_calc(*buckys_data) # Unpacking an argument list



# dictionaries can deliver keyword arguments with the **-operator:
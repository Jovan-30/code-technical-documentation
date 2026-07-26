def main():
    spacecraft = {
        "name": "Voyager 1",
    }

    spacecraft.update({
        "orbit": "Sun",
        "distance": "200"
    })
    print(create_report(spacecraft))

    distances = {
        "Voyager 1": "160",
        "Voyager 2": "170",
        "Voyager 3": "190"
    }

    for k, v in distances.items():
        print(k, v, sep="  --  ")

def create_report(spacecraft):
    return f"""
    ============REPORT============
    Name: {spacecraft.get("name", "Unknown")}
    Distance: {spacecraft.get("distance", "Unknown")}
    Orbit: {spacecraft.get("orbit", "Unknown")}
    ==============================
    """

main()
# Bus Ticketing System

# Define the available stations and corresponding distances from the starting point in kilometers and millimeters
stations = {
    1: "Gampola",
    2: "Bothalapitiya",
    3: "Galgediyawa",
    4: "Weligalla",
    5: "Gelioya",
    6: "Kossinna",
    7: "Agunaweta Palama",
    8: "Peradeniya",
    9: "Get Ambe",
    10: "Mulgampola",
    11: "Kandy"
}

# Distances between stations in kilometers
distances_km = {
    (1, 2): 3,
    (2, 3): 4,
    (3, 4): 2,
    (4, 5): 5,
    (5, 6): 3,
    (6, 7): 2,
    (7, 8): 4,
    (8, 9): 2,
    (9, 10): 3,
    (10, 11): 3,
    # Add more distances as needed
}

# Distances between stations in millimeters (1 km = 1,000,000 mm)
distances_mm = {key: value * 1000000 for key, value in distances_km.items()}

# Fare calculation (assuming Rs. 10 per km for full ticket and Rs. 5 for half ticket)
def calculate_fare(start, end, ticket_type, passenger_count):
    distance_km = 0
    for i in range(min(start, end), max(start, end)):
        distance_km += distances_km.get((i, i+1), 0)
    
    if ticket_type == "full":
        fare = distance_km * 10
    elif ticket_type == "half":
        fare = distance_km * 5

    # Multiply by the number of passengers
    total_fare = fare * passenger_count
    
    # Convert the total distance to mm as well
    total_distance_mm = sum(distances_mm.get((i, i+1), 0) for i in range(min(start, end), max(start, end)))
    
    return total_fare, distance_km, total_distance_mm

def display_output(start, end, ticket_type, total_fare, distance_km, distance_mm, passenger_count, method):
    output = f"""
    --------------------------
    |   VISTA TRAVELS         |
    |   Ticket Summary        |
    --------------------------
    | Starting Point: {stations[start]}
    | Ending Point: {stations[end]}
    | Ticket Type: {ticket_type.capitalize()}
    | Distance: {distance_km} km ({distance_mm} mm)
    | Passengers: {passenger_count}
    | Total Fare: Rs. {total_fare}
    | Direction: {method.upper()}
    --------------------------
    |  Thank you for using    |
    |     ASH TRAVELS!        |
    --------------------------
    """
    print(f"\033[1;30;47m{output}\033[0m")  # This will print in black text with a white background

def main():
    print("VISTA TRAVELS")
    print("Select your starting point:")
    for key, value in stations.items():
        print(f"{key}: {value}")
    start = int(input("Enter your starting point (number): "))

    print("Select your ending point:")
    for key, value in stations.items():
        print(f"{key}: {value}")
    end = int(input("Enter your ending point (number): "))

    ticket_type = input("Enter your ticket type (full/half): ").strip().lower()
    if ticket_type not in ["full", "half"]:
        print("Invalid ticket type!")
        return
    
    passenger_count = int(input("Enter the number of passengers: "))

    total_fare, distance_km, distance_mm = calculate_fare(start, end, ticket_type, passenger_count)
    
    method = input("Select your method ('up' or 'down' or 'cancel' to exit): ").strip().lower()
    if method == 'cancel':
        print("Ticketing process cancelled.")
    else:
        display_output(start, end, ticket_type, total_fare, distance_km, distance_mm, passenger_count, method)

if __name__ == "__main__":
    main()

// dataAugment.js - Augments the existing carsData at runtime with realistic CarDekho-style details
carsData.forEach(car => {
    // Basic realistic specs mapping
    let power = "118 bhp @ 6000 rpm";
    let torque = "145 Nm @ 4600 rpm";
    let groundClearance = "170 mm";
    let bootSpace = "350 Liters";
    
    if (car.body_type === "SUV") {
        power = "138 bhp @ 6000 rpm";
        torque = "242 Nm @ 1500 rpm";
        groundClearance = "190 mm";
        bootSpace = "433 Liters";
        if (car.engine.includes("2184")) { // Mahindra big SUVs
            power = "172 bhp @ 3500 rpm";
            torque = "400 Nm @ 1750 rpm";
            groundClearance = "200 mm";
            bootSpace = "460 Liters";
        }
    } else if (car.body_type === "Hatchback") {
        power = "82 bhp @ 6000 rpm";
        torque = "113 Nm @ 4200 rpm";
        groundClearance = "165 mm";
        bootSpace = "318 Liters";
    }

    car.specs = {
        power: power,
        torque: torque,
        ground_clearance: groundClearance,
        boot_space: bootSpace,
        top_speed: "165 kmph",
        acceleration: "11.5 seconds (0-100 kmph)"
    };

    car.features = [
        "Touchscreen Infotainment System",
        "Automatic Climate Control",
        "Apple CarPlay & Android Auto",
        "Keyless Entry & Push Button Start",
        "Rear Parking Camera",
        car.body_type === "SUV" ? "Panoramic Sunroof" : "LED Daytime Running Lights",
        "Alloy Wheels"
    ];

    car.safety = {
        rating: (car.body_type === "SUV" || car.brand === "Tata" || car.brand === "Mahindra" || car.brand === "Skoda" || car.brand === "Volkswagen") ? "5 Star (Global NCAP)" : "3 Star (Global NCAP)",
        airbags: car.body_type === "SUV" ? 6 : 2,
        features: [
            "Anti-Lock Braking System (ABS)", 
            "Electronic Brake-force Distribution (EBD)", 
            "Electronic Stability Program (ESP)", 
            "ISOFIX Child Seat Mounts"
        ]
    };

    car.pros = [
        `Excellent ${car.body_type} styling and road presence`,
        `Fuel efficient ${car.fuel_type} engine with ${car.mileage}`,
        "Feature-rich interior with premium materials"
    ];

    car.cons = [
        "Waiting period can be quite long",
        "Service network is limited in some rural areas",
        "Top variants are slightly overpriced"
    ];

    const baseColors = [
        { name: "Polar White", hex: "#FFFFFF" },
        { name: "Phantom Black", hex: "#000000" },
        { name: "Typhoon Silver", hex: "#C0C0C0" }
    ];
    
    if (car.body_type === "SUV") {
        baseColors.push({ name: "Ranger Khaki", hex: "#8B8378" });
        baseColors.push({ name: "Fiery Red", hex: "#cc0000" });
    } else {
        baseColors.push({ name: "Starry Night", hex: "#1A1A24" });
        baseColors.push({ name: "Fiery Red", hex: "#cc0000" });
    }
    car.colors = baseColors;

    // Specific overrides for Honda Amaze based on official site
    if (car.model === "Amaze") {
        car.specs.power = "89 bhp @ 6000 rpm";
        car.specs.torque = "110 Nm @ 4800 rpm";
        car.specs.boot_space = "420 Liters";
        
        car.features.push("Honda SENSING (Advanced Driver Assistance System)", "Collision Mitigation Braking System");
        car.safety.rating = "4 Star (Global NCAP)";
        car.safety.features.push("Honda SENSING ADAS Suite");
        
        car.pros = [
            "Class-leading 420L boot space and spacious cabin",
            "Advanced ADAS safety features with Honda SENSING",
            "Smooth CVT automatic transmission"
        ];
        
        car.colors = [
            { name: "Radiant Red Metallic", hex: "#a61528" },
            { name: "Platinum White Pearl", hex: "#f1f1f1" },
            { name: "Lunar Silver Metallic", hex: "#c0c0c0" },
            { name: "Meteoroid Grey Metallic", hex: "#5b5c61" },
            { name: "Golden Brown Metallic", hex: "#5a452a" }
        ];
    }

    car.dealers = [
        { name: `KUN ${car.brand} Chennai`, address: "145, Anna Salai, Mount Road, Chennai, Tamil Nadu 600002", phone: "+91 98765 11111", distance: "2.4 km" },
        { name: `V3 ${car.brand} OMR`, address: "22, OMR IT Expressway, Thoraipakkam, Chennai, Tamil Nadu 600097", phone: "+91 98765 22222", distance: "8.1 km" },
        { name: `FPL ${car.brand} Chromepet`, address: "Grand Southern Trunk Rd, Chromepet, Chennai, Tamil Nadu 600044", phone: "+91 98765 33333", distance: "14.5 km" }
    ];
});

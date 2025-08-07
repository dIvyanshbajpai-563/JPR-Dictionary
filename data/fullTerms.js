const fullTerms = {
  a: [
    {
      name: 'Afterburner',
      meaning: 'Adds thrust by injecting fuel into the exhaust.',
      application: 'Used in military jets.',
      advantages: ['High thrust', 'Supersonic capability'],
      disadvantages: ['High fuel use', 'Extreme heat'],
      imageName: 'a1.png',
    },
    {
      name: 'Ablative Cooling',
      meaning: 'Heat protection by material erosion.',
      application: 'Used in re-entry vehicles.',
      advantages: ['Effective heat shielding', 'Simple design'],
      disadvantages: ['Non-reusable', 'Mass loss'],
      imageName: 'a2.png',
    },
    {
      name: 'Air-augmented Rocket',
      meaning: 'Uses ambient air to boost thrust.',
      application: 'Airbreathing launch systems.',
      advantages: ['Extra thrust at low altitudes', 'Fuel efficiency'],
      disadvantages: ['Complex intake system', 'Limited to atmosphere'],
      imageName: 'a3.png',
    },
  ],
  b: [
    {
      name: 'Bipropellant',
      meaning: 'Rocket fuel using separate fuel and oxidizer.',
      application: 'Liquid-fueled launch vehicles.',
      advantages: ['High performance'],
      disadvantages: ['Complex handling'],
      imageName: 'b1.png',
    },
    {
      name: 'Bell Nozzle',
      meaning: 'Nozzle that maximizes gas expansion.',
      application: 'Most chemical rocket engines.',
      advantages: ['Efficient thrust', 'Compact size'],
      disadvantages: ['Not optimal at all altitudes'],
      imageName: 'b2.png',
    },
    {
      name: 'Boil-off',
      meaning: 'Loss of cryogenic fuel due to heat.',
      application: 'Storage of liquid hydrogen/oxygen.',
      advantages: ['None'],
      disadvantages: ['Fuel loss', 'Pressure issues'],
      imageName: 'b3.png',
    },
  ],
  c: [
    {
      name: 'Cryogenic Propellant',
      meaning: 'Propellants stored at low temperatures.',
      application: 'Upper rocket stages.',
      advantages: ['High efficiency'],
      disadvantages: ['Hard to store'],
      imageName: 'c1.png',
    },
    {
      name: 'Combustion Chamber',
      meaning: 'Region where fuel and oxidizer burn.',
      application: 'All rocket engines.',
      advantages: ['High pressure thrust'],
      disadvantages: ['Heat stress'],
      imageName: 'c2.png',
    },
  ],
  d: [
    {
      name: 'Delta-v',
      meaning: 'Change in velocity needed for maneuver.',
      application: 'Trajectory planning.',
      advantages: ['Defines mission needs'],
      disadvantages: ['Can be high'],
      imageName: 'd1.png',
    },
    {
      name: 'Ducted Rocket',
      meaning: 'Uses a duct to improve airflow for thrust.',
      application: 'Missiles, tactical weapons.',
      advantages: ['Improved efficiency'],
      disadvantages: ['Limited control'],
      imageName: 'd2.png',
    },
  ],
  e: [
    {
      name: 'Engine Bell',
      meaning: 'Nozzle that directs exhaust for thrust.',
      application: 'All chemical engines.',
      advantages: ['Better exhaust expansion'],
      disadvantages: ['Heavier'],
      imageName: 'e1.png',
    },
    {
      name: 'Electric Propulsion',
      meaning: 'Uses electric fields to accelerate ions.',
      application: 'Deep space missions.',
      advantages: ['Fuel efficient'],
      disadvantages: ['Low thrust'],
      imageName: 'e2.png',
    },
  ],
  f: [
    {
      name: 'Fuel Injector',
      meaning: 'Sprays fuel into combustion chamber.',
      application: 'Liquid rocket engines.',
      advantages: ['Even fuel distribution'],
      disadvantages: ['Design complexity'],
      imageName: 'f1.png',
    },
    {
      name: 'Flight Termination System',
      meaning: 'Destroys vehicle if it veers off course.',
      application: 'Launch safety.',
      advantages: ['Protects public'],
      disadvantages: ['Destroys vehicle'],
      imageName: 'f2.png',
    },
  ],
  g: [
    {
      name: 'Gimballed Nozzle',
      meaning: 'Nozzle that can swivel for control.',
      application: 'Directional control.',
      advantages: ['Precision steering'],
      disadvantages: ['Mechanical complexity'],
      imageName: 'g1.png',
    },
    {
      name: 'Gas Generator Cycle',
      meaning: 'Burns some fuel to power turbopumps.',
      application: 'Rocket engines like Merlin.',
      advantages: ['Simple'],
      disadvantages: ['Lower efficiency'],
      imageName: 'g2.png',
    },
  ],
  h: [
    {
      name: 'Hybrid Rocket',
      meaning: 'Solid fuel, liquid oxidizer.',
      application: 'Experimental rockets.',
      advantages: ['Safer', 'Throttle capable'],
      disadvantages: ['Low performance'],
      imageName: 'h1.png',
    },
    {
      name: 'Heat Shield',
      meaning: 'Protects vehicle during re-entry.',
      application: 'Space capsules.',
      advantages: ['Prevents burnup'],
      disadvantages: ['Heavy'],
      imageName: 'h2.png',
    },
  ],
  i: [
    {
      name: 'Ion Thruster',
      meaning: 'Accelerates ions for thrust.',
      application: 'Long-duration missions.',
      advantages: ['Extremely efficient'],
      disadvantages: ['Tiny thrust'],
      imageName: 'i1.png',
    },
    {
      name: 'Igniter',
      meaning: 'Starts the combustion process.',
      application: 'All rocket engines.',
      advantages: ['Essential'],
      disadvantages: ['Failure risk'],
      imageName: 'i2.png',
    },
  ],
  j: [
    {
      name: 'Jet Propulsion',
      meaning: 'Thrust from expelling mass backward.',
      application: 'Aircraft, rockets.',
      advantages: ['Efficient in atmosphere'],
      disadvantages: ['Needs fuel'],
      imageName: 'j1.png',
    },
    {
      name: 'Jet Vanes',
      meaning: 'Fins placed in exhaust for steering.',
      application: 'Early missiles.',
      advantages: ['Simple control'],
      disadvantages: ['Erodes fast'],
      imageName: 'j2.png',
    },
  ],
  k: [
    {
      name: 'Kerosene (RP-1)',
      meaning: 'Rocket-grade refined fuel.',
      application: 'Falcon 9, Atlas rockets.',
      advantages: ['Stable', 'Energy dense'],
      disadvantages: ['Lower ISP'],
      imageName: 'k1.png',
    },
    {
      name: 'Kármán Line',
      meaning: 'Boundary of space at 100 km.',
      application: 'Defines space missions.',
      advantages: ['Standard reference'],
      disadvantages: ['Arbitrary'],
      imageName: 'k2.png',
    },
],l: [
  {
    name: "Liquid Propellant",
    meaning: "Propellant in liquid form, used in many launch vehicles.",
    application: "SpaceX, ISRO GSLV, NASA Saturn V.",
    advantages: ["Throttling, control, restart possible"],
    disadvantages: ["Complex plumbing and tanks"],
    imageName: "l1.png"
  },
  {
    name: "LOX (Liquid Oxygen)",
    meaning: "A cryogenic oxidizer commonly used with liquid hydrogen or kerosene.",
    application: "Used in SpaceX Falcon 9, NASA SLS, etc.",
    advantages: ["Supports high-efficiency combustion"],
    disadvantages: ["Requires cryogenic storage"],
    imageName: "l2.png"
  }
],
m: [
  {
    name: "Monopropellant",
    meaning: "A single chemical that decomposes to produce thrust.",
    application: "Used in small thrusters like attitude control.",
    advantages: ["Simple system"],
    disadvantages: ["Lower efficiency"],
    imageName: "m1.png"
  },
  {
    name: "Methalox",
    meaning: "Methane + Liquid Oxygen propellant combination.",
    application: "Used in next-gen rockets like SpaceX Starship.",
    advantages: ["Cleaner burn", "Easier to store than hydrogen"],
    disadvantages: ["Still under active development"],
    imageName: "m2.png"
  }
],
n: [
  {
    name: "Nozzle Expansion Ratio",
    meaning: "Ratio of exit area to throat area in a rocket nozzle.",
    application: "Affects thrust and efficiency at different altitudes.",
    advantages: ["Higher ratios = more efficient in vacuum"],
    disadvantages: ["May overexpand at sea level"],
    imageName: "n1.png"
  },
  {
    name: "NTO (Nitrogen Tetroxide)",
    meaning: "Hypergolic oxidizer used with hydrazine fuels.",
    application: "Used in many satellite and planetary missions.",
    advantages: ["Ignites on contact with fuel"],
    disadvantages: ["Highly toxic"],
    imageName: "n2.png"
  }
],
o: [
  {
    name: "Oxidizer",
    meaning: "Chemical that supplies oxygen to burn the fuel.",
    application: "Needed in space where there’s no atmosphere.",
    advantages: ["Essential for combustion"],
    disadvantages: ["Can be highly reactive"],
    imageName: "o1.png"
  },
  {
    name: "Open-Cycle Engine",
    meaning: "Engine design where some propellant is dumped after driving the turbopump.",
    application: "Used in early Soviet and American engines.",
    advantages: ["Simpler than closed cycle"],
    disadvantages: ["Less efficient"],
    imageName: "o2.png"
  }
],
p: [
  {
    name: "Perigee Kick Motor",
    meaning: "A motor fired at closest Earth approach to raise orbit.",
    application: "Used in satellite orbit transfer.",
    advantages: ["Efficient use of fuel"],
    disadvantages: ["Timing-sensitive"],
    imageName: "p1.png"
  },
  {
    name: "Pressure-Fed System",
    meaning: "Propellant is pushed into the engine using pressurized gas instead of pumps.",
    application: "Used in small launchers or upper stages.",
    advantages: ["No turbopumps needed"],
    disadvantages: ["Limited performance"],
    imageName: "p2.png"
  }
],
q: [
  {
    name: "Quasi-steady Flow",
    meaning: "A flow that changes slowly compared to the system response time.",
    application: "Used in nozzle and combustion analysis.",
    advantages: ["Simplifies equations"],
    disadvantages: ["Less accurate in dynamic systems"],
    imageName: "q1.png"
  },
  {
    name: "Quantum Thruster (Theoretical)",
    meaning: "A theoretical concept of using quantum vacuum fluctuations for thrust.",
    application: "Proposed for deep space travel.",
    advantages: ["Could enable long-duration missions"],
    disadvantages: ["Not yet practical or proven"],
    imageName: "q2.png"
  }
],
r: [
  {
    name: "Regenerative Cooling",
    meaning: "Hot gases are cooled by flowing fuel around the nozzle.",
    application: "Used in high-performance rocket engines.",
    advantages: ["Prevents overheating"],
    disadvantages: ["Adds plumbing complexity"],
    imageName: "r1.png"
  },
  {
    name: "RCS (Reaction Control System)",
    meaning: "Small thrusters used to control spacecraft attitude.",
    application: "Used for orientation in orbit and docking.",
    advantages: ["Precise control"],
    disadvantages: ["Consumes extra propellant"],
    imageName: "r2.png"
  }
],
s: [
  {
    name: "Solid Rocket",
    meaning: "A propulsion system where fuel and oxidizer are mixed in solid form.",
    application: "ISRO PSLV boosters, space shuttle SRBs.",
    advantages: ["Simple and reliable"],
    disadvantages: ["Once ignited, cannot shut down"],
    imageName: "s1.png"
  },
  {
    name: "Staged Combustion Cycle",
    meaning: "A cycle where propellants are fully burned before entering the main chamber.",
    application: "Used in engines like SpaceX Raptor.",
    advantages: ["High efficiency"],
    disadvantages: ["High complexity and cost"],
    imageName: "s2.png"
  }
],
t: [
  {
    name: "Turbopump",
    meaning: "A pump driven by a turbine to force propellants into the combustion chamber.",
    application: "Used in most high-performance liquid engines.",
    advantages: ["Handles high flow rates"],
    disadvantages: ["Complex and costly"],
    imageName: "t1.png"
  },
  {
    name: "Thrust Vector Control",
    meaning: "Mechanism to steer rockets by altering exhaust direction.",
    application: "Used in almost all modern launch vehicles.",
    advantages: ["Enables control without fins"],
    disadvantages: ["Adds mechanical complexity"],
    imageName: "t2.png"
  }
],
u: [
  {
    name: "Upper Stage",
    meaning: "The topmost stage in a launch vehicle that places payload in orbit.",
    application: "Final orbit insertion and adjustments.",
    advantages: ["Optimized for vacuum"],
    disadvantages: ["Adds mission complexity"],
    imageName: "u1.png"
  },
  {
    name: "Ullage Motors",
    meaning: "Small motors used to settle fuel in zero gravity.",
    application: "Used before engine ignition in space.",
    advantages: ["Ensures proper fuel flow"],
    disadvantages: ["Consumes extra mass and fuel"],
    imageName: "u2.png"
  }
],
v: [
  {
    name: "Vernier Thruster",
    meaning: "Small rocket used to make precise adjustments to a vehicle’s attitude or velocity.",
    application: "Fine control during docking or orientation.",
    advantages: ["High precision"],
    disadvantages: ["Low thrust"],
    imageName: "v1.png"
  },
  {
    name: "Vacuum Nozzle",
    meaning: "Nozzle optimized for use in space with wider expansion.",
    application: "Used in upper-stage engines.",
    advantages: ["Higher efficiency in vacuum"],
    disadvantages: ["Not suitable for sea level"],
    imageName: "v2.png"
  }
],
w: [
  {
    name: "Warp Drive (theoretical)",
    meaning: "A hypothetical propulsion that distorts spacetime.",
    application: "Concept from science fiction and theoretical physics.",
    advantages: ["Potential faster-than-light travel"],
    disadvantages: ["Violates known physics (currently)"],
    imageName: "w1.png"
  },
  {
    name: "Wedge Nozzle",
    meaning: "Flat nozzle shape used in some experimental aircraft.",
    application: "Tested in lifting body concepts.",
    advantages: ["Compact design"],
    disadvantages: ["Limited performance range"],
    imageName: "w2.png"
  }
],
x: [
  {
    name: "Xenon Propulsion",
    meaning: "Electric propulsion using ionized xenon gas.",
    application: "Deep space probes like Dawn.",
    advantages: ["Very efficient"],
    disadvantages: ["Low thrust"],
    imageName: "x1.png"
  },
  {
    name: "X-15 Rocket Plane",
    meaning: "An experimental rocket-powered aircraft from the 1960s.",
    application: "High-speed atmospheric research.",
    advantages: ["Pioneered hypersonic flight"],
    disadvantages: ["High risk, limited reuse"],
    imageName: "x2.png"
  }
],
y: [
  {
    name: "Yaw Control",
    meaning: "Control over left-right rotation of a vehicle.",
    application: "Essential for navigation and attitude stability.",
    advantages: ["Stabilizes vehicle direction"],
    disadvantages: ["Complex for multi-axis systems"],
    imageName: "y1.png"
  },
  {
    name: "Yaw Thruster",
    meaning: "A small engine dedicated to correcting yaw motion.",
    application: "Used in spacecraft orientation systems.",
    advantages: ["Precise yaw corrections"],
    disadvantages: ["Consumes reaction mass"],
    imageName: "y2.png"
  }
],
z: [
  {
    name: "Zero-gravity Combustion",
    meaning: "How flames and fuel behave in microgravity.",
    application: "Space station safety and fuel research.",
    advantages: ["Improved understanding of fire in space"],
    disadvantages: ["Challenging to simulate on Earth"],
    imageName: "z1.png"
  },
  {
    name: "Zubrin Cycle (Conceptual)",
    meaning: "A conceptual propulsion cycle for Mars missions.",
    application: "Proposed for ISRU-based propulsion on Mars.",
    advantages: ["Utilizes Martian resources"],
    disadvantages: ["Theoretical, not yet built"],
    imageName: "z2.png"
  }
]

};

export default fullTerms;

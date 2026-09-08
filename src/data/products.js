import {
  FaSolarPanel,
  FaBatteryFull,
  FaChargingStation,
  FaScrewdriverWrench,
} from "react-icons/fa6";

import productImage from "../assets/images/products/product.png";

export const product = [
  {
    category: "Solar Panels",
    icon: FaSolarPanel,
    items: [
      {
        title: "LONGi Solar",
        image: productImage,
        features: [
          "N-Type Technology",
          "High Efficiency",
          "25+ Year Warranty",
          "Excellent Temperature Performance",
        ],
      },
      {
        title: "Jinko Solar",
        image: productImage,
        features: [
          "Tiger Neo Series",
          "TOPCon Technology",
          "High Power Output",
          "Tier-1 Manufacturer",
        ],
      },
      {
        title: "JA Solar",
        image: productImage,
        features: [
          "DeepBlue Series",
          "High Conversion Efficiency",
          "Excellent Reliability",
          "N-Type Bifacial Technology",
        ],
      },
      {
        title: "Canadian Solar",
        image: productImage,
        features: [
          "HiKu Series",
          "Residential & Commercial",
          "Proven Global Performance",
          "High Efficiency",
        ],
      },
    ],
  },
  {
    category: "Battery Solutions",
    icon: FaBatteryFull,
    items: [
      {
        title: "Inverex Lithium",
        image: productImage,
        features: [
          "Long Life Cycle",
          "Smart BMS",
          "Fast Charging",
          "Premium Quality",
        ],
      },
      {
        title: "Huawei Luna",
        image: productImage,
        features: [
          "Modular Design",
          "Smart Monitoring",
          "High Backup Capacity",
          "Premium Solution",
        ],
      },
      {
        title: "Phoenix Tubular",
        image: productImage,
        features: [
          "High Durability",
          "Affordable Solution",
          "Deep Cycle Technology",
          "Reliable Backup",
        ],
      },
      {
        title: "Soluna Lithium",
        image: productImage,
        features: [
          "Premium Storage",
          "High Backup Capacity",
          "Long Life Cycle",
          "Smart Management",
        ],
      },
    ],
  },
  {
    category: "Solar Inverters",
    icon: FaChargingStation,
    items: [
      {
        title: "Huawei Inverters",
        image: productImage,
        features: ["Smart Monitoring", "High Efficiency", "Premium Quality"],
      },
      {
        title: "GoodWe Inverters",
        image: productImage,
        features: ["Hybrid Solutions", "Long Warranty", "Reliable Performance"],
      },
      {
        title: "Sungrow Inverters",
        image: productImage,
        features: [
          "Utility Grade Performance",
          "Global Brand",
          "Trusted Quality",
        ],
      },
      {
        title: "Inverex",
        image: productImage,
        features: ["Grid-Tied Systems", "Reliable Operation", "Cost Effective"],
      },
    ],
  },
  {
    category: "Solar Structures & Components",
    icon: FaScrewdriverWrench,
    items: [
      {
        title: "Solar Structures",
        image: productImage,
        features: [
          "GI Structure (Hot Dip Galvanized)",
          "Aluminum Structure",
          "Elevated Structure",
          "Ground Mounted Structure",
        ],
      },
      {
        title: "Electrical Components",
        image: productImage,
        features: [
          "DC Breakers & Isolators",
          "Surge Protection Devices",
          "MCCB & ACB",
          "SPD Protection",
        ],
      },
      {
        title: "Earthing & Protection",
        image: productImage,
        features: [
          "Copper Earthing",
          "Chemical Earthing",
          "Lightning Protection",
          "Safety Systems",
        ],
      },
      {
        title: "Monitoring Systems",
        image: productImage,
        features: [
          "WiFi Monitoring",
          "Mobile Applications",
          "Energy Analytics",
          "Real-time Tracking",
        ],
      },
    ],
  },
];

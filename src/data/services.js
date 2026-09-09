import { FaHouse, FaBuilding, FaIndustry } from "react-icons/fa6";

export const servicesData = [
  {
    icon: FaHouse,
    title: "Residential systems",
    description:
      "Rooftop solar sized to your household's usage, with battery backup options.",
    servicesList: [
      "3KW Solar Systems",
      "5KW Solar Systems",
      "10KW Solar Systems",
      "Hybrid Solar Systems",
      "Off-Grid Solar Systems",
    ],
    highlighted: false,
  },
  {
    icon: FaBuilding,
    title: "Commercial systems",
    description:
      "Net-metered solar for offices and retail spaces, designed to cut running costs.",
    servicesList: [
      "Offices & Shopping Centers",
      "Schools & Universities",
      "Hospitals",
      "Industrial Projects",
    ],
    highlighted: true,
  },
  {
    icon: FaIndustry,
    title: "Industrial systems",
    description:
      "Large-scale installations engineered for factories and manufacturing plants.",
    servicesList: [
      "Factory Solar Systems",
      "Large Scale Installations",
      "Energy Audits",
      "Load Analysis",
    ],
    highlighted: false,
  },
];

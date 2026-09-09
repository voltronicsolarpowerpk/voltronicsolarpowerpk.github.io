import { FaSolarPanel, FaBolt, FaBatteryFull } from "react-icons/fa6";

import HW_01 from "../assets/images/products/HWOO_5_KW_lithium_Battery.png";
import HW_02 from "../assets/images/products/HWOO_4-2_KW_IP_21_Invertor.png";
import HW_03 from "../assets/images/products/HWOO_6_KW_IP_65_Invertor.png";
import HW_04 from "../assets/images/products/HWOO_6-2_KW_IP_21_Invertor.png";

import CT_01 from "../assets/images/products/CoreTech_1-6_KW_PV2200_Invertor.png";
import CT_02 from "../assets/images/products/CoreTech_4-2_KW_IP_21_Invertor.png";
import CT_03 from "../assets/images/products/CoreTech_6_KW_PV_Invertor.png";
import CT_04 from "../assets/images/products/CoreTech_6_KW_IP_66_Invertor.png";
import CT_05 from "../assets/images/products/CoreTech_8_KW_IP_66_Invertor.png";
import CT_06 from "../assets/images/products/CoreTech_10_KW_IP_66_Invertor.png";
import CT_07 from "../assets/images/products/CoreTech_12-2_KW_PV_24000_IP_21_Invertor.png";

import LV_01 from "../assets/images/products/LV_TOPSUN_12V_100Ah_Lithium_Battery.png";
import LV_02 from "../assets/images/products/LV_TOPSUN_2-5_KW_24-V_Lithium_Battery.png";
import LV_03 from "../assets/images/products/LV_TOPSUN_5KW_51V_Lithium_Battery.png";
import LV_04 from "../assets/images/products/LV_TOPSUN_7_KW_Lithium_Battery.png";
import LV_05 from "../assets/images/products/LV_TOPSUN_15_KW_IP_20_Lithium_Battery.png";
import LV_06 from "../assets/images/products/LV_TOPSUN_16KW_IP65_Lithium_Battery.png";
import LV_07 from "../assets/images/products/LV_TOPSUN_20_KW_Lithium_Battery.png";

export const productsData = [
  // {
  //   id: "solar-panels",
  //   category: "Solar Panels",
  //   icon: FaSolarPanel,
  //   items: [],
  // },

  {
    id: "inverters",
    category: "Inverters",
    icon: FaBolt,
    items: [
      {
        id: "hwoo-4-2kw-ip21",
        title: "HWOO 4.2 KW IP 21 Inverter",
        brand: "HWOO",
        image: HW_02,
        features: ["4.2 KW", "IP21"],
      },
      {
        id: "hwoo-6-2kw-ip21",
        title: "HWOO 6.2 KW IP 21 Inverter",
        brand: "HWOO",
        image: HW_03,
        features: ["6.2 KW", "IP21"],
      },
      {
        id: "hwoo-6kw-ip65",
        title: "HWOO 6 KW IP 65 Inverter",
        brand: "HWOO",
        image: HW_04,
        features: ["6 KW", "IP65"],
      },

      {
        id: "coretech-1-6kw-pv2200",
        title: "CoreTech 1.6 KW PV2200 Inverter",
        brand: "CoreTech",
        image: CT_01,
        features: ["1.6 KW", "PV2200"],
      },
      {
        id: "coretech-4-2kw-ip21",
        title: "CoreTech 4.2 KW IP 21 Inverter",
        brand: "CoreTech",
        image: CT_02,
        features: ["4.2 KW", "IP21"],
      },
      {
        id: "coretech-6kw-pv",
        title: "CoreTech 6 KW PV Inverter",
        brand: "CoreTech",
        image: CT_03,
        features: ["6 KW", "PV"],
      },
      {
        id: "coretech-6kw-ip66",
        title: "CoreTech 6 KW IP 66 Inverter",
        brand: "CoreTech",
        image: CT_04,
        features: ["6 KW", "IP66"],
      },
      {
        id: "coretech-8kw-ip66",
        title: "CoreTech 8 KW IP 66 Inverter",
        brand: "CoreTech",
        image: CT_05,
        features: ["8 KW", "IP66"],
      },
      {
        id: "coretech-10kw-ip66",
        title: "CoreTech 10 KW IP 66 Inverter",
        brand: "CoreTech",
        image: CT_06,
        features: ["10 KW", "IP66"],
      },
      {
        id: "coretech-12-2kw-pv24000-ip21",
        title: "CoreTech 12.2 KW PV 24000 IP 21 Inverter",
        brand: "CoreTech",
        image: CT_07,
        features: ["12.2 KW", "PV 24000", "IP21"],
      },
    ],
  },

  {
    id: "batteries",
    category: "Batteries",
    icon: FaBatteryFull,
    items: [
      {
        id: "lv-topsun-12v-100ah",
        title: "LV TOPSUN 12 V 100Ah Lithium Battery",
        brand: "LV TOPSUN",
        image: LV_01,
        features: ["12 V", "100Ah Capacity", "Lithium Battery"],
      },
      {
        id: "lv-topsun-2-5kw-24v",
        title: "LVTOPSUN 2.5 KW (24 V) Lithium Battery",
        brand: "LVTOPSUN",
        image: LV_02,
        features: ["2.5 KW", "24 V", "Lithium Battery"],
      },
      {
        id: "lv-topsun-5kw-51v",
        title: "LVTOPSUN 5 KW (51V) Lithium Battery",
        brand: "LVTOPSUN",
        image: LV_03,
        features: ["5 KW", "51 V", "Lithium Battery"],
      },
      {
        id: "lv-topsun-7kw",
        title: "LVTOPSUN 7 KW Lithium Battery",
        brand: "LVTOPSUN",
        image: LV_04,
        features: ["7 KW", "Lithium Battery"],
      },
      {
        id: "lv-topsun-15kw-ip20",
        title: "LVTOPSUN 15 KW IP 20 Lithium Battery",
        brand: "LVTOPSUN",
        image: LV_05,
        features: ["15 KW", "IP20", "Lithium Battery"],
      },
      {
        id: "lv-topsun-16kw-ip65",
        title: "LV TOPSUN 16 KW IP 65 Lithium Battery",
        brand: "LV TOPSUN",
        image: LV_06,
        features: ["16 KW", "IP65", "Lithium Battery"],
      },
      {
        id: "lv-topsun-20kw",
        title: "LVTOPSUN 20 KW Lithium Battery",
        brand: "LVTOPSUN",
        image: LV_07,
        features: ["20 KW", "Lithium Battery"],
      },
      {
        id: "hwoo-5kw",
        title: "HWOO 5 KW Lithium Battery",
        brand: "HWOO",
        image: HW_01,
        features: ["5 KW", "Lithium Battery"],
      },
    ],
  },
];

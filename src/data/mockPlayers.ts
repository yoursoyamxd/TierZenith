export interface Player {
  id: string;
  name: string;
  region: "NA" | "EU" | "AS";
  overall: string;
  modes: {
    modeA: string;
    modeB: string;
    modeC: string;
    modeD: string;
    modeE: string;
  };
}

export const tierColors: Record<string, string> = {
  HT1: "#DC143C", // Crimson
  HT2: "#FF4500", // OrangeRed
  HT3: "#FFD700", // Gold
  HT4: "#32CD32", // LimeGreen
  HT5: "#1E90FF", // DodgerBlue
  MT1: "#9370DB", // MediumPurple
  MT2: "#20B2AA", // LightSeaGreen
  MT3: "#FF69B4", // HotPink
  MT4: "#F0E68C", // Khaki
  MT5: "#87CEEB", // SkyBlue
  LT1: "#A9A9A9", // DarkGray
  LT2: "#708090", // SlateGray
  LT3: "#696969", // DimGray
  LT4: "#505050", // Dark Gray
  LT5: "#2F2F2F", // Very Dark Gray
};

export const mockPlayers: Player[] = [
  {
    id: "1",
    name: "ShadowKing",
    region: "NA",
    overall: "HT1",
    modes: {
      modeA: "HT1",
      modeB: "HT2",
      modeC: "HT1",
      modeD: "HT1",
      modeE: "MT1",
    },
  },
  {
    id: "2",
    name: "FrostByte",
    region: "EU",
    overall: "HT2",
    modes: {
      modeA: "HT2",
      modeB: "HT1",
      modeC: "HT3",
      modeD: "HT2",
      modeE: "HT2",
    },
  },
  {
    id: "3",
    name: "PhoenixRising",
    region: "NA",
    overall: "HT3",
    modes: {
      modeA: "HT3",
      modeB: "HT3",
      modeC: "HT2",
      modeD: "HT3",
      modeE: "HT2",
    },
  },
  {
    id: "4",
    name: "NovaNova",
    region: "AS",
    overall: "HT3",
    modes: {
      modeA: "HT4",
      modeB: "HT2",
      modeC: "HT3",
      modeD: "HT3",
      modeE: "HT3",
    },
  },
  {
    id: "5",
    name: "IceStorm",
    region: "EU",
    overall: "HT4",
    modes: {
      modeA: "HT4",
      modeB: "HT4",
      modeC: "HT4",
      modeD: "HT3",
      modeE: "HT4",
    },
  },
  {
    id: "6",
    name: "ThunderStrike",
    region: "NA",
    overall: "HT5",
    modes: {
      modeA: "HT5",
      modeB: "HT4",
      modeC: "HT4",
      modeD: "HT5",
      modeE: "HT5",
    },
  },
  {
    id: "7",
    name: "SilentHunter",
    region: "AS",
    overall: "MT1",
    modes: {
      modeA: "MT1",
      modeB: "HT5",
      modeC: "MT1",
      modeD: "MT1",
      modeE: "MT2",
    },
  },
  {
    id: "8",
    name: "VoidWalker",
    region: "NA",
    overall: "MT2",
    modes: {
      modeA: "MT2",
      modeB: "MT2",
      modeC: "HT5",
      modeD: "MT2",
      modeE: "MT1",
    },
  },
  {
    id: "9",
    name: "CrimsonBlade",
    region: "EU",
    overall: "MT3",
    modes: {
      modeA: "MT3",
      modeB: "MT3",
      modeC: "MT2",
      modeD: "MT3",
      modeE: "MT3",
    },
  },
  {
    id: "10",
    name: "LunarEclipse",
    region: "AS",
    overall: "LT1",
    modes: {
      modeA: "LT1",
      modeB: "MT3",
      modeC: "LT2",
      modeD: "LT1",
      modeE: "MT2",
    },
  },
];

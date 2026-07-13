const FULFILLMENT_RATES = {
  nonPeak: {
    standard: {
      small: [
        { maxOz: 2, base: 2.43, low: 2.29, high: 3.06 },
        { maxOz: 4, base: 2.49, low: 2.38, high: 3.15 },
        { maxOz: 6, base: 2.56, low: 2.47, high: 3.24 },
        { maxOz: 8, base: 2.66, low: 2.56, high: 3.33 },
        { maxOz: 10, base: 2.77, low: 2.66, high: 3.43 },
        { maxOz: 12, base: 2.82, low: 2.76, high: 3.53 },
        { maxOz: 14, base: 2.92, low: 2.83, high: 3.60 },
        { maxOz: 16, base: 2.95, low: 2.88, high: 3.65 },
      ],
      large: [
        { maxOz: 4, base: 2.91, low: 2.91, high: 3.68 },
        { maxOz: 8, base: 3.13, low: 3.13, high: 3.90 },
        { maxOz: 12, base: 3.38, low: 3.38, high: 4.15 },
        { maxOz: 16, base: 3.78, low: 3.78, high: 4.55 },
        { maxLb: 1.25, base: 4.22, low: 4.22, high: 4.99 },
        { maxLb: 1.5, base: 4.60, low: 4.60, high: 5.37 },
        { maxLb: 1.75, base: 4.75, low: 4.75, high: 5.52 },
        { maxLb: 2, base: 5.00, low: 5.00, high: 5.77 },
        { maxLb: 2.25, base: 5.10, low: 5.10, high: 5.87 },
        { maxLb: 2.5, base: 5.28, low: 5.28, high: 6.05 },
        { maxLb: 2.75, base: 5.44, low: 5.44, high: 6.21 },
        { maxLb: 3, base: 5.85, low: 5.85, high: 6.62 },
        { maxLb: 20, base: 6.15, perUnit: 0.08, unit: 0.25, low: 6.15, high: 6.92 },
      ],
      smallBulky: [
        { maxLb: 50, base: 8.84, perUnit: 0.38, unit: 1, low: 6.78, high: 9.61 },
      ],
      largeBulky: [
        { maxLb: 50, base: 8.84, perUnit: 0.38, unit: 1, low: 8.58, high: 9.61 },
      ],
      oversize: [
        { maxLb: 50, base: 25.56, perUnit: 0.38, unit: 1, low: 25.56, high: 26.33 },
        { maxLb: 70, base: 39.35, perUnit: 0.75, unit: 1, low: 36.55, high: 40.12, threshold: 51 },
        { maxLb: 150, base: 54.04, perUnit: 0.75, unit: 1, low: 50.55, high: 54.81, threshold: 71 },
        { maxLb: Infinity, base: 194.18, perUnit: 0.19, unit: 1, low: 194.18, high: 194.95, threshold: 151 },
      ],
    },
    dangerous: {
      standard: {
        small: [
          { maxOz: 2, base: 3.40, low: 3.26, high: 4.03 },
          { maxOz: 4, base: 3.43, low: 3.32, high: 4.09 },
          { maxOz: 6, base: 3.48, low: 3.39, high: 4.16 },
          { maxOz: 8, base: 3.55, low: 3.45, high: 4.22 },
          { maxOz: 10, base: 3.64, low: 3.53, high: 4.30 },
          { maxOz: 12, base: 3.65, low: 3.59, high: 4.36 },
          { maxOz: 14, base: 3.73, low: 3.64, high: 4.41 },
          { maxOz: 16, base: 3.77, low: 3.70, high: 4.47 },
        ],
        large: [
          { maxOz: 4, base: 3.73, low: 3.73, high: 4.50 },
          { maxOz: 8, base: 3.94, low: 3.94, high: 4.71 },
          { maxOz: 12, base: 4.17, low: 4.17, high: 4.94 },
          { maxOz: 16, base: 4.37, low: 4.37, high: 5.14 },
          { maxLb: 1.25, base: 4.82, low: 4.82, high: 5.59 },
          { maxLb: 1.5, base: 5.20, low: 5.20, high: 5.97 },
          { maxLb: 1.75, base: 5.35, low: 5.35, high: 6.12 },
          { maxLb: 2, base: 5.49, low: 5.49, high: 6.26 },
          { maxLb: 2.25, base: 5.56, low: 5.56, high: 6.33 },
          { maxLb: 2.5, base: 5.74, low: 5.74, high: 6.51 },
          { maxLb: 2.75, base: 5.90, low: 5.90, high: 6.67 },
          { maxLb: 3, base: 6.31, low: 6.31, high: 7.08 },
          { maxLb: 20, base: 6.61, perUnit: 0.08, unit: 0.25, low: 6.61, high: 7.38 },
        ],
        smallBulky: [
          { maxLb: 50, base: 9.56, perUnit: 0.38, unit: 1, low: 7.50, high: 10.33 },
        ],
        largeBulky: [
          { maxLb: 50, base: 9.56, perUnit: 0.38, unit: 1, low: 9.30, high: 10.33 },
        ],
        oversize: [
          { maxLb: 50, base: 27.67, perUnit: 0.38, unit: 1, low: 27.67, high: 28.44 },
          { maxLb: 70, base: 42.56, perUnit: 0.75, unit: 1, low: 39.76, high: 43.33, threshold: 51 },
          { maxLb: 150, base: 61.17, perUnit: 0.75, unit: 1, low: 57.68, high: 61.94, threshold: 71 },
          { maxLb: Infinity, base: 218.76, perUnit: 0.19, unit: 1, low: 218.76, high: 219.53, threshold: 151 },
        ],
      },
    },
  },
};

const PROFIT_DEFAULTS = {
  automotive: { referralRate: 0.12, minFee: 0.3 },
  tires: { referralRate: 0.10, minFee: 0.3 },
  other: { referralRate: 0.15, minFee: 0.3 },
};

const RETURN_RULES = {
  minimumMonthlyShipments: 25,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

const state = {
  fee: null,
  view: "fees",
};

function round(n) {
  return Math.round((Number(n) || 0) * 100) / 100;
}

function fmtMoney(value) {
  const n = Number(value) || 0;
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toFixed(2)}`;
}

function fmtCny(value) {
  const n = Number(value) || 0;
  const sign = n < 0 ? "-" : "";
  return `${sign}¥${Math.abs(n).toFixed(2)}`;
}

function fmtPct(value) {
  return `${((Number(value) || 0) * 100).toFixed(2)}%`;
}

function fmtStrikeMoney(value) {
  return `<s>${fmtMoney(value)}</s>`;
}

function dimensionalWeightLb(lengthIn, widthIn, heightIn) {
  return (Number(lengthIn) || 0) * (Number(widthIn) || 0) * (Number(heightIn) || 0) / 139;
}

function cmToIn(value) {
  return (Number(value) || 0) / 2.54;
}

function kgToLb(value) {
  return (Number(value) || 0) * 2.2046226218;
}

function lbToKg(value) {
  return (Number(value) || 0) / 2.2046226218;
}

function cubicFeetFromCm(lengthCm, widthCm, heightCm) {
  return ((Number(lengthCm) || 0) * (Number(widthCm) || 0) * (Number(heightCm) || 0)) / 28316.846592;
}

function determineSizeTier(lengthIn, widthIn, heightIn, shippingWeightLb) {
  const l = Number(lengthIn) || 0;
  const w = Number(widthIn) || 0;
  const h = Number(heightIn) || 0;
  const maxSide = Math.max(l, w, h);
  const dims = [l, w, h].sort((a, b) => b - a);
  const girth = 2 * (dims[1] + dims[2]);
  const lengthPlusGirth = maxSide + girth;

  if (maxSide > 96 || lengthPlusGirth > 130 || shippingWeightLb > 150) return "oversize";
  if (l <= 15 && w <= 12 && h <= 0.75 && shippingWeightLb <= 1) return "small";
  if (l <= 18 && w <= 14 && h <= 8) return "large";
  if (l <= 37 && w <= 28 && h <= 20) return "smallBulky";
  if (l <= 59 && w <= 33 && h <= 33) return "largeBulky";
  return "oversize";
}

function pickFulfillmentRate(season, goodsType, sizeTier, shippingWeightLb, salePrice) {
  const seasonRates = FULFILLMENT_RATES[season] || FULFILLMENT_RATES.nonPeak;
  const typeRates = goodsType === "dangerous" ? seasonRates.dangerous.standard : seasonRates.standard;
  const pool = typeRates[sizeTier];
  if (!pool) return null;
  const priceBand = salePrice < 10 ? "low" : salePrice <= 50 ? "base" : "high";
  const weightOz = shippingWeightLb * 16;
  let entry = null;
  if (sizeTier === "small" || sizeTier === "large") {
    entry = pool.find((row) => (row.maxOz && weightOz <= row.maxOz) || (row.maxLb && shippingWeightLb <= row.maxLb));
  } else {
    entry = pool.find((row) => shippingWeightLb <= row.maxLb);
  }
  if (!entry) entry = pool[pool.length - 1];
  let amount = entry[priceBand] ?? entry.base ?? 0;
  if (entry.perUnit) {
    const threshold = entry.threshold ?? (entry.unit === 0.25 ? 3 : 1);
    const unitsAbove = Math.max(0, Math.ceil((shippingWeightLb - threshold) / entry.unit));
    amount = (entry.base ?? 0) + unitsAbove * entry.perUnit;
  }
  return { entry, amount };
}

function isStandardSize(sizeTier) {
  return sizeTier === "small" || sizeTier === "large";
}

function calculateStorageFee(sizeTier, goodsType, volumeCuft, units, season, hasNewSelectionBenefit) {
  if (hasNewSelectionBenefit) return 0;
  const standard = isStandardSize(sizeTier);
  const peak = season === "peak";
  if (goodsType === "dangerous") {
    const rate = peak ? (standard ? 3.63 : 2.43) : (standard ? 0.99 : 0.78);
    return volumeCuft * units * rate;
  }
  const rate = peak ? (standard ? 2.40 : 1.40) : (standard ? 0.78 : 0.56);
  return volumeCuft * units * rate;
}

function calculateAgedInventoryFee(volumeCuft, units, ageDays) {
  if (ageDays < 181) return 0;
  let cubicRate = 0;
  let perUnitRate = 0;
  if (ageDays <= 210) cubicRate = 0.50;
  else if (ageDays <= 240) cubicRate = 1.00;
  else if (ageDays <= 270) cubicRate = 1.50;
  else if (ageDays <= 300) cubicRate = 5.45;
  else if (ageDays <= 330) cubicRate = 5.70;
  else if (ageDays <= 365) cubicRate = 5.90;
  else if (ageDays <= 455) {
    cubicRate = 6.90;
    perUnitRate = 0.30;
  } else {
    cubicRate = 7.90;
    perUnitRate = 0.35;
  }
  return Math.max(volumeCuft * units * cubicRate, units * perUnitRate);
}

function calculateInboundFee(sizeTier, shippingWeightLb, inboundPlan) {
  if (inboundPlan === "optimized") return 0;
  const partialFactor = inboundPlan === "partial" ? 0.55 : 1;
  if (isStandardSize(sizeTier)) {
    if (sizeTier === "small") return (shippingWeightLb <= 0.5 ? 0.23 : 0.24) * partialFactor;
    if (shippingWeightLb <= 0.75) return 0.30 * partialFactor;
    if (shippingWeightLb <= 1.5) return 0.37 * partialFactor;
    if (shippingWeightLb <= 3) return 0.47 * partialFactor;
    if (shippingWeightLb <= 5) return 0.57 * partialFactor;
    if (shippingWeightLb <= 7) return 0.69 * partialFactor;
    if (shippingWeightLb <= 10) return 0.81 * partialFactor;
    if (shippingWeightLb <= 15) return 0.97 * partialFactor;
    return 1.23 * partialFactor;
  }
  if (sizeTier === "largeBulky") {
    if (shippingWeightLb <= 5) return (inboundPlan === "partial" ? 0.90 : 1.55);
    if (shippingWeightLb <= 12) return (inboundPlan === "partial" ? 1.23 : 2.50);
    if (shippingWeightLb <= 28) return (inboundPlan === "partial" ? 1.56 : 3.75);
    if (shippingWeightLb <= 42) return (inboundPlan === "partial" ? 2.00 : 5.15);
    return (inboundPlan === "partial" ? 2.37 : 6.00);
  }
  if (shippingWeightLb <= 5) return (inboundPlan === "partial" ? 0.82 : 1.35);
  if (shippingWeightLb <= 12) return (inboundPlan === "partial" ? 1.20 : 2.08);
  if (shippingWeightLb <= 28) return (inboundPlan === "partial" ? 1.50 : 3.12);
  if (shippingWeightLb <= 42) return (inboundPlan === "partial" ? 1.94 : 4.45);
  return (inboundPlan === "partial" ? 2.28 : 5.38);
}

function calculateReturnProcessingFee(sizeTier, shippingWeightLb) {
  const weightOz = shippingWeightLb * 16;
  let perUnit = 0;
  if (sizeTier === "small") {
    if (weightOz <= 2) perUnit = 1.78;
    else if (weightOz <= 4) perUnit = 1.84;
    else if (weightOz <= 6) perUnit = 1.90;
    else if (weightOz <= 8) perUnit = 1.96;
    else if (weightOz <= 10) perUnit = 2.02;
    else if (weightOz <= 12) perUnit = 2.08;
    else if (weightOz <= 14) perUnit = 2.14;
    else perUnit = 2.21;
  } else if (sizeTier === "large") {
    if (weightOz <= 4) perUnit = 2.36;
    else if (weightOz <= 8) perUnit = 2.70;
    else if (weightOz <= 12) perUnit = 3.05;
    else if (weightOz <= 16) perUnit = 3.39;
    else if (shippingWeightLb <= 1.5) perUnit = 3.70;
    else if (shippingWeightLb <= 1.75) perUnit = 4.32;
    else if (shippingWeightLb <= 2) perUnit = 4.66;
    else if (shippingWeightLb <= 2.25) perUnit = 4.68;
    else if (shippingWeightLb <= 2.5) perUnit = 4.71;
    else if (shippingWeightLb <= 2.75) perUnit = 4.73;
    else perUnit = 5.00 + Math.max(0, Math.ceil((shippingWeightLb - 3) / 0.25)) * 0.05;
  } else if (sizeTier === "smallBulky" || sizeTier === "largeBulky") {
    perUnit = 6.74 + Math.max(0, Math.ceil(shippingWeightLb - 1)) * 0.32;
  } else if (shippingWeightLb <= 50) {
    perUnit = 26.33;
  } else if (shippingWeightLb <= 70) {
    perUnit = 40.12 + Math.max(0, Math.ceil(shippingWeightLb - 51)) * 0.75;
  } else if (shippingWeightLb <= 150) {
    perUnit = 52.45 + Math.max(0, Math.ceil(shippingWeightLb - 71)) * 0.75;
  } else {
    perUnit = 157.35 + Math.max(0, Math.ceil(shippingWeightLb - 151)) * 0.19;
  }
  return perUnit;
}

function calculateRemovalDisposalFee(sizeTier, shippingWeightLb) {
  if (isStandardSize(sizeTier)) {
    if (shippingWeightLb <= 0.5) return 1.04;
    if (shippingWeightLb <= 1) return 1.53;
    if (shippingWeightLb <= 2) return 2.27;
    return 2.89 + Math.max(0, Math.ceil(shippingWeightLb - 2)) * 1.06;
  }
  if (shippingWeightLb <= 1) return 3.12;
  if (shippingWeightLb <= 2) return 4.30;
  if (shippingWeightLb <= 4) return 6.36;
  if (shippingWeightLb <= 10) return 10.04;
  return 14.32 + Math.max(0, Math.ceil(shippingWeightLb - 10)) * 1.06;
}

function calculateLowInventoryFee(options) {
  const {
    sizeTier,
    productWeightLb,
    shippingWeightLb,
    longDays,
    shortDays,
    unitsSold7d,
    newSellerExempt,
    newSelectionExempt,
    aglExempt,
  } = options;

  if (newSellerExempt || newSelectionExempt || aglExempt) return 0;
  if (unitsSold7d < 20) return 0;
  if (longDays >= 28 || shortDays >= 28) return 0;

  const feeDays = Math.max(longDays, shortDays);
  const band = feeDays < 14 ? "lowest" : feeDays < 21 ? "middle" : "highest";
  const rateByBand = {
    lowest: {
      small: 0.89,
      largeLight: 0.97,
      largeHeavy: 1.11,
      smallBulky: 1.85,
      largeBulky: 2.09,
    },
    middle: {
      small: 0.63,
      largeLight: 0.70,
      largeHeavy: 0.87,
      smallBulky: 1.02,
      largeBulky: 1.15,
    },
    highest: {
      small: 0.32,
      largeLight: 0.36,
      largeHeavy: 0.47,
      smallBulky: 0.51,
      largeBulky: 0.57,
    },
  }[band];

  if (sizeTier === "small" && productWeightLb <= 1) return rateByBand.small;
  if (sizeTier === "large" && shippingWeightLb <= 3) return rateByBand.largeLight;
  if (sizeTier === "large" && shippingWeightLb <= 20) return rateByBand.largeHeavy;
  if (sizeTier === "smallBulky" && shippingWeightLb <= 50) return rateByBand.smallBulky;
  if (sizeTier === "largeBulky" && shippingWeightLb <= 50) return rateByBand.largeBulky;
  return 0;
}

function renderFeeRows(fee) {
  const rows = [
    ["FBA 运费", fee.total],
    ["月度仓储费（单件）", fee.storageFee],
    ["超龄仓储费（单件）", fee.agedFee],
    ["入库配置费", fee.inboundFee],
    ["退货处理费（单件）", fee.returnProcessingFee],
    ["货物移除费", fee.removalFee],
    ["货物弃置费", fee.disposalFee],
    ["低库存水平费（单件）", fee.lowInventoryFee],
    ["单件费用合计", fee.totalAllFees],
  ];
  $("#feeRows").innerHTML = rows.map(([label, value]) => {
    const cls = label === "单件费用合计" ? "breakdown-row total" : "breakdown-row";
    return `<div class="${cls}"><span>${label}</span><span class="leader"></span><strong>${fmtMoney(value)}</strong></div>`;
  }).join("");
}

function feeAdvice(sizeTier, shippingWeightLb, salePrice) {
  if (sizeTier === "small" && shippingWeightLb > 0 && shippingWeightLb < 1) return "小号标准尺寸靠近低费率区间，重量如果能压到更低档位，费用会继续下探。";
  if (sizeTier === "large" && shippingWeightLb <= 1.25) return "当前在大号标准尺寸轻量档，包装再瘦一点会更接近低档费率。";
  if (sizeTier === "oversize") return "已经进入超大件区间，建议优先看包装尺寸是否能回到标准/大件边界。";
  if (salePrice < 10) return "当前属于低价商品区间，配送费会自动更低。";
  return "可重点检查包装体积、售价档位和 SIPP 条件。";
}

function calculateFee() {
  const lengthCm = Number($("#lengthCm").value) || 0;
  const widthCm = Number($("#widthCm").value) || 0;
  const heightCm = Number($("#heightCm").value) || 0;
  const weightKg = Number($("#weightKg").value) || 0;
  const lengthIn = cmToIn(lengthCm);
  const widthIn = cmToIn(widthCm);
  const heightIn = cmToIn(heightCm);
  const weightLb = kgToLb(weightKg);
  const salePrice = Number($("#salePrice").value) || 0;
  const season = $("#season").value;
  const goodsType = "standard";
  const fuelSurcharge = $("#fuelSurcharge").checked;
  const sippCertified = $("#sippCertified").checked;
  const newSelectionBenefit = $("#newSelectionBenefit").checked;
  const agedInventoryFeeEnabled = $("#agedInventoryFeeEnabled").checked;
  const returnProcessingFeeEnabled = $("#returnProcessingFeeEnabled").checked;
  const removalFeeEnabled = $("#removalFeeEnabled").checked;
  const disposalFeeEnabled = $("#disposalFeeEnabled").checked;
  const lowInventoryFeeEnabled = $("#lowInventoryFeeEnabled").checked;
  $("#lowInventoryFields").classList.toggle("is-hidden", !lowInventoryFeeEnabled);
  const lowInventoryLongDays = Number($("#lowInventoryLongDays").value) || 0;
  const lowInventoryShortDays = Number($("#lowInventoryShortDays").value) || 0;
  const lowInventoryUnits7d = Number($("#lowInventoryUnits7d").value) || 0;
  const lowInventoryNewSellerExempt = $("#lowInventoryNewSellerExempt").checked;
  const lowInventoryAglExempt = $("#lowInventoryAglExempt").checked;
  const unitCount = 1;
  const inboundPlan = $("#inboundPlan").value;
  const dimWeight = dimensionalWeightLb(lengthIn, widthIn, heightIn);
  const shippingWeight = goodsType === "standard" || goodsType === "dangerous"
    ? Math.max(weightLb, dimWeight)
    : Math.max(weightLb, dimWeight);
  const sizeTier = determineSizeTier(lengthIn, widthIn, heightIn, shippingWeight);
  const effectiveSalePrice = salePrice;
  const fulfillment = pickFulfillmentRate(season, goodsType, sizeTier, shippingWeight, effectiveSalePrice);
  const baseFee = fulfillment ? fulfillment.amount : 0;
  const fuelFee = fuelSurcharge ? baseFee * 0.035 : 0;
  const sippDiscount = sippCertified && sizeTier !== "oversize" ? Math.min(0.35, baseFee * 0.08) : 0;
  const total = baseFee + fuelFee - sippDiscount;
  const priceBand = effectiveSalePrice < 10 ? "< $10" : effectiveSalePrice <= 50 ? "$10 ~ $50" : "> $50";
  const tierLabel = {
    small: "小号标准尺寸",
    large: "大号标准尺寸",
    smallBulky: "小号大件",
    largeBulky: "大号大件",
    oversize: "超大件",
  }[sizeTier];

  const volumeCuft = cubicFeetFromCm(lengthCm, widthCm, heightCm);
  const storageFee = calculateStorageFee(sizeTier, goodsType, volumeCuft, unitCount, season, newSelectionBenefit);
  const agedFee = agedInventoryFeeEnabled ? calculateAgedInventoryFee(volumeCuft, unitCount, 181) : 0;
  const inboundFee = calculateInboundFee(sizeTier, shippingWeight, inboundPlan);
  const returnFee = returnProcessingFeeEnabled ? calculateReturnProcessingFee(sizeTier, shippingWeight) : 0;
  const removalFee = removalFeeEnabled ? calculateRemovalDisposalFee(sizeTier, shippingWeight) : 0;
  const disposalFee = disposalFeeEnabled ? calculateRemovalDisposalFee(sizeTier, shippingWeight) : 0;
  const lowInventoryFee = lowInventoryFeeEnabled ? calculateLowInventoryFee({
    sizeTier,
    productWeightLb: weightLb,
    shippingWeightLb: shippingWeight,
    longDays: lowInventoryLongDays,
    shortDays: lowInventoryShortDays,
    unitsSold7d: lowInventoryUnits7d,
    newSellerExempt: lowInventoryNewSellerExempt,
    newSelectionExempt: newSelectionBenefit,
    aglExempt: lowInventoryAglExempt,
  }) : 0;
  const totalOptionalFees = storageFee + agedFee + inboundFee + returnFee + removalFee + disposalFee + lowInventoryFee;

  state.fee = {
    lengthCm,
    widthCm,
    heightCm,
    weightKg,
    dimWeight,
    shippingWeight,
    dimWeightKg: lbToKg(dimWeight),
    shippingWeightKg: lbToKg(shippingWeight),
    sizeTier,
    tierLabel,
    baseFee,
    fuelFee,
    sippDiscount,
    total,
    priceBand,
    season,
    goodsType,
    salePrice,
    agedInventoryFeeEnabled,
    returnProcessingFeeEnabled,
    removalFeeEnabled,
    disposalFeeEnabled,
    lowInventoryFeeEnabled,
    lowInventoryLongDays,
    lowInventoryShortDays,
    lowInventoryUnits7d,
    lowInventoryNewSellerExempt,
    lowInventoryAglExempt,
    newSelectionBenefit,
    unitCount,
    inboundPlan,
    volumeCuft,
    storageFee,
    agedFee,
    inboundFee,
    returnProcessingFee: returnFee,
    removalFee,
    disposalFee,
    lowInventoryFee,
    totalAllFees: total + totalOptionalFees,
  };
  if ($("#syncFee").checked) {
    $("#profitSalePrice").value = salePrice.toFixed(2);
  }
  renderFee();
  renderProfit();
}

function renderFee() {
  const fee = state.fee;
  if (!fee) return;
  $("#feeStatus").textContent = `普通商品 / ${fee.tierLabel}`;
  $("#dimWeight").textContent = `${fee.dimWeightKg.toFixed(2)} kg`;
  $("#shippingWeight").textContent = `${fee.shippingWeightKg.toFixed(2)} kg`;
  $("#priceBand").textContent = fee.priceBand;
  $("#sizeTier").textContent = fee.tierLabel;
  $("#baseFee").textContent = fmtMoney(fee.baseFee);
  $("#fuelFee").textContent = fmtMoney(fee.fuelFee);
  $("#sippFee").textContent = fmtMoney(-fee.sippDiscount);
  $("#feeTotal").textContent = fmtMoney(fee.total);
  $("#feeSubtitle").textContent = `普通商品 / ${fee.priceBand} / ${fee.season === "peak" ? "旺季" : "非旺季"}`;
  const optionalSelected = [
    fee.agedInventoryFeeEnabled,
    fee.returnProcessingFeeEnabled,
    fee.removalFeeEnabled,
    fee.disposalFeeEnabled,
    fee.lowInventoryFeeEnabled,
  ].some(Boolean);
  const optionalAdvice = optionalSelected ? " 已勾选的潜在费用会单独列入总览，未勾选的项目显示为 0。" : "";
  const lowInventoryAdvice = fee.lowInventoryFeeEnabled && fee.lowInventoryFee === 0
    ? " 低库存水平费可能因历史供货天数、近 7 天销量、豁免条件或尺寸分段不适用而为 0。"
    : "";
  $("#feeAdvice").textContent = `${feeAdvice(fee.sizeTier, fee.shippingWeight, fee.salePrice)}${optionalAdvice}${lowInventoryAdvice}`;
  renderFeeRows(fee);
}

function calculateProfit() {
  const category = $("#referralCategory").value;
  const params = PROFIT_DEFAULTS[category];
  const salePrice = Number($("#profitSalePrice").value) || 0;
  const productCostCny = Number($("#productCostCny").value) || 0;
  const firstLegCostPerKgCny = Number($("#firstLegCostPerKgCny").value) || 0;
  const productWeightKg = state.fee ? state.fee.weightKg : Number($("#weightKg").value) || 0;
  const fulfillmentFee = $("#syncFee").checked && state.fee ? state.fee.total : Number($("#profitFulfillmentFee").value) || 0;
  const exchangeRate = Number($("#exchangeRate").value) || 0;
  const advertisingRate = (Number($("#advertisingRate").value) || 0) / 100;
  const returnRate = (Number($("#manualReturnRate").value) || 0) / 100;
  const returnFeeThresholdEnabled = $("#returnFeeThresholdEnabled").checked;
  const targetMarginRate = (Number($("#targetMarginRate").value) || 0) / 100;
  const competitorMinPrice = Number($("#competitorMinPrice").value) || 0;
  const competitorMaxPrice = Number($("#competitorMaxPrice").value) || 0;
  const taxRefundCny = productCostCny * 0.13;
  const newSellerBenefitPeriod = $("#newSellerBenefitPeriod").checked;
  const productCostLocal = exchangeRate > 0 ? productCostCny / exchangeRate : 0;
  const firstLegCostCny = firstLegCostPerKgCny * productWeightKg;
  const firstLegCost = exchangeRate > 0 ? firstLegCostCny / exchangeRate : 0;
  const referralFeeBeforeBenefit = Math.max(salePrice * params.referralRate, params.minFee);
  const referralFee = referralFeeBeforeBenefit;
  const advertisingFee = salePrice * advertisingRate;
  const baseReturnProcessingFee = state.fee
    ? calculateReturnProcessingFee(state.fee.sizeTier, state.fee.shippingWeight)
    : 0;
  const returnFeeZeroByToggle = returnFeeThresholdEnabled;
  const returnFeeBeforeBenefit = returnFeeZeroByToggle || baseReturnProcessingFee <= 0 ? 0 : baseReturnProcessingFee * returnRate;
  const returnFee = returnFeeBeforeBenefit;
  const storageFee = state.fee ? state.fee.storageFee : 0;
  const effectiveStorageFee = storageFee;
  const fixedOperatingCost = productCostLocal + firstLegCost + fulfillmentFee + returnFee + storageFee;
  const totalCost = fixedOperatingCost + referralFee + advertisingFee;
  const profit = salePrice - totalCost;
  const margin = salePrice > 0 ? profit / salePrice : 0;

  const pricingFixedCostBeforeBenefits = productCostLocal + firstLegCost + fulfillmentFee + returnFeeBeforeBenefit + storageFee;
  const referralBenefitRate = newSellerBenefitPeriod ? 0.10 : 0;
  const returnBenefitCredit = newSellerBenefitPeriod ? returnFeeBeforeBenefit : 0;
  const storageBenefitCredit = newSellerBenefitPeriod ? storageFee : 0;
  const effectiveReferralRate = Math.max(params.referralRate - referralBenefitRate, 0);
  const variableRate = effectiveReferralRate + advertisingRate;
  const fixedBaseCostBeforeBenefits = pricingFixedCostBeforeBenefits;
  const fixedBaseCostAfterBenefits = pricingFixedCostBeforeBenefits - returnBenefitCredit - storageBenefitCredit;
  const breakEvenPrice = variableRate < 1 ? fixedBaseCostAfterBenefits / (1 - variableRate) : 0;
  const targetPriceDenominator = 1 - variableRate - targetMarginRate;
  const targetProfitPrice = targetPriceDenominator > 0 ? fixedBaseCostAfterBenefits / targetPriceDenominator : 0;
  const competitorLow = Math.min(competitorMinPrice, competitorMaxPrice);
  const competitorHigh = Math.max(competitorMinPrice, competitorMaxPrice);
  const recommendedPrice = competitorHigh > 0
    ? Math.min(Math.max(targetProfitPrice, competitorLow), competitorHigh)
    : targetProfitPrice;
  const recommendedPriceNote = competitorHigh <= 0
    ? "未输入竞品区间，使用目标利润价。"
    : targetProfitPrice < competitorLow
      ? "目标利润价低于竞品区间，建议贴近竞品最低价。"
      : targetProfitPrice > competitorHigh
        ? "目标利润价高于竞品区间，建议先按竞品最高价评估空间。"
        : "目标利润价落在竞品区间内。";
  const taxRefundUsd = exchangeRate > 0 ? taxRefundCny / exchangeRate : 0;
  const pricingReferralFeeBeforeBenefit = Math.max(recommendedPrice * params.referralRate, params.minFee);
  const referralBenefitCredit = newSellerBenefitPeriod
    ? Math.min(pricingReferralFeeBeforeBenefit, recommendedPrice * referralBenefitRate)
    : 0;
  const pricingReferralFee = pricingReferralFeeBeforeBenefit - referralBenefitCredit;
  const pricingAdvertisingFee = recommendedPrice * advertisingRate;
  const totalBenefitCredit = referralBenefitCredit + returnBenefitCredit + storageBenefitCredit;
  const pricingTotalCost = fixedBaseCostAfterBenefits + pricingReferralFee + pricingAdvertisingFee;
  const variableFeesAtPrice = (price) => {
    const baseReferralFee = Math.max(price * params.referralRate, params.minFee);
    const benefitCredit = newSellerBenefitPeriod ? Math.min(baseReferralFee, price * referralBenefitRate) : 0;
    const referral = baseReferralFee - benefitCredit;
    const advertising = price * advertisingRate;
    return {
      baseReferralFee,
      benefitCredit,
      referral,
      advertising,
      total: referral + advertising,
    };
  };
  const breakEvenVariableFees = variableFeesAtPrice(breakEvenPrice);
  const targetVariableFees = variableFeesAtPrice(targetProfitPrice);
  const recommendedVariableFees = variableFeesAtPrice(recommendedPrice);

  return {
    category,
    salePrice,
    productCostLocal,
    productWeightKg,
    firstLegCostPerKgCny,
    firstLegCostCny,
    firstLegCost,
    fulfillmentFee,
    referralFee,
    referralFeeBeforeBenefit,
    referralBenefitRate,
    referralBenefitCredit,
    pricingReferralFeeBeforeBenefit,
    pricingReferralFee,
    pricingAdvertisingFee,
    pricingTotalCost,
    breakEvenVariableFees,
    targetVariableFees,
    recommendedVariableFees,
    effectiveReferralRate,
    advertisingFee,
    advertisingRate,
    targetMarginRate,
    competitorLow,
    competitorHigh,
    taxRefundCny,
    taxRefundUsd,
    newSellerBenefitPeriod,
    returnFee,
    returnFeeBeforeBenefit,
    storageFee,
    effectiveStorageFee,
    returnBenefitCredit,
    storageBenefitCredit,
    totalBenefitCredit,
    fixedBaseCostBeforeBenefits,
    fixedBaseCostAfterBenefits,
    totalCost,
    profit,
    margin,
    variableRate,
    breakEvenPrice,
    targetProfitPrice,
    recommendedPrice,
    recommendedPriceNote,
    exchangeRate,
    returnRate,
    baseReturnProcessingFee,
    returnFeeThresholdEnabled,
    returnFeeZeroByToggle,
  };
}

function renderProfit() {
  const p = calculateProfit();
  $("#profitValue").textContent = fmtMoney(p.profit);
  $("#profitHint").textContent = p.profit < 0 ? "/ 单件亏损" : "/ 单件利润";
  $("#profitCny").textContent = `≈ ${fmtCny(p.profit * p.exchangeRate)}`;
  $("#marginValue").textContent = fmtPct(p.margin);
  $("#profitHero").classList.toggle("is-loss", p.profit < 0);
  if ($("#syncFee").checked && state.fee) {
    $("#profitFulfillmentFee").value = round(state.fee.total).toFixed(2);
  }

  const rows = [
    ["售价", p.salePrice, false],
    ["产品成本", -p.productCostLocal, true],
    ["头程费用", -p.firstLegCost, true],
    ["亚马逊配送费", -p.fulfillmentFee, true],
    ["佣金", -p.referralFee, true],
    ["广告费", -p.advertisingFee, true],
    ["退货处理费", -p.returnFee, true],
    ["月度仓储费", -p.effectiveStorageFee, true],
    ["单件利润", p.profit, false],
  ];
  $("#breakdownRows").innerHTML = rows.map(([label, value, negative]) => {
    const cls = value < 0 || label === "单件利润" ? "breakdown-row total" : "breakdown-row";
    return `<div class="${cls}"><span>${label}</span><span class="leader"></span><strong>${fmtMoney(value)}</strong></div>`;
  }).join("");

  const notes = {
    automotive: [
      ["佣金", "售价 × 12%（最低 $0.30）"],
      ["头程费用", `包装重量 ${p.productWeightKg.toFixed(2)} kg × ¥${p.firstLegCostPerKgCny.toFixed(2)} / 汇率`],
      ["广告费", `售价 × ${fmtPct(p.advertisingRate)}`],
      ["退货处理", `单次 ${fmtMoney(p.baseReturnProcessingFee)} × 退货率 ${fmtPct(p.returnRate)}`],
      ["仓租", "引用费用计算器的单件月度仓储费"],
    ],
    tires: [
      ["佣金", "售价 × 10%（最低 $0.30）"],
      ["头程费用", `包装重量 ${p.productWeightKg.toFixed(2)} kg × ¥${p.firstLegCostPerKgCny.toFixed(2)} / 汇率`],
      ["广告费", `售价 × ${fmtPct(p.advertisingRate)}`],
      ["退货处理", `单次 ${fmtMoney(p.baseReturnProcessingFee)} × 退货率 ${fmtPct(p.returnRate)}`],
      ["仓租", "引用费用计算器的单件月度仓储费"],
    ],
    other: [
      ["佣金", "售价 × 15%（最低 $0.30）"],
      ["头程费用", `包装重量 ${p.productWeightKg.toFixed(2)} kg × ¥${p.firstLegCostPerKgCny.toFixed(2)} / 汇率`],
      ["广告费", `售价 × ${fmtPct(p.advertisingRate)}`],
      ["退货处理", `单次 ${fmtMoney(p.baseReturnProcessingFee)} × 退货率 ${fmtPct(p.returnRate)}`],
      ["仓租", "引用费用计算器的单件月度仓储费"],
    ],
  };
  $("#rateNotes").innerHTML = notes[p.category].map(([name, rule]) => `<div class="rate-item"><span>${name}</span><strong>${rule}</strong></div>`).join("");
  $("#returnRuleText").textContent = p.returnFeeZeroByToggle
    ? `退货处理费始终展示为费用项；费用页单次退货处理费为 ${fmtMoney(p.baseReturnProcessingFee)}。当前勾选了“月发货少于 25 件时，退货处理费按 0 计”，所以利润页退货处理费为 $0.00。原始规则中，汽车和户外动力设备退货率阈值为 9.1%，轮胎为 8.7%，月发货少于 25 件不计费。`
    : `退货处理费始终展示为费用项；费用页单次退货处理费为 ${fmtMoney(p.baseReturnProcessingFee)}。当前未勾选该开关，所以利润页退货处理费按 ${fmtMoney(p.baseReturnProcessingFee)} × ${fmtPct(p.returnRate)} 摊销，为 ${fmtMoney(p.returnFee)}。原始规则中，汽车和户外动力设备退货率阈值为 9.1%，轮胎为 8.7%，月发货少于 25 件不计费。`;
  renderPricingAnalysis(p);
}

function renderCompactRows(target, rows) {
  $(target).innerHTML = rows.map((row) => {
    const cls = row.total ? "breakdown-row total" : "breakdown-row";
    return `<div class="${cls}"><span>${row.label}</span><span class="leader"></span><strong>${row.value}</strong></div>`;
  }).join("");
}

function renderBenefitValue(original, credit, enabled) {
  if (!enabled || credit <= 0) return fmtMoney(original);
  return `${fmtStrikeMoney(original)} <span class="benefit-price">${fmtMoney(original - credit)}</span>`;
}

function renderPricingAnalysis(p) {
  $("#recommendedPriceValue").textContent = fmtMoney(p.recommendedPrice);
  $("#recommendedPriceNote").textContent = p.recommendedPriceNote;
  $("#breakEvenPriceValue").textContent = fmtMoney(p.breakEvenPrice);
  $("#targetProfitPriceValue").textContent = fmtMoney(p.targetProfitPrice);

  renderCompactRows("#baseCostRows", [
    { label: "产品成本", value: fmtMoney(p.productCostLocal) },
    { label: "头程费用", value: fmtMoney(p.firstLegCost) },
    { label: "亚马逊配送费", value: fmtMoney(p.fulfillmentFee) },
    { label: "退货处理费", value: renderBenefitValue(p.returnFeeBeforeBenefit, p.returnBenefitCredit, p.newSellerBenefitPeriod) },
    { label: "月度仓储费", value: renderBenefitValue(p.storageFee, p.storageBenefitCredit, p.newSellerBenefitPeriod) },
    { label: "基础履约成本合计", value: fmtMoney(p.fixedBaseCostAfterBenefits), total: true },
  ]);

  renderCompactRows("#variableFeeRows", [
    { label: "保本价：佣金", value: renderBenefitValue(p.breakEvenVariableFees.baseReferralFee, p.breakEvenVariableFees.benefitCredit, p.newSellerBenefitPeriod) },
    { label: "保本价：广告费", value: fmtMoney(p.breakEvenVariableFees.advertising) },
    { label: "目标利润价：佣金", value: renderBenefitValue(p.targetVariableFees.baseReferralFee, p.targetVariableFees.benefitCredit, p.newSellerBenefitPeriod) },
    { label: "目标利润价：广告费", value: fmtMoney(p.targetVariableFees.advertising) },
    { label: "推荐售价：佣金", value: renderBenefitValue(p.recommendedVariableFees.baseReferralFee, p.recommendedVariableFees.benefitCredit, p.newSellerBenefitPeriod) },
    { label: "推荐售价：广告费", value: fmtMoney(p.recommendedVariableFees.advertising) },
    { label: "推荐售价佣金+广告", value: fmtMoney(p.recommendedVariableFees.total), total: true },
  ]);

  renderCompactRows("#benefitRows", [
    {
      label: "品牌佣金抵扣",
      value: p.newSellerBenefitPeriod ? `${fmtStrikeMoney(p.pricingReferralFeeBeforeBenefit)} ${fmtMoney(p.pricingReferralFee)}` : "$0.00",
    },
    {
      label: "新品入仓退货处理费抵扣",
      value: p.newSellerBenefitPeriod ? `${fmtStrikeMoney(p.returnFeeBeforeBenefit)} ${fmtMoney(p.returnFee)}` : "$0.00",
    },
    {
      label: "新品入仓月度仓储费抵扣",
      value: p.newSellerBenefitPeriod ? `${fmtStrikeMoney(p.storageFee)} ${fmtMoney(p.effectiveStorageFee)}` : "$0.00",
    },
    { label: "福利抵扣合计", value: fmtMoney(p.totalBenefitCredit), total: true },
  ]);

  renderCompactRows("#policyIncomeRows", [
    { label: "退税收益（成本 × 13%）", value: `${fmtCny(p.taxRefundCny)} / ${fmtMoney(p.taxRefundUsd)}` },
    { label: "说明", value: "单独列示，不计入经营利润、保本价或推荐售价" },
  ]);

}

async function refreshExchangeRate() {
  const status = $("#exchangeRateStatus");
  const button = $("#refreshExchangeRate");
  status.textContent = "正在获取 USD/CNY 实时汇率...";
  button.disabled = true;

  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!res.ok) throw new Error("exchange rate request failed");
    const data = await res.json();
    const cnyRate = data?.rates?.CNY;
    if (!cnyRate) throw new Error("CNY rate missing");

    $("#exchangeRate").value = Number(cnyRate).toFixed(4);
    status.textContent = `已更新：1 USD = ${Number(cnyRate).toFixed(4)} CNY`;
    renderProfit();
  } catch (error) {
    status.textContent = "实时汇率获取失败，当前使用手动输入值。";
  } finally {
    button.disabled = false;
  }
}

function setView(view) {
  state.view = view;
  $$(".nav-link").forEach((btn) => btn.classList.toggle("is-active", btn.dataset.view === view));
  $$(".view").forEach((section) => section.classList.remove("is-active"));
  $(`#${view}View`).classList.add("is-active");
  $("#pageBadge").textContent = {
    fees: "费用计算器",
    profit: "利润计算器",
    guide: "使用说明",
  }[view];
  const topbar = $(".topbar");
  const menuToggle = $(".menu-toggle");
  topbar.classList.remove("is-menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "展开导航");
}

function bindEvents() {
  $$(".nav-link").forEach((btn) => btn.addEventListener("click", () => setView(btn.dataset.view)));
  $(".menu-toggle").addEventListener("click", () => {
    const topbar = $(".topbar");
    const nextOpen = !topbar.classList.contains("is-menu-open");
    topbar.classList.toggle("is-menu-open", nextOpen);
    $(".menu-toggle").setAttribute("aria-expanded", String(nextOpen));
    $(".menu-toggle").setAttribute("aria-label", nextOpen ? "收起导航" : "展开导航");
  });
  $$("#feeForm input, #feeForm select").forEach((el) => {
    el.addEventListener("input", calculateFee);
    el.addEventListener("change", calculateFee);
  });
  $$("#profitForm input, #profitForm select").forEach((el) => {
    el.addEventListener("input", renderProfit);
    el.addEventListener("change", renderProfit);
  });
  $("#refreshExchangeRate").addEventListener("click", refreshExchangeRate);
}

function init() {
  bindEvents();
  calculateFee();
  renderProfit();
  refreshExchangeRate();
  setView("fees");
}

document.addEventListener("DOMContentLoaded", init);

# Profit Calculator Plan

## Objective

Build a profit and break-even model for US automotive parts that includes Amazon fees, new-seller benefits, tax refund income, advertising spend, and competitor-price-based target pricing.

## Planned Steps

1. Define the cost model
   - Separate base product cost, first-leg freight, Amazon fees, optional operating fees, and fixed allocations.
   - Keep all fee items visible even when waived or disabled, so the calculator can explain why a value is 0.

2. Apply new-seller benefits
   - Model benefits as credits, waivers, or per-unit allocations.
   - Keep temporary benefits separate from long-term steady-state cost.

3. Add tax refund income
   - Treat refund as extra income, not as a direct cost reduction.
   - Show operating profit and tax-refund-adjusted profit separately.

4. Calculate break-even price
   - Include referral fee, FBA fulfillment, storage, return processing, first-leg freight, and ad spend.
   - Output the minimum no-loss selling price.

5. Add target-margin pricing
   - Use target margin that already includes advertising spend.
   - Reverse-calculate recommended sale price from total cost and desired margin.

6. Calibrate against competitors
   - Compare recommended price with competitor price range.
   - Flag whether the product has enough pricing room.

## Next Item

Finish the profit calculator model by connecting new-seller benefits, tax refund income, break-even price, and target-margin pricing.

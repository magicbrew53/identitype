// Cumulative costs object: { status, certainty, autonomy, relatedness, fairness }

export const EMPTY_COSTS = {
  status: 0,
  certainty: 0,
  autonomy: 0,
  relatedness: 0,
  fairness: 0,
};

export function addCosts(a, b) {
  return {
    status: a.status + b.status,
    certainty: a.certainty + b.certainty,
    autonomy: a.autonomy + b.autonomy,
    relatedness: a.relatedness + b.relatedness,
    fairness: a.fairness + b.fairness,
  };
}

export function totalCost(costs) {
  return (
    costs.status +
    costs.certainty +
    costs.autonomy +
    costs.relatedness +
    costs.fairness
  );
}

export function toPercentages(costs) {
  return {
    status: Math.min(Math.round(costs.status * 1.1), 90),
    certainty: Math.min(Math.round(costs.certainty * 1.0), 85),
    autonomy: Math.min(Math.round(costs.autonomy * 1.05), 82),
    relatedness: Math.min(Math.round(costs.relatedness * 0.95), 88),
    fairness: Math.min(Math.round(costs.fairness * 1.0), 92),
  };
}

export function annualCost(pcts) {
  return Math.round(
    pcts.status * 680 +
    pcts.certainty * 520 +
    pcts.autonomy * 440 +
    pcts.relatedness * 580 +
    pcts.fairness * 620
  );
}

export function orgCost(annualPerEmployee, orgSize = 200, affectedRate = 0.3) {
  return Math.round(annualPerEmployee * orgSize * affectedRate);
}

export function brainState(costs) {
  const total = totalCost(costs);
  if (total < 50) return { label: "PREFRONTAL ACTIVE", color: "#AAC785" };
  if (total < 100) return { label: "SHIFTING TO THREAT", color: "#EB865C" };
  return { label: "AMYGDALA DOMINANT", color: "#B91C1C" };
}

export function formatDollars(n) {
  return "$" + n.toLocaleString("en-US");
}

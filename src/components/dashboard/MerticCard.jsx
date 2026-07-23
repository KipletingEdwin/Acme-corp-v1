
import React from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export const MerticCard = ({
  label,
  value,
  change,
  changeLabel,
  icon: Icon,
  format = "number",
}) => {
  const isPositive = change > 0;
  const isNegative = change < 0;
  const isNeutral = change === 0 || change === undefined;

  const formatValue = (val) => {
    if (format === "currency") return `$${Number(val).toLocaleString()}`;
    if (format === "percent") return `${val}%`;
    return Number(val).toLocaleString();
  };
  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {label}
        </span>
        {Icon && <Icon className="w-4 h-4 text-muted-foreground" />}
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-semibold font-mono tracking-tight">
          {formatValue(value)}
        </p>
        {!isNeutral && (
          <div
            className={`flex items-center gap-1 text-xs font-medium ${isPositive ? "text-success" : "text-destructive"}`}
          >
            {isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>
              {isPositive ? "+" : ""}
              {change}%
            </span>
          </div>
        )}
        {isNeutral && change !== undefined && (
          <div className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
            <Minus className="w-3 h-3" />
            <span>0%</span>
          </div>
        )}
      </div>
      {changeLabel && (
        <p className="text-xs text-muted-foreground mt-1">{changeLabel}</p>
      )}
    </div>
  );
};

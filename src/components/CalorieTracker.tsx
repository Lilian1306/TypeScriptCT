import { useMemo } from "react";
import type { Activity } from "../types";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  // Contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calorias : total,
        0
      ),
    [activities]
  );

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">

        Resumen De Calorias
      </h2>
      <div className="grid grid-cols items-center md:flex-row md:justify-between gap-5 mt-10">
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
          <span className="font-black text-6xl text-orage"> {caloriesConsumed}</span>
          Consumidas
        </p>
      </div>
    </>
  );
}

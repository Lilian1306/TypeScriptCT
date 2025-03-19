import { useMemo } from "react";
import type { Activity } from "../types";
import CaloriesDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
  // Contadores
  const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calorias : total, 0),[activities]);5.22+8.33


  const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calorias : total, 0), [activities])

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">

        Resumen De Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
       <CaloriesDisplay
           calories={caloriesConsumed}
           text='Consumidas'
       />
       <CaloriesDisplay
           calories={caloriesBurned}
           text='Ejercicio'
       />
      </div>
    </>
  );
}

import { useState, type ChangeEvent } from "react"
import { categories } from "../data/categories"
import { Activity } from '../types'


export default function Form() {

   const [activity, setActivity] = useState<Activity>({  // Creamos un state para almacenar los datos en el localStorage
       category: 1,
       name: '',
       calorias: 0
   })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {  // Creamoos una funcion para que nos perminta escribir en el state (escribir dentro del input o select para despues guardarlo en el state)
      const isNumberField = ['category', 'calorias'].includes(e.target.id)

      console.log(isNumberField)

      setActivity({
         ...activity,    //  Tomamos una copia de nuestro state antes de escribir en nuestro state
         [e.target.id]: isNumberField ? +e.target.value : e.target.value
      })
      // console.log(e.target.id)    // e.target.id nos indicara en que elemento estamos escribiendo si es en el select o en un input
      // console.log(e.target.value) // e.target.value nos indicara mostrara que estamos escribiendo. 
   }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
       <div className='grid grid-cols-1 gap-3'>
         <label htmlFor="category" className="font-bold">Categoria:</label>
         <select
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            id="category"
            value={activity.category}
            onChange={handleChange}
         >
            {categories.map(category => (
                <option
                   key={category.id}
                   value={category.id}
                >
                    {category.name}
                </option>
            ))}
         </select>
       </div>

       <div className="grid grid-cols-1 gap-3">
         <label htmlFor="name" className="font-bold">Actividad: </label>
         <input
            id='name'
            type="text"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. Comida, Jugo de Naramja, Ensalada, Ejercicio, Pesas, Bici"
            value={activity.name}
            onChange={handleChange}
         />
       </div>

       <div className="grid grid-col-1 gap-3">
        <label htmlFor="calorias" className="font-bold">Calorias:</label>
        <input
            id="calorias"
            type="number"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Calorias. ej. 300 o 500"
            value={activity.calorias}
            onChange={handleChange}
        />
       </div>

       <input
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 font-bold uppercase text-white cursor-pointer"
          value='Guardar comida o guardar ejercicio'
       />
    </form>
  )
}

"use client"
import LightChart from "../components/LightChart"
import TempChart from "../components/TempChart"

const Stat = () => {
  return (
    <div className=" w-11/12">
      <TempChart/>
      <LightChart/>
    </div>
  )
}

export default Stat
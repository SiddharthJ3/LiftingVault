import react, { useEffect } from "react"
import { preLoaderAnim } from "../animations";
import './preloader.css'

const PreLoader = () => {

     useEffect(() => {
         preLoaderAnim()
     }, []);
     
  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span>Discipline.</span>
        <span> Consistency.</span>
        <span> Perseverance.</span>
      </div>
    </div>
  )
}

export default PreLoader

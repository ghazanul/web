import './AddPesanan.css'
import {useState} from 'react'

const AddPesanan = (props) => {

    const [getPesanan, setPesanan] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const NewPesanan = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getPesanan
        }

        props.onCreatePesanan(NewPesanan)

        setPesanan ('')
        console.log(NewPesanan)
    }

    const handlePesananInput = (event) => {
        setPesanan(event.target.value)
        console.log(getPesanan)
    }

    return (
        <form className='spacePesanan' onSubmit={handleSubmit}>
            <input type = "text" value={getPesanan} onChange={handlePesananInput}/>
            
            <button type= "submit" >Tambahkan</button>
        </form>

        
    )
}

export default AddPesanan;
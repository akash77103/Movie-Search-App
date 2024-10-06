// import React,{useState} from 'react'

// export const Forms = () => {
//     const [inputData, setInputData] = useState({firstName:"",lastName:""})
//     const [constactData, setConstactData] = useState([])
//     function handleChange(event){
//         const {name,value}=event.target
//         setInputData(prevData=>{
//             return{
//                 ...prevData,
//                 [name]:value
//             }
//         })
//     }
//     function handleSubmit(event){
//         event.preventDefault()
//         setConstactData(prevContact=>
//             [...prevContact,inputData]
//         )
        
//     }
//     const contact=constactData.map(contact=><h2 key={contact.firstName+contact.lastName} > {contact.firstName} {contact.lastName} </h2>)
//     console.log(inputData)
//     console.log(constactData)
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input  type="text" name='firstName'  value={inputData.firstName} onChange={handleChange} placeholder="First Name"/>
//             <input  type="text" name='lastName'  value={inputData.lastName} onChange={handleChange} placeholder="Last Name"/>
//             <br/>
//             <button >Add contact</button>
//         </form>
//         {contact}
//         <div>
           
//         </div>
//     </div>
//   )
// }

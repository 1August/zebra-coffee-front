// import './FranchiseRegisterPage.scss'
// import {useDispatch} from "react-redux";
// import {useState} from "react";
//
// export const FranchiseRegisterPage = () => {
//     const dispatch = useDispatch()
//
//     const inputs = [
//         {
//             name: 'country',
//             id: 'country',
//             placeholder: 'Country',
//             type: 'text',
//             required: true
//         },
//         {
//             name: 'surname',
//             id: 'surname',
//             placeholder: 'Surname',
//             type: 'text',
//             required: true
//         },
//         {
//             name: 'number',
//             id: 'number',
//             placeholder: 'Phone number',
//             type: 'tel',
//             required: true
//         },
//         {
//             name: 'email',
//             id: 'email',
//             placeholder: 'Email',
//             type: 'email',
//             required: true
//         },
//         {
//             name: 'password',
//             id: 'password',
//             placeholder: 'Password',
//             type: 'password',
//             required: true
//         },
//         {
//             name: 'repeatPassword',
//             id: 'repeatPassword',
//             placeholder: 'Repeat password',
//             type: 'password',
//             required: true
//         }
//     ]
//
//     const [info, setInfo] = useState({
//
//     })
//
//     const handleInputChange = e => {
//         setInfo({})
//     }
//
//     const handleFormSubmit = e => {
//         e.preventDefault()
//
//         // const {repeatPassword: _, ...payload} = {...info}
//         // console.log(payload)
//         // dispatch(fetchUser(payload))
//     }
//
//     return(
//         <div className="franchiseRegisterPage" id="franchiseRegisterPage">
//             <div className="container">
//                 <div className="franchiseRegisterImg"></div>
//                 <div className="franchiseRegisterContent">
//                     <h1>Sign Up</h1>
//                     <form
//                         className="franchiseRegisterForm"
//                         onSubmit={handleFormSubmit}
//                     >
//                         {
//                             inputs.length > 0 && inputs.map(el => (
//                                 <div key={el.id}>
//                                     <label htmlFor={el.id}>
//                                         {el.placeholder}
//                                     </label>
//                                     <input
//                                         id={el.id}
//                                         type={el.type}
//                                         name={el.name}
//                                         value={info[el.name]}
//                                         placeholder={el.placeholder}
//                                         onChange={handleInputChange}
//                                         required={el.required}
//                                     />
//                                 </div>
//                             ))
//                         }
//                         <button type="submit">Sign Up</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
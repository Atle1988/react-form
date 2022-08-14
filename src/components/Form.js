import { useState, useEffect} from "react"

export default function Form(){
    /* Set the useState to contain a object  */
const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    toggle: false,
    employment: "",
    favColor: "",
})

// useEffect render when the formData stae get's updated
useEffect( () => {
    console.log( formData )
},[formData])

// function to update the state
const handleFormsChange = (event) =>{
    /* from the onChange={ We get a SyntheticBaseEvent that give ut this event } and from the event we fint target: input . allso inside there we find value. that's why we juse event.target.value 
    console.log(event) */
    setFormData( prevForm => {
        // Destruct the event.target
        const { name, value, type, checked } = event.target

        return{
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

// When submit Btn is clicked@
// Button inside a form get's the  default type "submit", 
const handleSubmit = (event) => {
    // prevntDefault make it so the page dont send the information from the form to the next level, and the page dont get refresh.
    event.preventDefault()
    alert(`Thank you ${formData.firstname} !`)
    console.log(formData)
}


    return(
        <form onSubmit={handleSubmit}>
            <section className="form-section-top">
                <label forHtml={"firstname"}>Firstname: </label>
                <input 
                    type="text"
                    placeholder="Enter your firstname"
                    onChange={handleFormsChange}
                    name="firstname"
                    value={formData.firstname}
                    id="firstname"
                    /> <br/>

                    <label forHtml={"lastname"}>Lastname: </label>
                <input 
                    type="text"
                    placeholder="Enter your lastname"
                    onChange={handleFormsChange}
                    name="lastname"
                    value={formData.lastname}
                    id="lastname"
                /> <br/>

                <label forHtml={"email"}>Email: </label>
                <input 
                    type="email"
                    placeholder="Enter your e-mail"
                    onChange={handleFormsChange}
                    name="email"
                    value={formData.email}
                    id="email"
                />
                <br />
        

                <label htmlFor="favColor">Favorite color: </label>
                <select 
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleFormsChange}
                    name="favColor"
                >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
            </section>
            <br/>
            <br/>
            

            <fieldset>
                <legend>Current employment status</legend>

                <input 
                    type="radio"
                    id="student"
                    name="employment"
                    value="student"
                    checked={formData.employment === "student"}
                    onChange={handleFormsChange}
                />
                <label htmlFor="student">Student</label>
                <br />

                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleFormsChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>

                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleFormsChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleFormsChange}
                />
                <label htmlFor="full-time">Full-time</label>
            </fieldset><br/>

            <caption className="orangeColor">Comments:</caption>
            <textarea 
             placeholder="Enter your comments"
             onChange={handleFormsChange}
             name="comments"
             value={formData.comments}
            /> <br/>

            <label htmlFor="toggle" className="orangeColor">BackgroundColor</label>
            <input 
            type="checkbox"
            name="toggle"
            onChange={handleFormsChange}
            checked={formData.toggle}
            />

            <div style={{borderWidth: "2px", borderColor: "white", border: "solid", backgroundColor: formData.toggle ? "#666" : "#252525", color: "#f1f1f1"} }>
                <h3><span className="formData-info">Name:</span> {formData.firstname} {formData.lastname}</h3>
                <h6><span className="formData-info">Email:</span> {formData.email} </h6>
                <h6><span className="formData-info">Comments:</span> {formData.comments}</h6>
            <h6><span className="formData-info">Current employment status</span> {formData.employment}</h6>
            <h6><span className="formData-info">Favorite Color:</span> <span style={{color: formData.favColor}}>{formData.favColor}</span></h6>
            </div>

            <button>Submit</button>
            
        </form>
    )
}
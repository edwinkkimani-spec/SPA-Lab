export default function Form({setFormData, formData, setProjects}){
function handleOnChanage(event){
      setFormData(
        {
            ...formData,
            [event.target.name]:event.target.value,
        }
      )
      
  }

  function handleSubmit(event){
    event.preventDefault()
    setProjects((preprojects)=>[...preprojects,formData])
    
  }



  return(
  <>
  <form className="bg-light p-3 rounded shadow" onSubmit={handleSubmit}>
            <h1 className="d-flex justify-content-center">Add project</h1>
            <input className="form-control form-control-sm m-2" 
            type="text" 
            placeholder="Project Name"
            name="projectName"
            value={formData.projectName}
            onChange={handleOnChanage}
            />

            <input className="form-control form-control-sm m-2" 
            type="text" 
            placeholder="Project Description"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleOnChanage}
            />

            <input className="form-control form-control-sm m-2" 
            type="number" 
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleOnChanage}
            />
         <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-sm btn-success">Add</button>
          </div>
        </form>

        <form>
            <input className="form-control form-control-sm m-2"
            type="search" 
            placeholder="Search"
            name="search"
            value={formData.search}
            onChange={handleOnChanage}
            />
        </form>

  </>
  
  )
}
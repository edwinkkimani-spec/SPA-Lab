export default function Table({projects}){


    return(
        <>
        <div className="container-fluid">
        <table className="table table-bordered w-100 ">
            <thead >
                 <colgroup>
        <col style={{ width: "25%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "25%" }} />
    </colgroup>
                <tr>
                    <th className="w-25">Project Name</th>
                    <th className="w-25">Description</th>
                    <th className="w-25">Price</th>
                    <th className="w-25">Action</th>
                </tr>
                </thead>
                <tbody>
                    {projects.map((project, index)=>(
                    <tr key={index+1}>
                        <td >{project.projectName}</td>
                        <td >{project.projectDescription}</td>
                        <td >{project.price}</td>
                        <td><button className="btn btn-sm btn-danger">*</button>
                        </td>
                    </tr>
                    ))
                    }
                    
                </tbody>
                
        </table>
  </div>
        </>
    )
}
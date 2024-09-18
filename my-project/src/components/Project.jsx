import React from 'react'
import project from './Data/projects.json'

const Project = () => {
  return (
    <>
      <div className="container project my-3" id="project">
        <h1>PROJECT</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <>
              <div key={data.id} className='my-3 col-md-4'>
                <div className="card bg-dark text-light" style={{ width: "18rem", border:"1px solid yellow",boxShadow:"5px 5px 10px 10px rgb(101,175,10,0.5)"}}
                 data-aos="flip-right"
                  data-aos-duration="1000"
                
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                  <img src={data.imageSrc}className="card-img-top" alt="..."
                  
                  style={{
                    width:'250px',
                    height:'160px',
                    border:'2px solid white',
                    borderRadius:'10px'
    

                  }}
                  />
                  </div>
                 
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                      <a href={data.source} className="btn btn-warning">Code</a>
                    </div>
                </div>

              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project

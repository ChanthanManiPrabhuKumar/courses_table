import './App.css';
import Information from './Data.json';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row '>
          <div className='col  justify-content-between d-flex mt-4'>
            <h3>My Courses</h3>
            <h6 className='text-secondary'>View All</h6>
          </div>
        </div>

              <div className='row mt-5'>
                    <div className='col-lg-3 col-sm-6'>
                      <h3>Courses Name</h3>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                      <h3>Start Date</h3>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                      <h3>Lesson Completed</h3>
                    </div>
                    <div className='col-lg-3 col-sm-6'>
                      <h3>Duration</h3>
                    </div>
                    </div>

        {
          Information.map( data => {
            return(
              <div className='row mt-5'>
              <div className='d-flex col-lg-3 col-sm-6 text-dark-secondary fs-4 justify-content-around rounded ' key={data.id}>           
                {data.course}<br></br>
                {data.Total_Lesson} Lessons
                </div>
              <div className='col-lg-3 col-sm-6 text-dark-secondary fs-4' key={data.id}>
                {data.Start_Date}
              </div>
              <div className='col-lg-3 col-sm-6 text-secondary fs-4' key={data.id}>
                {data.Lesson_Completed}
              </div>
              <div className='col-lg-3 col-sm-6 text-dark-secondary fs-4' key={data.id}>
                {data.Duration}
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

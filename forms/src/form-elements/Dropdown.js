import React from 'react';

export default function Dropdown() {
    return (
        <>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-5'>
                    <h1>Drop Down</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Label Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter The Options</label>
                            <p>(each option in a new line)</p>
                            <textarea className="form-control"  id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        </div>
                        <div><input type='checkBox' className='mb-3'/> isRequired</div>
                        <button type="submit" className="btn btn-success">Done</button>
                        <button type="submit" className="btn btn-primary"> Reset</button>

                    </form>
                </div>
            </div>
        </>
    );
}

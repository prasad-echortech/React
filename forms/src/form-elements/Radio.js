import React from 'react';

export default function Radio() {
    return (
        <div className='row d-flex justify-content-center mt-5'>
            <div className='col-5'>
                <h1>Radio Box</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Radio-Box Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <div><input type='checkBox' />Default Checked</div>
                    <button type="submit" className="btn btn-success">Done</button>
                    <button type="submit" className="btn btn-primary"> Reset</button>

                </form>
            </div>
        </div>
    );
}

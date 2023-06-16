import React from 'react';
export default function Text() {
    return (
        <>
            <div className='row d-flex justify-content-center mt-5'>
                <div className='col-5'>
                <h1>Text Box</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Text-Box Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className='mb-3'>
                            <label>Text-Box Type</label>
                            <select name="" id="">
                                <option type="text" value="">Text</option>
                                <option type="number" value="">Number</option>
                                <option type="email" value="">Email</option>
                            </select>
                        </div>
                        <div><input type='checkBox' /> isRequired</div>
                        <button type="submit" className="btn btn-success">Done</button>
                        <button type="submit" className="btn btn-primary"> Reset</button>

                    </form>
                </div>
            </div>
        </>
    );
}

import React from 'react';

export default function Textarea() {
    return (
        <div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-5 ">
                    <h1>Text Area</h1>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label htmlFor="floatingTextarea2">Enter Text Here</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

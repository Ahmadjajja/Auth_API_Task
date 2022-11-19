import * as React from 'react'

export default function NoPage() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <div className="container ">
                <div className="row">
                    <div className="col text-center text-danger ">
                        <h1 className="text-center ">ERROR 404!</h1>
                        <h2 className="text-center mb-0">Page Not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
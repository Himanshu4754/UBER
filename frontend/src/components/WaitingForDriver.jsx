import React from "react";

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 onClick={() => {
                props.setWaitingForDriver(false)
            }} className="p-1 text-center w-[93%] absolute top-0">
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            {props.ride?.captain ? (
                <div className="flex items-center justify-between">
                    <img className="h-12" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium capitalize">
                            {props.ride.captain.fullname.firstname}
                        </h2>
                        <h4 className="text-xl font-semibold -mt-1 -mb-1">
                            {props.ride.captain.vehicle.plate}
                        </h4>
                        <p className="text-sm text-gray-600">
                            {props.ride.captain.vehicle.vehicleType}
                        </p>
                        <h1 className="text-lg font-semibold">{props.ride.otp}</h1>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                        <h3 className="text-lg font-medium">Looking for a driver...</h3>
                        <p className="text-sm text-gray-600 mt-2">Please wait while we find you a captain</p>
                    </div>
                </div>
            )}
            
            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-user-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">Pickup</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">Destination</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default WaitingForDriver
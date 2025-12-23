import React,{useContext} from "react";  
import { CaptainDataContext } from '../context/CaptainContext'


const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)

            return (
                <div>
                    <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start gap-3">
                                <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1755519024827-fd05075a7200?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <h4 className="text-lg font-medium text-cap">{ captain.fullname.firstname + " " + captain.fullname.lastname  }</h4>
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold">₹295.20</h4>
                                <p className="text-sm text-gray-600">Earned</p>
                            </div>
                        </div>
                        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
                            <div className="text-center">
                                <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                                <h5 className="text-lg font-medium">10.2</h5 >
                                <p className="text-sm text-gray-600">Hours Online</p>
                            </div>
                            <div className="text-center">
                                <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                                <h5 className="text-lg font-medium">45KM</h5 >
                                <p className="text-sm text-gray-600">Distance Covered</p>
                            </div>
                            <div className="text-center">
                                <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                                <h5 className="text-lg font-medium">₹250</h5 >
                                <p className="text-sm text-gray-600">Earned Money</p>
                            </div>
                        </div>
                </div>
            )
}

export default CaptainDetails
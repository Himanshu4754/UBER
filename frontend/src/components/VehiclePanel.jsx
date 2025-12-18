import React , {useState} from "react";

const VehiclePanel = (props) => {

    const [selectedVehicle,setSelectedVehicle] = useState("");
    return (
        <div>
            <h5 onClick={() => {
            props.setVehiclePanel(false)
          }} className="p-1 text-center w-[93%] absolute top-0"><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>
          <div
            onClick={() => {
              setSelectedVehicle("uber")
              props.setConfirmRidePanel(true)
            }
          }
            className={`flex border-2 mb-2 rounded-xl w-full p-3 items-center justify-between
            ${selectedVehicle === "uber" ? "border-black" : "border-gray-300"}`}
          >
              <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MDM0YzIwMC1jZTI5LTQ5ZjEtYmYzNS1lOWQyNTBlODIxN2EucG5n"/>
              <div className="ml-2 w-1/2">
                <h4 className="font-medium text-lg">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
              </div>
              <h2 className="text-xl font-semibold">$193.20</h2>
            </div>
            <div
 onClick={() => {
              setSelectedVehicle("moto")
              props.setConfirmRidePanel(true)
            }
          }
  className={`flex border-2 mb-2 rounded-xl w-full p-3 items-center justify-between
  ${selectedVehicle === "moto" ? "border-black" : "border-gray-300"}`}
>

              <img className="h-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SgYmhbSTYNgEbSOnCH1xmIHny53WEtbVGw&s"/>
              <div className="-ml-4 w-1/2">
                <h4 className="font-medium text-lg">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                <h5 className="font-medium text-sm">3 mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable Motorcycle rides</p>
              </div>
              <h2 className="text-xl font-semibold">$65</h2>
            </div>
            <div
  onClick={() => {
              setSelectedVehicle("auto")
              props.setConfirmRidePanel(true)
            }
          }
  className={`flex border-2 mb-2 rounded-xl w-full p-3 items-center justify-between
  ${selectedVehicle === "auto" ? "border-black" : "border-gray-300"}`}
>
              <img className="h-10" src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"/>
              <div className="ml-2 w-1/2">
                <h4 className="font-medium text-lg">UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">Affordable Auto rides</p>
              </div>
              <h2 className="text-xl font-semibold">$118.21</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
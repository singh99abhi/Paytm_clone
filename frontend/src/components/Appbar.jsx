import { Profile } from "./Profile";

export function Appbar(){
    return <div className="flex justify-between p-8 border border-gray-300">
        <div className="font-bold text-2xl">
            Payments App
        </div>
        <div className="flex justify-center p-2">
        <div className="text-xl m-2">
            Hello,User
        </div>
            <Profile label={"U1"}
            />
        </div>
        
    </div>
}
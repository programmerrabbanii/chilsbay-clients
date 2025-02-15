import things1 from "../assets/card2.png"
import things2 from "../assets/img7.png"
import things3 from "../assets/img5.png"
const Things = () => {
    return (
        <div className=" bg-blue-100 mt-10 py-8">
            <div className="w-11/12 mx-auto">
                <h4 className="text-3xl mb-4">Top things to do in Lagos</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 ">
                    <div>
                        <img className="h-80 w-full  rounded-sm" src={things1} alt="" />
                        <h4 className="text-center">Sight Seeing</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things2} alt="" />
                        <h4 className="text-center">Volley Ball Game</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things3} alt="" />
                        <h4 className="text-center">Wizkid Show</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things3} alt="" />
                        <h4 className="text-center">Wizkid Show</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things1} alt="" />
                        <h4 className="text-center">Sight Seeing</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things2} alt="" />
                        <h4 className="text-center">Volley Ball Game</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things3} alt="" />
                        <h4 className="text-center">Sight Seeing</h4>
                    </div>
                    <div>
                        <img className="h-80 w-full rounded-sm" src={things1} alt="" />
                        <h4 className="text-center">Sight Seeing</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Things;
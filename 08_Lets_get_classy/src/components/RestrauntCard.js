import  {IMG_CDN_URL} from "../constants";


const RestrauntCard = ({  cloudinaryImageId,
    name,
    cuisines,
    lastMileTravelString }) => {

    return (
                <div className="card">
                    <img src={IMG_CDN_URL+cloudinaryImageId}/> 
                    
                    
                    <h3>{name}</h3>
                    <h5>{cuisines?.join(",")}</h5> 
                    <h4>{lastMileTravelString} </h4>
                    </div>
            );
        
        };

export default RestrauntCard;       
//creating a shimmer effect 

const Shimmer = () => {
    return (
            <div className="restraunt-list">
                 {
                    //below lines 
                    //are ==> Array(50) meansit will create 50 empty array and .fill it will empty data and map The .map() method is an array method that creates a new array by calling a function for every element in the original array.
                    Array(18).fill("").map((e,index) =>
                    <div key = {index} className = "shimmer-card"> </div>)
                 }

            </div>
           
           
               
           
        
    );
} ; 

export default Shimmer ;
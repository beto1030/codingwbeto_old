import * as React from "react"

const Flashcard = ({frontSide, backSide}) => {

    const [isFront, changeFace] = React.useState(frontSide)

    function handleClick() {
        changeFace(oldState => {
            if(oldState === frontSide){
                return !oldState; 
            } else {
                return !oldState; 
            }
        });
    }

    const sideClass = isFront ? "flipdiv v" : "flipdiv v showBack"
    const classList = ` ${sideClass}`
    
    

    return (
          <div onClick={handleClick} className={classList}>
              <div className="front border">
                 <p>{frontSide}</p>
              </div>
              <div className="back border">
                 <p>{backSide}</p>
              </div>
         </div>
      )
      
}     
export default Flashcard

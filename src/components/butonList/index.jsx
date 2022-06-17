import Button from '../button'

const ButtonList = ({list=[], globalClass=''}) =>{
    return(
        <div className={globalClass}>
             {list.map((elem , index)=><Button children={elem.children} classN={elem.classN} key={index}  />)}
        </div>
       
    )

}

export default ButtonList
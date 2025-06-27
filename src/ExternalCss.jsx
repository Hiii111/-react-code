// import './css/style.css';
import style from './css/userProfile.module.css';
function ExternalCss(){
    return(
        <div>
            <h1 className={style.heading}>Welcome Module CSS</h1>
            <p className={style.content}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quas sint porro officia, corporis voluptate veniam ipsa, tempore magni non, nostrum ad ipsam in modi neque dolorum hic dolorem iusto!</p>
        </div>
    )
}
export default ExternalCss;
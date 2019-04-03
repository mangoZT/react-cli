import React, {PureComponent} from 'react';
import style from './index.css';
import pic from 'images/a.jpg'

export default class Page extends PureComponent {
    render() {
        return (
            <div className={style["page-box"]}>
                this is Page~
                <img src={pic}/>
            </div>
        )
    }
}
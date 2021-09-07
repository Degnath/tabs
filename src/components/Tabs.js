import React, { useState } from 'react'
import '../App.css';


const Tabs = (props) => {
    const { tabs } = props;
    const [active, setActive] = useState(0);

    const changeTab = ( i, callback ) => {
        setActive(i);
        if(callback != null){
            callback();
        }
    }

    return(
        <>
        <div className="row">
            {
                tabs.map((tab, i) => {
                    if(i==active){
                        return <button key={ i } className="col btn btn-primary animated active bounce" onClick={() => changeTab(i, tab.callback) }>{ tab.title }</button>
                    } else{
                        return <button key={ i }className="col btn btn-secondary inactive" onClick={() => changeTab(i, tab.callback) }>{ tab.title }</button>
                    }
                })
            }
        </div>
        <div className="row">
            <div className="col-sm-12">
                <p>{ tabs[active].content }</p>
            </div>
        </div>
        </>
    )
}

export default Tabs
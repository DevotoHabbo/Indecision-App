import React from 'react'
import Option from './Option'
const Options = (props)=>(
    <div>
    <div className="widget-header">
    <h3 className="widget__title">Your Options</h3>
    <button className="button--link" onClick={props.deleteOptions}>Remove All</button>
    </div>
    {props.addOption && <p className="widget__message">There are no options yet!</p>}
    {props.options.map((option,index)=> <Option key={option} optionText={option} deleteOption={props.deleteOption} count={index + 1} />)}
    </div>
)
export {Options as default}
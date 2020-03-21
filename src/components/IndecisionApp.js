import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component{
    state = {options: [], selectedOption:undefined}
    deleteOptions = () =>{
        this.setState(()=>({options:[]} ))
    }
    deleteOption = (optionToRemove)=>{
        this.setState((preState)=>({options: preState.options.filter((option)=>optionToRemove !== option)
    }))
    }
    addAnOption = (option)=>{
        if(!option){
            return 'Enter valid value to add an option'
        }else if(this.state.options.indexOf(option) >= 0){
            return 'This option already exists';
        }
       this.setState((preState)=>({options: preState.options.concat(option)}))
    }
    pickAnOption = ()=>{
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(()=>({selectedOption: option}))
    }
    closeAnOptionPick = ()=>{
        this.setState(()=>({selectedOption:undefined}))
    }
    componentDidMount = ()=>{
        try{
            const json = localStorage.getItem('options')
            const options = JSON.parse(json);
            if(options){
             this.setState(()=>({options}))
            }
        }catch(e){
            // Do nothing at all
        }
   
    }
    componentDidUpdate = (preProps, preState)=>{
        if(preState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)

        }
    }
    componentWillUnmount(){
        console.log('Gone')
    }
    
    render(){   
        const subtitle = 'Welcome to My Application'
        return(
            <div>
            <Header subtitle={subtitle} />
            <div className="container">
            <Action pickOption={this.pickAnOption} hasOptions={this.state.options.length >0}  />
            <div className="widget">
            <Options addOption={this.state.options.length === 0} options={this.state.options} deleteOptions={this.deleteOptions} deleteOption={this.deleteOption} />
            <AddOption addAnOption={this.addAnOption} />
            </div>
            </div>
            
            <OptionModal isOpen={this.state.selectedOption} isClose={this.closeAnOptionPick} />
            </div>
        )
    }
}

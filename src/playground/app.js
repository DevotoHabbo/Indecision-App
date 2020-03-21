
class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
        this.pickAnOption = this.pickAnOption.bind(this)
        this.addAnOption = this.addAnOption.bind(this)
     
        this.state = {
            options: []
        }
    }
    componentDidMount(){
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
    componentDidUpdate(preProps, preState){
        if(preState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json)

        }
    }
    componentWillUnmount(){
        console.log('Gone')
    }
    deleteOptions(){
        this.setState(()=>({options:[]} ))
    }
    deleteOption(optionToRemove){
        this.setState((preState)=>({options: preState.options.filter((option)=>optionToRemove !== option)
    }))
    }
    addAnOption(option){
        if(!option){
            return 'Enter valid value to add an option'
        }else if(this.state.options.indexOf(option) >= 0){
            return 'This option already exists';
        }
       this.setState((preState)=>({options: preState.options.concat(option)}))
    }
    pickAnOption(){
        const randomNum = Math.floor(Math.random()* this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    render(){

        
        const subtitle = 'Welcome to this useless Application'
        return(
            <div className="ui container">
            <Header subtitle={subtitle} />
            <Action pickOption={this.pickAnOption} hasOptions={this.state.options.length >0} addOption={this.state.options.length === 0} />
            <Options options={this.state.options} deleteOptions={this.deleteOptions} deleteOption={this.deleteOption} />
            <AddOption addAnOption={this.addAnOption} />
            </div>
        )
    }
}

//Header
const Header = (props)=>{
    return (<div>
        <h1>{props.title}</h1>
        {props.subtitle &&  <h2>{props.subtitle}</h2>}
        </div>)
}
Header.defaultProps = {
    title: 'Indecision'
}
// Remove all action
const Action = (props)=>{
    return (
        <div>
        <button disabled={!props.hasOptions} className="ui button" onClick={props.pickOption}>What should I do?</button>
        <hr />
        {props.addOption && <div><p>There are no options yet!</p> <hr></hr> </div> }
        
        </div>
    )  
}
const Options = (props)=>{
    return(
        <div>
        <button className="ui button" onClick={props.deleteOptions}>Remove All</button>
        <ol>
        {props.options.map((option)=> <Option key={option} optionText={option} deleteOption={props.deleteOption} />)}
        </ol>
        </div>
    )
}
const Option = (props)=>{
    return(
        <div className="ui list">
        <div className="item"><p>Options: {props.optionText}</p> 
        <button className="right attached red ui button" onClick={(e)=>{props.deleteOption(props.optionText)}}>Remove</button>
        </div>
     
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addAnOption(option);
        this.setState(()=>({error}))
        if(!error){
            e.target.elements.option.value=''
        }
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input className="ui huge input" type="text" name="option"></input>
            <button className="ui button" >Add an option</button>
            </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
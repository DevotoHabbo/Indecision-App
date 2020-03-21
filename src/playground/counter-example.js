class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('count')
            const count = parseInt(json,10)
            if(!isNaN(count)){
                this.setState(()=>({count}))
            }
        }catch(e){

        }
    }
    componentDidUpdate(preState){
        if(preState.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
        }
    }
    addOne(){
        this.setState((preState)=>{
            return {
                count: preState.count +1
            }
        })
    }
    minusOne(){
        this.setState((preState)=>{
            return{
                count: preState.count -1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return {
                count:0
            }
        })
    }
    render(){
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

class ShowVisible extends React.Component{
    constructor(props){
        super(props)
        this.toggleShow = this.toggleShow.bind(this)
        this.state= {
            show:false
        }
    }
    toggleShow(){
        this.setState((preState)=>{
            return {
                show: !preState.show
            }
        })
    }

    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.toggleShow}>
            {this.state.show ? 'Hide details':'Show details'}
            </button>
            {this.state.show && (
                <div>
                <p>Welcome bitch</p>
                </div>
            )}
            </div>
        )
    }
}
ReactDOM.render(<ShowVisible />, document.getElementById('app'))
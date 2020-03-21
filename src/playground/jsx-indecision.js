console.log('App.js is running')

const post ={
    title:'Indecision App',
    subtitle:'Just a sub title',
    options: []
}
const getLocation= (location)=>{
    if(location){
        return <p>Location: {location}</p>;
    }
}
const onFormSubmit=(event)=>{
    event.preventDefault();

    const option = event.target.elements.option.value;
    if(option){
        post.options.push(option);
        event.target.elements.option.value = '';
        render()
    }

}
const removeOptions=()=>{
    post.options= []
    render();
}
const onMakeDecision=()=>{
    const randomNum = Math.floor(Math.random() * post.options.length);
    const option = post.options[randomNum]
    alert(option)
}
let visibility= false
const toggleVisibility = ()=>{
    visibility = !visibility;
    render()
}


const appRoot = document.getElementById('app');
const render = ()=>{
    const template=(
        <div className="ui container" >
             {post.title && <h1>Welcome to {post.title}</h1>}
             {post.subtitle && <p>{post.subtitle}</p>}
            <button onClick={removeOptions}> Remove All</button>
            <button disabled={post.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
             
                 <ol>
                 {post.options.map((option)=> <li key={option}>{option}</li>)}
                 </ol>
                
             
             <form onSubmit={onFormSubmit}>
             <input type="text" name="option" className="ui input" />
             <button className="ui button">Add Option</button>
             </form>
            
        </div>
        )
        ReactDOM.render(template,appRoot)

} 

render()
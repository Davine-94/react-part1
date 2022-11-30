const App = () => {
  
 const exercises1= 10;
 const exercises2= 7;
 const exercises3 = 14;

  return (
    <div>
      <Header course= 'Half Stack application development' />
      <Content part1= 'Fundamentals of React' exercises1 ='10' /> 
      <Content part2= 'Using Props to pass data' exercises2 ='7' />
      <Content part3= 'State of a component' exercises3 ='14' />
      <Total exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3}/>
      
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )

}

const Content = (props) =>{
  return(
    <div>
      <p> {props.part1} {props.exercises1}</p>
      <p> {props.part2} {props.exercises2}</p>
      <p> {props.part3} {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p> Number of exercises is {props.exercises1} + {props.exercises2} + {props.exercises3}</p>
    </div>
  )
}

export default App
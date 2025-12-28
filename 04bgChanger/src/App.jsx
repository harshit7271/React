import { useState } from 'react' 

function App() {
  const [color, setColor] = useState("olive")  // default color of the web page 

  return (
    <div 
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > 
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">     
        <div className = "flex flex-wrap justify-center gap-3 bg-lg bg-white px-3 py-2 rounded-2xl">
       
          <button onClick={() => setColor("red")}         // onClick expects us to pass a function & () callback is also a function which is calling setColor with "red"
          className="outline-none bg-red-500 text-white px-4 py-1 
          rounded-full shadow-lg"
          style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("green")}      
          className="outline-none bg-green-500 text-white px-4 py-1 
          rounded-full shadow-lg"
          style={{ backgroundColor: "green" }}>Green</button>

          <button onClick = {()=> setColor("orange")}
          className="outline-none bg-orange-500 text-white px-4 py-1 
          rounded-full shadow-lg"
          style={{ backgroundColor: "orange" }}>Orange</button>

          <button onClick={() => setColor("blue")}
          className="outline-none bg-blue-500 text-white px-4 py-1 
          rounded-full shadow-lg"
          style={{ backgroundColor: "blue" }}>Blue</button>

        </div>
      </div>
    </div>
  )
}
export default App


// note :   fixed positioning to keep the buttons at the bottom of the page, inset-x-0 to center it horizontally, px-2 for horizontal padding
// flex flex-wrap justify-center to arrange buttons in a row and center them, gap-3 for spacing between buttons
// bg-lg bg-white px-3 py-2 rounded-2xl for styling the button container with background color, padding, and rounded corners
// Padding : It adds space inside the button around the text, making the button larger and easier to click.
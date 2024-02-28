import Food from "./Components/Food"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Card from "./Components/Card"
import Button from "./Components/Button/Button"
import Students from "./Components/Students"
import UserGreeting from "./Components/UserGreeting"
import List from "./Components/List"
import Button2 from "./Components/Button2"
import ProfilePic from "./Components/ProfilePic"
import Counter from "./Components/Counter"
import UseStateDemo from "./Components/UseStateDemo"
import OnChange from "./Components/OnChange"
import ColorPicker from "./Components/ColorPicker"
import Updater_Function from "./Components/Updater_Function.jsx";
import UpdateObjectInState from "./Components/UpdateObjectInState.jsx"
import UpdateStateOfAnArray from "./Components/UpdateStateOfAnArray.jsx"
import UpdateArrayOfObjectsInState from "./Components/UpdateArrayOfObjectsInState.jsx"
import To_do_list from "./Components/To_do_list.jsx"
import UseEffectHook from "./Components/UseEffectHook.jsx"

function App() {

  const fruits = [
    {id: 1, name: 'apple', calories: 95}, 
    {id: 2, name: 'orange', calories: 45}, 
    {id: 3, name: 'banana', calories: 105}, 
    {id: 4, name: 'coconut', calories: 159}, 
    {id: 5, name: 'pineapple',calories: 37}
]

  const vegetables = [
    {id: 6, name: 'potaties', calories: 110}, 
    {id: 7, name: 'celery', calories: 15}, 
    {id: 8, name: 'carrots', calories: 25}, 
    {id: 9, name: 'corn', calories: 63}, 
    {id: 10, name: 'broccoli',calories: 50}
]

  return (
    <>
      <Header />
      <Food />
      <Card />
      <Button />
      <Footer />

      <Students name= 'SpongeBob'age= {30}isStudent = {true}/>
      <Students name= 'Patrick'age= {42}isStudent = {false}/>
      <Students name= 'Squidward'age= {50}isStudent = {false}/>
      <Students name= 'Sandy'age= {27}isStudent = {true}/>
      <Students name='Larry'/>
      
      <UserGreeting isLoggedIn = {true}userName = 'Rem Simiyu'/>
      <UserGreeting/>

      {fruits.length > 0 && <List items={fruits} category = 'Fruits'/>};
      {vegetables.length > 0 && <List items={vegetables} category = 'Vegetables'/>}

      <Button2 />
      <ProfilePic />
      <UseStateDemo />
      <Counter />
      <OnChange />
      <ColorPicker />
      <Updater_Function />
      <UpdateObjectInState />
      <UpdateStateOfAnArray />
      <UpdateArrayOfObjectsInState />
      <To_do_list />
      <UseEffectHook />
    </>
  )
}



export default App

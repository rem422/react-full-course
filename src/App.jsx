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
    </>
  )
}



export default App

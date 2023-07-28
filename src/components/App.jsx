import Header from '@/components/Header';
import ToDoLogic from '@/components/Logic';
import Navbar from '@/components/Navbar';
import "../index.css";

export default function ToDoApp() {
  return (
    <>
      <Navbar />
      <Header />
      <ToDoLogic />
    </>
  )
}
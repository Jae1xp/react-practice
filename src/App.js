import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import RefsDemo from './components/RefsDemo';
// import Input from './components/Input';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import PureComp from './components/PureComp';
// import RegComp from './components/RegComp';
// import ParentComp from './components/ParentComp';
// import MemoComp from './components/MemoComp';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from "./components/EventBind";
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import LifecycleB from './components/LifecycleB';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';


function App() {
  return (
    <div className="App">
    <UserProvider value="Jae">
      <ComponentC />
    </UserProvider>
    {/* <ClickCounter name="Jae" />
    <HoverCounter /> */}
    {/* <ErrorBoundary>
      <Hero heroName="Batman" />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName="Superman" />
    </ErrorBoundary>

    <ErrorBoundary>
      <Hero heroName="Joker" />
    </ErrorBoundary> */}
    {/* <FRParentInput /> */}
    {/* <FocusInput /> */}
    {/* <Input /> */}
    {/* <RefsDemo /> */}
    {/* <MemoComp /> */}
    {/* <ParentComp /> */}
    {/* <PureComp /> */}
    {/* <RegComp /> */}
    {/* <Table /> */}
    {/* <FragmentDemo /> */}
    {/* <LifecycleA /> */}
    {/* <LifecycleB /> */}
    {/* <Form /> */}
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    {/* <Inline /> */}
    {/* <StyleSheet primary={true} /> */}
    {/* <NameList /> */}
    {/* <UserGreeting /> */}
    {/* <ParentComponent /> */}
    {/* <EventBind /> */}
    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
    {/* <Counter /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diane" heroName="Wonderwoman"/>
      <Welcome name="Bruce" heroName="Batman"/> */}
      {/* <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diane" heroName="Wonderwoman"/> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;


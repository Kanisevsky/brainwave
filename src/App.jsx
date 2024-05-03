import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Button from './components/Button';
const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Button className="mt-10" href="#login">
          Log In
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

interface IState {
  title: string;
};

const Header = () => {
  const state: IState = {
    title: 'Simple Todo App'
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
      <h1 className="text-2xl font-bold text-center uppercase">
        { state.title }
      </h1>
    </header>
  );
};

export default Header;

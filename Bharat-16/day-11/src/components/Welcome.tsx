type WelcomeProps = {
  name: string;
};

function Welcome({ name }: WelcomeProps):React.ReactElement {
  return <h2>Welcome, {name} 👋</h2>;
}

export default Welcome;

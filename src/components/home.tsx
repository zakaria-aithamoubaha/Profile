import Portfolio from './portfolio/Portfolio';
import { Toaster } from './ui/toaster';

function Home() {
  return (
    <>
      <Portfolio />
      <Toaster />
    </>
  );
}

export default Home;

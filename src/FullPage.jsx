import { Outlet } from 'react-router-dom';
import MenuBar from './Components/Home/MenuBar';
import Footer from './Components/Footer/Footer';

function FullPage() {
  return (
    <>
      <MenuBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default FullPage
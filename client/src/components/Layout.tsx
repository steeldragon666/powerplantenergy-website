import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

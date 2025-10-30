import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from './Chatbot';

export default function Layout() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main role="main">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

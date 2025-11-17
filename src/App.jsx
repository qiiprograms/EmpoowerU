import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Insights from './pages/Insights';
import Stories from './pages/Stories';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-[#060a13] text-white overflow-x-hidden">
            <Navbar />

            <main className="flex-1 mt-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/insights" element={<Insights />} />
                    <Route path="/stories" element={<Stories />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

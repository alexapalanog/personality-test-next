// src/app/page.tsx

"use client";

import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import HomePage from './components/HomePage';
import QuizApp from './components/QuizApp';
import BackgroundIcons from './components/BackgroundIcons';
import Footer from './components/Footer';

// Define the specific type for our page state
type Page = 'home' | 'quiz';

export default function Home() {
    const [page, setPage] = useState<Page>('home');

    const handleStartQuiz = () => {
        setPage('quiz');
    };

    const handleGoHome = () => {
        setPage('home');
    }

    return (
      <>
        <AppHeader page={page} onTakeTest={handleStartQuiz} onGoHome={handleGoHome} />
        <main className={`app-container ${page === 'home' ? 'home-main-container' : ''}`}>
         {page === 'home' ? (
            <HomePage onStartQuiz={handleStartQuiz} />
         ) : (
            // The fix is here: Pass the handleGoHome function to the QuizPage component
            <QuizApp onGoHome={handleGoHome} />
         )}
         <BackgroundIcons />
        </main>
        <Footer />
      </>
    );
}
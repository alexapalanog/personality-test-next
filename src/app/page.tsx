// src/app/page.tsx

"use client";

import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizApp';
import BackgroundIcons from './components/BackgroundIcons';
import Footer from './components/Footer';

// Define the specific type for our page state
type Page = 'home' | 'quiz';

export default function Home() {
    // The fix is here: we add <Page> or <'home' | 'quiz'> to useState.
    // This tells TypeScript the exact values this state can hold.
    const [page, setPage] = useState<Page>('home');

    const handleStartQuiz = () => {
        setPage('quiz');
    };

    const handleGoHome = () => {
        setPage('home');
    }

    return (
      <>
        {/* Now, TypeScript knows that page is of type 'home' | 'quiz', which matches what AppHeader expects. */}
        <AppHeader page={page} onTakeTest={handleStartQuiz} onGoHome={handleGoHome} />
        <main className={`app-container ${page === 'home' ? 'home-main-container' : ''}`}>
         {page === 'home' ? (
            <HomePage onStartQuiz={handleStartQuiz} />
         ) : (
            <QuizPage />
         )}
         <BackgroundIcons />
        </main>
        <Footer />
      </>
    );
}
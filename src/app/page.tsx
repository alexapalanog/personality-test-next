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
            // When on the 'home' page, render both HomePage AND BackgroundIcons
            <>
                <HomePage onStartQuiz={handleStartQuiz} />
                <BackgroundIcons />
            </>
         ) : (
            // When on any other page (i.e., 'quiz'), only render the quiz
            <QuizApp onGoHome={handleGoHome} />
         )}
        </main>
        <Footer />
      </>
    );
}
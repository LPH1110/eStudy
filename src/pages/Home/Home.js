import images from '~/assets/images/index.js';
import Poster from './components/Poster/Poster.js';
import Quote from './components/Quote/Quote.js';

const quotes = [
    {
        id: 0,
        title: 'Flashcards on repeat. Study modes on shuffle.',
        desc: 'Mixed with smart study tools, our flashcards have been helping students ace their toughest exams since 2005.',
        thumbnail: images.quote1,
        isRevert: true,
    },
    {
        id: 1,
        title: 'Whether you plan or cram, find your study jam.',
        desc: 'Early morning? All-nighter? With science-backed revision methods that improve active recall, Quizlet is designed to save you time.',
        thumbnail: images.quote2,
        isRevert: false,
    },
    {
        id: 2,
        title: 'Millions of study sets.',
        desc: 'Discover study sets created by teachers, lecturers and other students, or easily create your own. Revise at home, school or on the go with the mobile app.',
        thumbnail: images.quote3,
        isRevert: true,
    },
    {
        id: 3,
        title: 'Explanations you can trust.',
        desc: 'eStudy explanations show you step-by-step approaches to solve tough problems. Find solutions in 64 subjects, all written and verified by experts.        ',
        thumbnail: images.quote4,
        isRevert: false,
    },
];

function Home() {
    return (
        <div className="container">
            <Poster />
            {quotes.map((quote) => {
                return quote.isRevert ? (
                    <Quote key={quote.id} title={quote.title} desc={quote.desc} thumbnail={quote.thumbnail} revert />
                ) : (
                    <Quote key={quote.id} title={quote.title} desc={quote.desc} thumbnail={quote.thumbnail} />
                );
            })}
        </div>
    );
}

export default Home;

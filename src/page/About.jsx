const About = () => {
    return ( 
        <div className="container mx-auto px-2 md:px-10 lg:px-16 py-8 text-center">
            <h1 className="text-4xl font-bold text-center mb-4">About JanKen</h1>
            <p className="text-lg text-gray-700">
                "JanKen" is our take on the classic Rock, Paper, Scissors game. This game is a simple yet exciting way to settle disputes or just have fun. The rules are straightforward: rock crushes scissors, scissors cut paper, and paper covers rock.
            </p>

            <section className="mt-8">
                <h2 className="text-3xl font-bold mb-4">How to Play</h2>
                <p className="text-lg text-gray-700">
                    To play JanKen, simply choose between rock, paper, or scissors against the computer. The app will randomly generate a choice for the computer, and the winner is determined based on the rules mentioned above. It's a game of luck, strategy, and anticipation.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Features</h2>
                <p className="text-lg text-gray-700">
                    Our JanKen app offers a sleek interface and the ability to track your win, loss, and tie records. Dive into the history page to view your game history and analyze your strategy. Whether you're a casual player or a competitive strategist, JanKen offers something for everyone.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg text-gray-700">
                    Have feedback or suggestions for JanKen? We'd love to hear from you. Reach out to us through our contact form or follow us on social media to stay updated on new features and updates.
                </p>
                {/* Contact form or contact information */}
            </section>
        </div>
     );
}
 
export default About;
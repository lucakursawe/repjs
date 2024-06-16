import E1RMCalculation from '../components/e1rmcalc';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-whit">
      <h1 className="text-5xl font-extrabold mb-4 text-center text-primary-orange">Autoregulate Your Training with REP.js</h1>
      <p className="text-lg mb-4 max-w-5xl text-center text-black">
        REP.js helps you optimize your workouts by calculating your Estimated One Rep Max (E1RM).<br />
        Enter your repetitions, RPE, and weight to get real-time feedback on your performance.<br />
        Tailor your training sessions to your current strength levels, ensuring steady progress and minimizing injury risks.<br />
        Suitable for all fitness levels, REP.js enables efficient and effective autoregulation of your training.
      </p>
      <h2 className="text-2xl font-semibold mb-4 text-white">Calculate Your E1RM</h2>
      <E1RMCalculation />
    </div>
  );
}
import E1RMCalculation from '../components/e1rmcalc';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-12 bg-white">
      <h1 className="text-6xl font-extrabold mb-20 text-left text-primary-orange mx-auto max-w-6xl">
        Autoregulate Your Training with <span className="font-bold text-primary-orange">REP.js</span>
      </h1>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-10 lg:space-y-0">
          <div className="lg:w-2/3 space-y-10">
            <p className="text-2xl text-left text-black leading-relaxed">
              <span className="font-bold text-primary-orange">REP.js</span> helps you optimize your workouts by calculating your <span className="font-bold text-primary-orange">Estimated One Rep Max (E1RM)</span>.<br />
              Enter your repetitions, RPE, and weight to get real-time feedback on your performance.<br />
              Tailor your training sessions to your current strength levels, ensuring steady progress and minimizing injury risks.<br />
              Suitable for all fitness levels, <span className="font-bold text-primary-orange">REP.js</span> enables efficient and effective autoregulation of your training.<br />
              Start your journey towards smarter training and better results today!
            </p>
          </div>
          <div className="lg:w-1/3">
            <E1RMCalculation />
          </div>
        </div>
      </div>
    </div>
  );
}

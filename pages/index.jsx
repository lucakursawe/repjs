import E1RMCalculation from '../components/e1rmcalc';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-primary-orange">
          Autoregulate Your Training with 
          <span className="block text-black">REP.js</span>
        </h1>
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between space-y-6 lg:space-y-0">
          <div className="lg:w-2/3 space-y-6 mt-8">
            <p className="text-2xl text-black leading-relaxed">
              <span className="font-bold text-primary-orange">REP.js</span> helps you optimize your workouts by calculating your <span className="font-bold text-primary-orange">Estimated One Rep Max (E1RM)</span>.<br />
              Enter your <span className="font-bold text-primary-orange">repetitions</span>, <span className="font-bold text-primary-orange">RPE</span>, and <span className="font-bold text-primary-orange">weight</span> to get <span className="font-bold text-primary-orange">real-time feedback</span> on your performance.<br />
              Tailor your training sessions to your current <span className="font-bold text-primary-orange">strength levels</span>, ensuring <span className="font-bold text-primary-orange">steady progress</span> and minimizing <span className="font-bold text-primary-orange">injury risks</span>.<br />
              Suitable for all fitness levels, <span className="font-bold text-primary-orange">REP.js</span> enables <span className="font-bold text-primary-orange">efficient</span> and <span className="font-bold text-primary-orange">effective autoregulation</span> of your training.<br />
            </p>
          </div>
          <div className="lg:w-1/3 flex lg:justify-end lg:-mt-6">
            <E1RMCalculation />
          </div>
        </div>
      </div>
    </div>
  );
}

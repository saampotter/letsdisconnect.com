import { v4 as uuid } from 'uuid';
import clsx from 'clsx';
import { useState } from 'react';
import useApi from '@/hooks/useApi';

const defaultFeatures = [
  {
    id: uuid(),
    name: 'Birthday notifications for friends',
    userGenerated: false,
  },
  {
    id: uuid(),
    name: 'Posts by close family members',
    userGenerated: false,
  },
  {
    id: uuid(),
    name: 'News and recent information',
    userGenerated: false,
  },
  {
    id: uuid(),
    name: 'Friends tagging me in great memes',
    userGenerated: false,
  },
];

const Form = () => {
  const [features, setFeatures] = useState(defaultFeatures);

  const addFeature = e => {
    e.preventDefault();
    const name = e.target.feature.value;
    setFeatures([{ id: uuid(), name, userGenerated: true }, ...features]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.dir(features);
  };

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">Get Started</p>
        <p>
          If you deleted the Facebook app right now, <span className="md:hidden">tap</span>
          <span className="hidden md:inline-block">click</span> the features you couldn't live
          without:
        </p>
      </div>

      <div className="space-y-2">
        <form onSubmit={addFeature} className="relative flex items-center space-x-2">
          <input
            type="text"
            name="feature"
            placeholder="Add Other Feature"
            className="block w-full py-3 pl-4 pr-24 text-base placeholder-gray-500 transition bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring focus:ring-blue-100 focus:border-blue-300"
          />

          <button
            type="submit"
            className="absolute px-4 py-1 transition bg-gray-100 rounded-md right-3 hover:bg-gray-100"
          >
            Add
          </button>
        </form>

        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-2">
            {features.map(feature => (
              <Feature key={feature.id} userGenerated={feature.userGenerated}>
                {feature.name}
              </Feature>
            ))}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-white transition bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const Feature = ({ userGenerated, children }) => {
  const [isSelected, setSelected] = useState(userGenerated);

  return (
    <a
      role="button"
      style={{ WebkitTapHighlightColor: 'transparent' }}
      onClick={() => !userGenerated && setSelected(selected => !selected)}
      className={clsx(
        'flex items-center justify-between w-full px-4 py-3 rounded-md transition duration-100',
        isSelected ? 'bg-blue-100' : 'bg-white',
      )}
    >
      <div className="flex items-center space-x-3">
        <Ping on={isSelected} />
        <span>{children}</span>
      </div>

      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-300"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
      </svg>
    </a>
  );
};

const Ping = ({ on }) => (
  <div className="relative w-3 h-3">
    <span
      className={clsx(
        'block transition w-full h-full rounded-full',
        on ? 'bg-blue-500 animate-ping-once' : 'bg-gray-200',
      )}
    />
    <span
      className={clsx(
        'block absolute top-0 left-0 transition w-full h-full rounded-full',
        on ? 'bg-blue-500' : 'bg-gray-200',
      )}
    />
  </div>
);

export default Form;

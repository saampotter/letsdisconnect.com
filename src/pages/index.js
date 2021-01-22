import { PrismaClient } from '@prisma/client';
import Form from '@/components/Form';

const Home = () => (
  <>
    <div className="grid py-20 sm:grid-cols-3 app-container">
      <div className="space-y-4 sm:col-span-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-blue-500">Let's Disconnect</h1>
          <h2 className="text-xl">An initiative to help people slowly delete social media apps.</h2>
        </div>

        <p className="text-gray-600">
          Removing a whole social media app all at once is hard. These platforms offer features that
          have become indispensable to our function. Our aim is to{' '}
          <span className="text-blue-500">provide tools that help you disconnect slowly</span>, and
          gracefully.
        </p>
      </div>
    </div>

    <div className="py-20 bg-gray-100">
      <div className="app-container">
        <Form />
      </div>
    </div>
  </>
);

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;

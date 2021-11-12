import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import CompetitionBox from '../components/CompetitionBox';
import FrontPageImage from '../assets/IMG_6277.jpeg';
import AboutImage from '../assets/IMG_0834.jpg';
import TrainingImage from '../assets/IMG_0827.jpeg';
import LearningImage from '../assets/DF9946C5-98CD-439A-9F06-6738E77EB93F.jpg';
import TrainingMoreImage from '../assets/IMG_5016.jpeg';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex mb-20">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Fuerza Futbol
          </h1>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Learn More</Button>
          </p>
          <p className="mt-4 text-gray-600">This would be a really good place for a tagline of some sort.</p>
        </div>
        <div className="lg:w-1/2">
          <img src={FrontPageImage} alt="team" />
        </div>
      </div>
    </section>
    <section id="about" className="py-40 bg-primary bg-opacity-25">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">About Us</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12 items-center">
          <div className="flex-1 px-3">
            <Card className="bg-white">
              <p className="lg:text-xl">
                Fúerza CF is an elite soccer team in the Des Moines area for ‘09
                girls seeking to excel by training in a more intense and dynamic
                environment & competing in highly competitive tournaments.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
              <img src={AboutImage} alt="team" />
          </div>
          <div className="flex-1 px-3">
            <Card className="bg-white">
              <p className="lg:text-xl">
                It is a team oriented philosophy with a goal to compete against
                top teams and divisions around the Midwest as well as national
                tournaments against top ranked teams.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <div className="">
    <SplitSection
      id="training"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Year Round Training</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Team trains year round including full field 11v11 formats
            over the winter to ensure preparation for outdoor play.
          </p>
        </div>
      }
      secondarySlot={<img src={TrainingImage} alt="team" />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48 ">
          <h3 className="text-3xl font-semibold leading-tight">
            Multifaceted Cultivation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Training will focus on all aspects of the game including
            individual technical development as well as tactical education
            to ensure a well rounded athlete.
          </p>
        </div>
      }
      secondarySlot={<img src={TrainingMoreImage} alt="team" />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Trace
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            <a href={''}>Trace</a> is utilized to review game film in a team and individual
            setting as a comprehension tool to visually understand areas
            that need to be reinforced and improved.
          </p>
        </div>
      }
      secondarySlot={<img src={LearningImage} alt="team" />}
    />
    </div>
    <section id="competition" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Competition</LabelText>
        <div className="flex flex-col items-center lg:flex-row mt-8 lg:px-24 lg:items-start">
          <div className="w-full sm:w-1/4 mx-5">
            <CompetitionBox primaryText="ECNL" secondaryText="Elite Clubs National League" />
          </div>
          <div className="w-full sm:w-1/4 mx-5">
            <CompetitionBox primaryText="SCNL" secondaryText="Select Clubs National Showcase League" />
          </div>
          <div className="w-full sm:w-1/4 mx-5">
            <CompetitionBox primaryText="Friendly" secondaryText="Tournaments" />
          </div>
          <div className="w-full sm:w-1/4 mx-5">
            <CompetitionBox primaryText="Winter" secondaryText="The team plays all year in competitive tournaments that are full field (11v11)" />
          </div>
        </div>
      </div>
    </section>
    <section id="tryouts" className="py-40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:-mx-3">
          <Card className="mb-8 bg-primary">
            <LabelText className="mb-8 text-white text-center text-3xl">Tryouts</LabelText>
            <p className="text-white">Fuerza CF is an invite only team that continuously seeks athletes who
              are interested in training and competing at the highest level of competition
              on a regional and national stage. We do not have a traditional tryout where
              large groups pay a fee to tryout, rather athletes are evaluated and selected
              on an individual basis. If interested in joining please utilize the contact
              page at any point in the year and athletes will be invited to train at 2-3
              sessions with the current team.</p>
          </Card>
        </div>
      </div>
    </section>
    <section className="py-5 lg:py-10 bg-gray-200">
    <div className="container mx-auto my-15 py-20 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to get involved?</h3>
      <p className="mt-8 text-xl font-light">
        Yellow card center-half defender UEFA European Championship World Cup hat trick halftime soccer red card three-five-two forward.
      </p>
      <p className="mt-8">
        <Button size="xl">Contact us to Learn More</Button>
      </p>
    </div>
    </section>
  </Layout>
);

export default Index;

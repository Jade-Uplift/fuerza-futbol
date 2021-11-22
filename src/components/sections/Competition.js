import React from 'react';
import LabelText from '../LabelText';
import CompetitionBox from '../CompetitionBox';

const Competition = () => {
  return (
    <section id='competition' className='pt-20 lg:pt-32'>
      <div className='container mx-auto text-center'>
        <LabelText className='text-gray-600'>Competition</LabelText>
        <div className='flex flex-col items-center lg:flex-row mt-8 lg:px-24 lg:items-start'>
          <div className='w-full sm:w-1/4 mx-5'>
            <CompetitionBox primaryText='ECNL' secondaryText='Elite Clubs National League' />
          </div>
          <div className='w-full sm:w-1/4 mx-5'>
            <CompetitionBox primaryText='SCNL' secondaryText='Select Clubs National Showcase League' />
          </div>
          <div className='w-full sm:w-1/4 mx-5'>
            <CompetitionBox primaryText='Tournaments' secondaryText='Top Flight/Gold Bracket Only' />
          </div>
          <div className='w-full sm:w-1/4 mx-5'>
            <CompetitionBox primaryText='Winter'
                            secondaryText='The team plays all year in competitive tournaments that are full field (11v11)' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competition
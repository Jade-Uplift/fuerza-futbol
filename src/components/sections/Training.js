import React from 'react';
import SplitSection from '../SplitSection';
import TrainingImage from '../../assets/IMG_0827.jpeg';
import TrainingMoreImage from '../../assets/IMG_5016.jpeg';
import LearningImage from '../../assets/DF9946C5-98CD-439A-9F06-6738E77EB93F.jpg';

const Training = () => {
  return (
    <div className=''>
      <SplitSection
        id='training'
        primarySlot={
          <div className='lg:pr-32 xl:pr-48'>
            <h3 className='text-3xl font-semibold leading-tight'>Year Round Training</h3>
            <p className='mt-8 text-xl font-light leading-relaxed'>
              Team trains year round including full field 11v11 formats
              over the winter to ensure preparation for outdoor play.
            </p>
          </div>
        }
        secondarySlot={<img src={TrainingImage} alt='team' />}
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div className='lg:pl-32 xl:pl-48 '>
            <h3 className='text-3xl font-semibold leading-tight'>
              Multifaceted Cultivation
            </h3>
            <p className='mt-8 text-xl font-light leading-relaxed'>
              Training will focus on all aspects of the game including
              individual technical development as well as tactical education
              to ensure a well rounded athlete.
            </p>
          </div>
        }
        secondarySlot={<img src={TrainingMoreImage} alt='team' />}
      />
      <SplitSection
        primarySlot={
          <div className='lg:pr-32 xl:pr-48'>
            <h3 className='text-3xl font-semibold leading-tight'>
              Trace
            </h3>
            <p className='mt-8 text-xl font-light leading-relaxed'>
              <a href={'https://traceup.com'}>Trace</a> is utilized with each player for all games
              to review game film in a team and individual setting as a comprehension
              tool to visually understand areas of focus and reinforcement.
            </p>
          </div>
        }
        secondarySlot={<img src={LearningImage} alt='team' />}
      />
    </div>
  );
}

export default Training
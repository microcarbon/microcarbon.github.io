import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Engine to Net Zero',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        microCarbon is a carbon emission data operation system 
        for any kind of business, government agency and people 
        whom need measure, disclosure and audit their carbon emissions.
      </>
    ),
  },
  {
    title: 'The Kernel of Carbon Accounting',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Net Zero Emssions starts with accurate carbon accounting. microCarbon 
        is the kernel of the carbon accounting, make all the emssion data trusted, provanceable 
        and privacy preserving.     
      </>
    ),
  },
  {
    title: 'Powered by People and AI',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Leveraging the expertise of carbon experts and the power of AI, 
        microCarbon is able to provide powerful support for account scope 1, 2 and 3 emssions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

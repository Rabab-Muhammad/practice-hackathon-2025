import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Welcome to a comprehensive journey into the world of **Physical AI and Humanoid Robotics**. This collection of chapters provides an in-depth exploration of the foundational concepts, practical applications, and future trends in embodied intelligence.
        </p>
        <div className="text--center">
          <img src="/img/undraw_docusaurus_react.svg" alt="Humanoid Robot" className={styles.heroImage} />
        </div>
        <div className={clsx('margin-top--lg', styles.buttons)}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/chapter-intro">
            Start Reading Chapters &nbsp; &#x27A1;
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Explore the fascinating world of Physical AI and Humanoid Robotics through our comprehensive chapters.">
      <HomepageHeader />
      <main>
        {/* Optional: Add a brief overview of the chapters or a table of contents here */}
      </main>
    </Layout>
  );
}

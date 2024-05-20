import type { Schema, Attribute } from '@strapi/strapi';

export interface CrewMemberCrewMember extends Schema.Component {
  collectionName: 'components_crew_member_crew_members';
  info: {
    displayName: 'Crew Member';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    about: Attribute.Blocks;
    years_served: Attribute.Integer;
    primary_profile: Attribute.Media;
    secondary_profile: Attribute.Media;
    question_one: Attribute.String;
    question_one_answer: Attribute.Text;
    question_two: Attribute.String;
    question_two_answer: Attribute.Text;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    header: Attribute.String;
    lithograph: Attribute.Media;
    illustration: Attribute.Media;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
    target: Attribute.String & Attribute.DefaultTo<'_blank'>;
  };
}

export interface PageNavigationPageNavigation extends Schema.Component {
  collectionName: 'components_page_navigation_page_navigations';
  info: {
    displayName: 'Page Navigation';
    description: '';
  };
  attributes: {
    header: Attribute.String;
    content: Attribute.Blocks;
    image: Attribute.Media;
    link: Attribute.Component<'link.link'>;
  };
}

export interface PrefooterPrefooter extends Schema.Component {
  collectionName: 'components_prefooter_prefooters';
  info: {
    displayName: 'Prefooter';
  };
  attributes: {
    quote: Attribute.String;
    illustration: Attribute.Media;
    lithograph: Attribute.Media;
  };
}

export interface StatisticStatistic extends Schema.Component {
  collectionName: 'components_statistic_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    subheader: Attribute.String;
    header: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ValueValue extends Schema.Component {
  collectionName: 'components_value_values';
  info: {
    displayName: 'Value';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    content: Attribute.Blocks;
    bullets: Attribute.Blocks;
    header: Attribute.String;
    images: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'crew-member.crew-member': CrewMemberCrewMember;
      'hero.hero': HeroHero;
      'link.link': LinkLink;
      'page-navigation.page-navigation': PageNavigationPageNavigation;
      'prefooter.prefooter': PrefooterPrefooter;
      'statistic.statistic': StatisticStatistic;
      'value.value': ValueValue;
    }
  }
}
